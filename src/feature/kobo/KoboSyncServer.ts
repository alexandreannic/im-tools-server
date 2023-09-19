import {UUID} from '../../core/Type'
import {KoboId} from '../connector/kobo/KoboClient/type/KoboAnswer'
import {Prisma, PrismaClient} from '@prisma/client'
import {KoboSdkGenerator} from './KoboSdkGenerator'
import {logger, Logger} from '../../helper/Logger'
import {createdBySystem} from '../../db/DbInit'

export class KoboSyncServer {

  constructor(
    private prisma: PrismaClient,
    private koboSdkGenerator: KoboSdkGenerator = new KoboSdkGenerator(prisma),
    private log: Logger = logger('KoboApiService')
  ) {
  }

  readonly syncAllApiAnswersToDb = async (updatedBy: string = createdBySystem) => {
    const allForms = await this.prisma.koboForm.findMany()
    this.log.info(`Synchronize kobo forms:`)
    for (const form of allForms) {
      try {
        this.log.info(`Synchronizing ${form.name} (${form.id}) ...`)
        await this.syncApiForm(form.serverId, form.id, updatedBy)
        this.log.info(`Synchronizing ${form.name} (${form.id}) completed.`)
      } catch (e) {
        this.log.error(`Synchronizing ${form.name} (${form.id}) FAILED!`)
        console.error(e)
      }
    }
    this.log.info(`Synchronize kobo forms completed!`)
  }

  readonly syncApiForm = async (serverId: UUID, formId: KoboId, updatedBy?: string) => {
    await this.syncApiFormInfo(serverId, formId)
    await this.syncApiFormAnswers(serverId, formId)
    await this.prisma.koboForm.update({
      where: {id: formId},
      data: {
        updatedAt: new Date(),
        updatedBy: updatedBy,
      }
    })
  }

  private readonly syncApiFormInfo = async (serverId: UUID, formId: KoboId) => {
    const sdk = await this.koboSdkGenerator.get(serverId)
    const form = await sdk.getForm(formId)
    return this.prisma.koboForm.update({
      where: {id: formId},
      data: {name: form.name}
    })
  }

  private readonly syncApiFormAnswers = async (serverId: UUID, formId: KoboId) => {
    const sdk = await this.koboSdkGenerator.get(serverId)
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
  }

  /** @deprecated because it duplicates uuid */
  private readonly softDelete = (serverId: UUID, formId: KoboId, uuids: UUID[]) => {
    return this.prisma.koboAnswers.findMany({where: {id: {notIn: uuids}}}).then(res => {
      return Promise.all(res.map(_ => {
        return this.prisma.koboAnswers.updateMany({
          where: {
            id: _.id,
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

  /** @deprecated because it duplicates uuid */
  private readonly hardDelete = (uuids: UUID[]) => {
    return this.prisma.koboAnswers.findMany({where: {id: {notIn: uuids}}}).then(res => {
      return Promise.all(res.map(_ => {
        return this.prisma.koboAnswers.deleteMany({
          where: {
            id: _.id,
          },
        })
      }))
    })
  }
}