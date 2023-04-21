import {KoboSdk} from '../connector/kobo/KoboClient/KoboSdk'
import {Prisma, PrismaClient} from '@prisma/client'

export interface Period {
  start: Date
  end: Date
}

export class KoboService {

  constructor(
    private sdk: KoboSdk,
    private prisma: PrismaClient
  ) {

  }

  readonly fetchForms = async () => {
    const z = this.prisma.koboAnswers.findMany({
      distinct:'formId'
    })
  }

  readonly syncImportAnswers = async (formId: string) => {
    const findLast = await this.prisma.koboAnswers.findFirst({
      orderBy: [{
        start: 'desc'
      }]
    })
    const answers = await this.sdk.getAnswers(formId, {
      start: findLast?.start
    })
    const inserts = answers.data.map(_ => {
      const res: Prisma.KoboAnswersCreateInput = {
        formId,
        answers: _.answers,
        id: _.id,
        start: _.start,
        end: _.end,
        submissionTime: _.submissionTime,
        validationStatus: _.validationStatus,
        lastValidatedTimestamp: _.lastValidatedTimestamp,
        validatedBy: _.validatedBy,
        version: _.version,
      }
      return res
    })
    return this.prisma.koboAnswers.createMany({
      data: inserts
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

