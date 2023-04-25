import {KoboSdk} from '../connector/kobo/KoboClient/KoboSdk'
import {Prisma, PrismaClient} from '@prisma/client'
import {ApiPagination, defaultPagination, toApiPaginate} from '../../core/Type'

export interface Period {
  start: Date
  end: Date
}

export class KoboService {

  constructor(
    private prisma: PrismaClient
  ) {

  }

  readonly fetchForms = async () => {
    const z = this.prisma.koboAnswers.findMany({
      distinct: 'formId'
    })
  }

  readonly fetchAnswers = (formId: string, filters: Partial<Period>, paginate: ApiPagination = defaultPagination) => {
    return this.prisma.koboAnswers.findMany({
      take: paginate.limit,
      skip: paginate.offset,
      where: {
        formId,
        // end: {
        //   gte: filters.start,
        //   lte: filters.end,
        // }
      }
    }).then(toApiPaginate)
  }
}

