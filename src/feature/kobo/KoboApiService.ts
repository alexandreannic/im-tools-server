import {KoboForm, Prisma, PrismaClient} from '@prisma/client'
import {KoboSdkGenerator} from './KoboSdkGenerator'
import {KoboAnswerParams} from '../connector/kobo/KoboClient/type/KoboAnswer'
import {logger, Logger} from '../../utils/Logger'
import {KoboSdk} from '../connector/kobo/KoboClient/KoboSdk'

export class KoboApiService {
  constructor(
    private prisma: PrismaClient,
    private koboSdkGenerator: KoboSdkGenerator = new KoboSdkGenerator(prisma),
    private log: Logger = logger('KoboApiService')
  ) {
  }

  readonly constructSdk = (serverId: string): Promise<KoboSdk> => this.koboSdkGenerator.construct(serverId)

  readonly saveApiFormToDb = async (serverId: string, formId: string): Promise<KoboForm> => {
    const maybeSavedForm = await this.prisma.koboForm.findFirst({where: {id: formId}})
    if (maybeSavedForm) return maybeSavedForm
    const sdk = await this.koboSdkGenerator.construct(serverId)
    const form = await sdk.getForm(formId)
    return this.prisma.koboForm.create({
      data: {
        id: formId,
        name: form.name,
        serverId,
      }
    })
  }

  readonly getForms = async (serverId: string) => {
    const sdk = await this.koboSdkGenerator.construct(serverId)
    return await sdk.getForms()
  }

  readonly fetchAnswers = async (serverId: string, formId: string, params: KoboAnswerParams = {}) => {
    const sdk = await this.koboSdkGenerator.construct(serverId)
    return sdk.getAnswers(formId, params)
  }

  readonly saveApiAnswerToDb = async (serverId: string, formId: string) => {
    const findLast = await this.prisma.koboAnswers.findFirst({
      orderBy: [{
        end: 'desc',
      }]
    })
    const sdk = await this.koboSdkGenerator.construct(serverId)
    const answers = await sdk.getAnswers(formId)
    if (answers.total === 0) {
      this.log.info('No data to update since ' + findLast?.start)
    } else {
      this.log.info(`Insert ${answers.total} rows.`)
    }
    const inserts = answers.data.map(_ => {
      const res: Prisma.KoboAnswersUncheckedCreateInput = {
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