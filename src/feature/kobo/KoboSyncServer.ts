import {UUID} from '../../core/Type'
import {KoboAnswer, KoboId} from '../connector/kobo/KoboClient/type/KoboAnswer'
import {Prisma, PrismaClient} from '@prisma/client'
import {KoboSdkGenerator} from './KoboSdkGenerator'
import {logger, Logger} from '../../helper/Logger'
import {createdBySystem} from '../../db/DbInit'
import {koboServerId} from '../../core/conf/KoboFormsId'
import {seq} from '@alexandreannic/ts-utils'

export class KoboSyncServer {

  constructor(
    private prisma: PrismaClient,
    private koboSdkGenerator: KoboSdkGenerator = new KoboSdkGenerator(prisma),
    private log: Logger = logger('KoboSyncServer')
  ) {
  }

  readonly syncAllApiAnswersToDb = async (updatedBy: string = createdBySystem) => {
    const allForms = await this.prisma.koboForm.findMany()
    this.log.info(`Synchronize kobo forms:`)
    for (const form of allForms) {
      try {
        await this.syncApiForm({serverId: form.serverId, formId: form.id, updatedBy})
      } catch (e) {
        console.error(e)
      }
    }
    this.log.info(`Synchronize kobo forms finished!`)
  }

  readonly syncApiForm = async ({serverId = koboServerId.prod, formId, updatedBy}: {serverId?: UUID, formId: KoboId, updatedBy?: string}) => {
    try {
      this.log.info(`Synchronizing ${formId} by ${updatedBy}...`)
      await this.syncApiFormInfo(serverId, formId)
      await this.syncApiFormAnswers(serverId, formId)
      await this.prisma.koboForm.update({
        where: {id: formId},
        data: {
          updatedAt: new Date(),
          updatedBy: updatedBy,
        }
      })
      this.log.info(`Synchronizing ${formId} by ${updatedBy}... COMPLETED.`)
    } catch (e) {
      this.log.info(`Synchronizing ${formId} by ${updatedBy}... FAILED.`)
      throw e
    }
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
    this.log.info(`Fetch remote answers...`)
    const remoteAnswers = await sdk.getAnswers(formId).then(_ => _.data)
    const remoteIdsIndex: Map<KoboId, KoboAnswer> = remoteAnswers.reduce((map, curr) => map.set(curr.id, curr), new Map<KoboId, KoboAnswer>)//new Map(remoteAnswers.map(_ => _.id))
    this.log.info(`Fetch remote answers... ${remoteAnswers.length} fetched.`)

    this.log.info(`Fetch local answers...`)
    const localAnswersIndex = await this.prisma.koboAnswers.findMany({where: {formId}, select: {id: true, uuid: true}}).then(_ => {
      return _.reduce((map, curr) => map.set(curr.id, curr.uuid), new Map<KoboId, UUID>())
    })
    this.log.info(`Fetch local answers... ${localAnswersIndex.size} fetched.`)

    const handleDelete = async () => {
      const idsToDelete = [...localAnswersIndex.keys()].filter(_ => !remoteIdsIndex.has(_))
      this.log.info(`Handle delete (${idsToDelete.length})...`)
      await this.prisma.koboAnswers.deleteMany({where: {source: null, formId, id: {in: idsToDelete}}})
    }

    const handleCreate = async () => {
      const notInsertedAnswers = remoteAnswers.filter(_ => !localAnswersIndex.has(_.id))
      this.log.info(`Handle create (${notInsertedAnswers.length})...`)
      const inserts = notInsertedAnswers.map(_ => {
        const res: Prisma.KoboAnswersUncheckedCreateInput = {
          formId,
          answers: _.answers,
          id: _.id,
          uuid: _.uuid,
          date: _.date,
          start: _.start,
          end: _.end,
          submissionTime: _.submissionTime,
          validationStatus: _.validationStatus,
          lastValidatedTimestamp: _.lastValidatedTimestamp,
          validatedBy: _.validatedBy,
          version: _.version,
          // source: serverId,
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
      const answersToUpdate = seq([...localAnswersIndex]).map(([id, uuid]) => {
        const match = remoteIdsIndex.get(id)
        const hasBeenUpdated = match && match.uuid !== uuid
        return hasBeenUpdated ? match : undefined
      }).compact()
      this.log.info(`Handle update (${answersToUpdate.length})...`)
      await Promise.all(answersToUpdate.map(a => {
        return this.prisma.koboAnswers.update({
          where: {
            id: a.id,
          },
          data: {
            uuid: a.uuid,
            validationStatus: a.validationStatus,
            attachments: a.attachments,
            date: a.date,
            start: a.start,
            end: a.end,
            submissionTime: a.submissionTime,
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
