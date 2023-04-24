import {Prisma, PrismaClient} from '@prisma/client'
import {KoboSdkGenerator} from './KoboSdkGenerator'
import {KoboAnswerParams} from '../connector/kobo/KoboClient/type/KoboAnswer'

export class KoboApiService {
  constructor(
    private prisma: PrismaClient,
    private koboSdkGenerator: KoboSdkGenerator = new KoboSdkGenerator(prisma)
  ) {
  }

  readonly getForms = async (koboServerId: string) => {
    const sdk = await this.koboSdkGenerator.construct(koboServerId)
    return await sdk.getForms()
  }

  readonly fetchAnswers = async (koboServerId: string, formId: string, params: KoboAnswerParams) => {
    const sdk = await this.koboSdkGenerator.construct(koboServerId)
    return sdk.getAnswers(formId, params)
  }

  readonly syncImportAnswers = async (koboServerId: string, formId: string) => {
    const findLast = await this.prisma.koboAnswers.findFirst({
      orderBy: [{
        start: 'desc'
      }]
    })
    const sdk = await this.koboSdkGenerator.construct(koboServerId)
    const answers = await sdk.getAnswers(formId, {
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
}