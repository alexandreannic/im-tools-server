import {KoboSdk} from '../connector/kobo/KoboClient/KoboSdk'
import {Prisma, PrismaClient} from '@prisma/client'

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
      distinct:'formId'
    })
  }

  readonly fetchAnswers = (formId: string, filters: Partial<Period>) => {
    return this.prisma.koboAnswers.findMany({
      where: {
        formId,
        // end: {
        //   gte: filters.start,
        //   lte: filters.end,
        // }
      }
    })
  }
}

