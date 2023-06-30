import {PrismaClient} from '@prisma/client'
import {DatabaseHelper} from '../../db/DatabaseHelper'

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
}