import {PrismaClient} from '@prisma/client'
import {DatabaseHelper} from '../../db/DatabaseHelper'
import XlsxPopulate from 'xlsx-populate'

interface WfpDbSearch {
  limit?: number
  offset?: number
  taxId?: string[]
  createdAtStart?: Date
  createdAtEnd?: Date
}

export class WfpDeduplicationService {

  constructor(private prisma: PrismaClient) {

  }

  readonly search = async (search: WfpDbSearch) => {
    const where = {
      createdAt: {
        gte: search.createdAtStart,
        lte: search.createdAtEnd,
      },
      beneficiary: {
        taxId: {in: search.taxId}
      }
    }
    const [totalSize, data] = await Promise.all([
      this.prisma.mpcaWfpDeduplication.count({where}),
      this.prisma.mpcaWfpDeduplication.findMany({
        include: {
          beneficiary: {
            select: {
              taxId: true,
            }
          }
        },
        where,
        take: search.limit,
        skip: search.offset,
        orderBy: {
          createdAt: 'desc',
        }
      }),
    ])
    return DatabaseHelper.toPaginate(totalSize)(data)
  }

  readonly uploadTaxId = async (filePath: string) => {
    const xls = await XlsxPopulate.fromFileAsync(filePath)
    await Promise.all(xls.activeSheet()._rows
      .splice(1)
      .map(_ => ({beneficiaryId: _.cell(1).value() as string, taxId: '' + _.cell(2).value() as string}))
      .map(_ => this.prisma.mpcaWfpDeduplicationIdMapping.upsert({
        update: _,
        where: {beneficiaryId: _.beneficiaryId},
        create: _,
      }))
    )
  }
}