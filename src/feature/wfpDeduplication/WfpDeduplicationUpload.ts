import {WFPBuildingBlockSdk} from '../connector/wfpBuildingBlock/WfpBuildingBlockSdk'
import {AssistancePrevented, AssistanceProvided, WfpFilters, WfpPaginate} from '../connector/wfpBuildingBlock/WfpBuildingBlockType'
import {PrismaClient} from '@prisma/client'
import {WfpDeduplicationStatus} from '../../db/models/WfpDeduplicationStatus'
import {addMinutes, parse, subMinutes} from 'date-fns'
import XlsxPopulate from 'xlsx-populate'
import {ApiPaginate} from '../../core/Type'
import {WfpDeduplicationOffice} from './WfpDeduplicationType'
import {appConf, AppConf} from '../../core/conf/AppConf'
import {WfpBuildingBlockClient} from '../connector/wfpBuildingBlock/WfpBuildingBlockClient'

export class WfpDeduplicationUpload {

  private constructor(
    private prisma: PrismaClient,
    private wfpSdk: WFPBuildingBlockSdk
  ) {

  }

  static readonly construct = async (conf: AppConf, prisma: PrismaClient) => {
    const wfpSdk = new WFPBuildingBlockSdk(await new WfpBuildingBlockClient({
      login: appConf.buildingBlockWfp.login,
      password: appConf.buildingBlockWfp.password,
      otpUrl: appConf.buildingBlockWfp.otpURL,
    }).generate())
    return new WfpDeduplicationUpload(prisma, wfpSdk)
  }

  readonly saveAll = async () => {
    await this.setOblast()
    await this.prisma.mpcaWfpDeduplication.deleteMany()
    await Promise.all([
      this.runOnAll({
        req: _ => this.wfpSdk.getAssistanceProvided(_),
        fn: async (res: AssistanceProvided[]) => {
          await this.upsertMappingId(res.map(_ => _.beneficiaryId))
          await this.prisma.mpcaWfpDeduplication.createMany({
            data: res.map(_ => {
              return ({
                amount: +_.amount,
                wfpId: _.id,
                createdAt: _.createdAt,
                expiry: _.expiry,
                beneficiaryId: _.beneficiaryId,
                status: WfpDeduplicationStatus.NotDeduplicated,
                validFrom: _.validFrom,
              })
            })
          })
        }
      }),
      this.runOnAll({
        req: _ => this.wfpSdk.getAssistancePrevented(_),
        fn: async (res: AssistancePrevented[]) => {
          await this.upsertMappingId(res.map(_ => _.beneficiaryId))
          await this.prisma.mpcaWfpDeduplication.createMany({
            data: res.map(_ => {
              const status = (() => {
                if (_.message.includes('Partially deduplicated')) {
                  return WfpDeduplicationStatus.PartiallyDeduplicated
                } else if (_.message.includes('Deduplicated')) {
                  return WfpDeduplicationStatus.Deduplicated
                }
                return WfpDeduplicationStatus.Error
              })()
              const existing = (() => {
                const match = _.message.match(/\-\s+Already\s+assisted\s+by\s+(.*?)\s+from\s+(\d{8})\s+to\s+(\d{8})\s+for\s+UAH\s+([\d,\.]+)\s+for\s+CASH-MP/)
                return {
                  existingOrga: match![1],
                  existingStart: parse(match![2], 'yyyyMMdd', new Date()),
                  existingEnd: parse(match![3], 'yyyyMMdd', new Date()),
                  existingAmount: +match![4].replace(',', '').split('.')[0],
                }
              })()
              return ({
                amount: +_.amount,
                wfpId: _.id,
                createdAt: _.createdAt,
                expiry: _.expiry,
                beneficiaryId: _.beneficiaryId,
                message: _.message,
                status,
                validFrom: _.validFrom,
                ...existing,
              })
            })
          })
        }
      }),
    ])
    await this.mergePartiallyDuplicated()
  }

  private readonly upsertMappingId = async (ids: string[]) => {
    await Promise.all(ids.map(_ => this.prisma.mpcaWfpDeduplicationIdMapping.upsert({
      create: {beneficiaryId: _},
      where: {beneficiaryId: _, taxId: undefined},
      update: {beneficiaryId: _},
    })))
  }

