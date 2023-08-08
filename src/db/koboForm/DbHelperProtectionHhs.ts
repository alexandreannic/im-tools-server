import {PrismaClient} from '@prisma/client'
import {ProtHHS_2_1Options} from '../generatedKoboInterface/ProtHHS_2_1/ProtHHS_2_1Options'
import {DbKoboFormHelper} from './Helper'
import {ProtHHS_2_1} from '../generatedKoboInterface/ProtHHS_2_1/ProtHHS_2_1'
import {Enum, map} from '@alexandreannic/ts-utils'
import {endOfDay, endOfMonth, parse, startOfMonth} from 'date-fns'
import {koboFormsId} from '../../core/conf/KoboFormsId'

type Office = typeof ProtHHS_2_1Options['staff_to_insert_their_DRC_office']

/**
 * From Romane reporting file
 */
export enum Donor {
  'BHA_UKR000284' = 'BHA UKR-000284',
  'OKF_UKR000309' = 'OKF UKR-000309',
  'ECHO_UKR000322' = 'ECHO UKR-000322',
  'UHF_IV_UKR000314' = 'UHF IV UKR-000314',
  'NN2_UKR000298' = 'NN2 UKR-000298',
}

type ReportingmDonorMap = Partial<Record<
  keyof Office,
  Partial<Record<Donor, {ai?: number, ipt?: number}>>>
>

const reportingUntilUHF4Approval: ReportingmDonorMap = {
  'lviv': {
    [Donor.BHA_UKR000284]: {ai: .5, ipt: 1,},
    [Donor.OKF_UKR000309]: {ai: .5, ipt: 1,},
  },
  'chernihiv': {
    [Donor.BHA_UKR000284]: {ipt: 1, ai: 1},
  },
  'dnipro': {
    [Donor.BHA_UKR000284]: {ipt: 1, ai: 1},
  },
  'kharkiv': {
    [Donor.BHA_UKR000284]: {ipt: 1},
    [Donor.UHF_IV_UKR000314]: {ai: 1, ipt: 1},
  },
  'mykolaiv': {
    [Donor.UHF_IV_UKR000314]: {ai: 1, ipt: 1},
    [Donor.NN2_UKR000298]: {ipt: 1},
  },
}

const reporting: Record<'2023-06' | '2023-07', ReportingmDonorMap> = {
  '2023-06': reportingUntilUHF4Approval,
  '2023-07': reportingUntilUHF4Approval
}

export interface DbProtectionHhs2Tags {
  reportingAiDonor?: Donor
  reportingIptDonor?: Donor
}

export class DbHelperProtectionHhs {

  constructor(private prisma: PrismaClient) {
  }

  readonly assignDonorsForHhs = async (months: (keyof typeof reporting)[] = [
    '2023-06',
    '2023-07',
  ]) => {
    return Promise.all(months.map(this.assignDonor))
  }

  readonly assignDonor = async (month: keyof typeof reporting) => {
    const start = startOfMonth(parse(month, 'yyyy-MM', new Date()))
    const end = endOfDay(endOfMonth(parse(month, 'yyyy-MM', new Date())))
    const data = await this.prisma.koboAnswers.findMany({
      where: {
        formId: koboFormsId.prod.protectionHh_2_1,
        end: {
          gte: start,
          lt: end,
        },
      }
    }).then(_ => _.map(DbKoboFormHelper.definedJsonType<ProtHHS_2_1>()))
    await Promise.all(data
      .filter(_ => !!_.answers.staff_to_insert_their_DRC_office)
      .map(_ => {
        if (!reporting[month]) {
          throw new Error(`Month ${month} not handled.`)
        }
        return map(reporting[month][_.answers.staff_to_insert_their_DRC_office], reporting => {
          const donor: {ipt: Donor[], ai?: Donor} = {ipt: []}
          Enum.entries(reporting).forEach(([k, v], donorIndex) => {
            if (v.ipt === 1)
              donor.ipt.push(k)
            else if (v.ipt === .5) {
              if (+_.id % 2 === donorIndex) {
                donor.ipt.push(k)
              }
            }
            if (v.ai === 1)
              donor.ai = k
            else if (v.ai === .5) {
              if (+_.id % 2 === donorIndex) {
                donor.ai = k
              }
            }
          })
          return this.prisma.koboAnswers.update({
            where: {
              uuid: _.uuid,
            },
            data: {tags: donor}
          })
        })
      }))
  }
}
