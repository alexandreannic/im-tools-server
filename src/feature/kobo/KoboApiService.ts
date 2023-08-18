import {KoboForm, Prisma, PrismaClient} from '@prisma/client'
import {KoboSdkGenerator} from './KoboSdkGenerator'
import {KoboAnswerParams, KoboId} from '../connector/kobo/KoboClient/type/KoboAnswer'
import {logger, Logger} from '../../helper/Logger'
import {KoboSdk} from '../connector/kobo/KoboClient/KoboSdk'
import {UUID} from '../../core/Type'

export class KoboApiService {
  constructor(
    private prisma: PrismaClient,
    private koboSdkGenerator: KoboSdkGenerator = new KoboSdkGenerator(prisma),
    private log: Logger = logger('KoboApiService')
  ) {
  }

  readonly constructSdk = (serverId: string): Promise<KoboSdk> => this.koboSdkGenerator.construct(serverId)

  /** @deprecated?*/
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

  readonly fetchAnswers = async (serverId: string, formId: string, params: KoboAnswerParams = {}) => {
    const sdk = await this.koboSdkGenerator.construct(serverId)
    return sdk.getAnswers(formId, params)
  }

  /** @deprecated since it duplicates uuid */
  private readonly softDelete = (serverId: UUID, formId: KoboId, uuids: UUID[]) => {
    return this.prisma.koboAnswers.findMany({where: {id: {notIn: uuids}}}).then(res => {
      return Promise.all(res.map(_ => {
        return this.prisma.koboAnswers.updateMany({
          where: {
            uuid: _.uuid,
            source: serverId
          },
          data: {
            deletedAt: new Date(),
            deletedBy: 'Server sync',
          }
        })
      }))
    })
  }

  private readonly hardDelete = (uuids: UUID[]) => {
    return this.prisma.koboAnswers.findMany({where: {id: {notIn: uuids}}}).then(res => {
      return Promise.all(res.map(_ => {
        return this.prisma.koboAnswers.deleteMany({
          where: {
            uuid: _.uuid,
          },
        })
      }))
    })
  }

  readonly syncApiAnswerToDb = async (serverId: string, formId: string) => {
    const sdk = await this.koboSdkGenerator.construct(serverId)
    const remoteAnswers = await sdk.getAnswers(formId).then(_ => _.data)
    const localAnswersIndex = await this.prisma.koboAnswers.findMany({where: {formId}, select: {id: true}}).then(_ => {
      return new Set(_.map(_ => _.id))
    })

    const handleDelete = async () => {
      const remoteIdsIndex = new Set(remoteAnswers.map(_ => _.id))
      const idsToDelete = [...localAnswersIndex].filter(_ => !remoteIdsIndex.has(_))
      await this.prisma.koboAnswers.deleteMany({where: {formId, id: {in: idsToDelete}}})
    }

    const handleCreate = async () => {
      const notInsertedAnswers = remoteAnswers.filter(_ => !localAnswersIndex.has(_.id))
      const inserts = notInsertedAnswers.map(_ => {
        const res: Prisma.KoboAnswersUncheckedCreateInput = {
          formId,
          answers: _.answers,
          id: _.id,
          uuid: _.uuid,
          start: _.start,
          end: _.end,
          submissionTime: _.submissionTime,
          validationStatus: _.validationStatus,
          lastValidatedTimestamp: _.lastValidatedTimestamp,
          validatedBy: _.validatedBy,
          version: _.version,
          source: serverId,
          attachments: _.attachments,
        }
        return res
      })
      return this.prisma.koboAnswers.createMany({
        data: inserts,
        skipDuplicates: true,
      })
    }

    const handleUpdate = async () => {
      const answersToUpdate = remoteAnswers.filter(_ => localAnswersIndex.has(_.id))
      await Promise.all(answersToUpdate.map(a => {
        return this.prisma.koboAnswers.update({
          where: {
            id: a.id,
          },
          data: {
            answers: a.answers,
          }
        })
      }))
    }

    await handleDelete()
    await handleCreate()
    await handleUpdate()
  }
}