  private readonly mergePartiallyDuplicated = async () => {
    const partiallyDuplicated = await this.prisma.mpcaWfpDeduplication.findMany({
      where: {
        status: WfpDeduplicationStatus.PartiallyDeduplicated
      }
    })
    await Promise.all(partiallyDuplicated.map(_ => {
      return this.prisma.mpcaWfpDeduplication.findMany({
        where: {
          status: WfpDeduplicationStatus.NotDeduplicated,
          beneficiaryId: _.beneficiaryId,
          createdAt: {gt: subMinutes(_.createdAt, 2), lt: addMinutes(_.createdAt, 2)}
        }
      }).then(res => {
        if (res.length !== 1)
          console.error(`Problem when searching matching entry ${_.beneficiaryId} at ${_.createdAt}, found ${res.length} entries.`)
        if (res.length > 0)
          return this.prisma.mpcaWfpDeduplication.update({data: {amount: res[0].amount}, where: {id: _.id}}).then(() => res[0].id)
        else
          return Promise.resolve(undefined)
      }).then(deprecatedId => {
        if (deprecatedId)
          return this.prisma.mpcaWfpDeduplication.delete({where: {id: deprecatedId}}).catch(() => Promise.resolve(undefined))
        return Promise.resolve(undefined)
      })
    }))
  }

  private readonly runOnAll = async <T>({
    req,
    fn
  }: {
    req: (_: WfpFilters) => Promise<ApiPaginate<T>>,
    fn: (batch: T[]) => Promise<void>
  }) => {
    const requests: Promise<ApiPaginate<T>>[] = [
      req({limit: 1000, offset: 0})
    ]
    const initialRequest = await requests[0]
    const limit = initialRequest.data.length
    for (let i = limit; i < initialRequest.total; i = i + limit)
      requests.push(req({limit, offset: i}))
    await Promise.all(requests.map(r => r.then(_ => fn(_.data))))
  }

  private setOblast = async () => {
    const possibleOffices = ['HRK', 'NLV', 'CEJ', 'DNK', 'CWC', 'NLK', 'LWO', 'CHJ']
    const officeMapping: Record<string, WfpDeduplicationOffice> = {
      'HRK': WfpDeduplicationOffice.Kharkiv,
      'NLV': WfpDeduplicationOffice.Mykloaiv,
      'CEJ': WfpDeduplicationOffice.Chernihiv,
      'DNK': WfpDeduplicationOffice.Dnipro,
      'CWC': WfpDeduplicationOffice.Lviv,
      'NLK': WfpDeduplicationOffice.Mykloaiv,
      'LWO': WfpDeduplicationOffice.Lviv,
      'CHJ': WfpDeduplicationOffice.Chernihiv,
    }
    await this.runOnAll({
      req: this.wfpSdk.getImportFiles, fn: async (imports) => {
        const updates$ = imports.map(async (_) => {
          const office = possibleOffices.find(oblastCode => _.fileName.includes(oblastCode))
          if (!office) console.warn(`Oblast not found for filename ${_.fileName}`)
          const where = {
            createdAt: {
              gt: subMinutes(_.finishedAt, 10),
              lt: addMinutes(_.finishedAt, 10),
            }
          }
          if (_.fileName as any === 'HRK_20230331_Raw.xlsx.gpg') {
          }
          const registedDedupCount = await this.prisma.mpcaWfpDeduplication.count({where})
          if (registedDedupCount !== _.additionalInfo.rowCount) {
            console.warn(`Found ${registedDedupCount} rows database but ${_.additionalInfo.rowCount} in in ${_.fileName} at ${_.finishedAt}.`)
          }
          await this.prisma.mpcaWfpDeduplication.updateMany({
            where,
            data: {
              office: office ? officeMapping[office] : undefined,
              fileName: _.fileName,
              fileUpload: new Date(_.finishedAt)
            }
          })
        })
        await Promise.all(updates$)
      }
    })

  }
}

//"createdAt" between '2023-03-31' and '2023-04-01'
// office is not null 2315