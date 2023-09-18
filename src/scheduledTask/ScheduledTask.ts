import * as cron from 'node-cron'
import {PrismaClient} from '@prisma/client'
import {KoboSyncServer} from '../feature/kobo/KoboSyncServer'
import {logger} from '../helper/Logger'

export class ScheduledTask {

  constructor(
    private prisma: PrismaClient,
    private koboApiService = new KoboSyncServer(prisma),
    private log = logger('ScheduledTask')
  ) {
    cron.schedule('0 2 * * *', () => {
      this.run()
    })
  }

  readonly run = async () => {
    this.log.info('Run scheduled tasks...')
    await this.koboApiService.syncAllApiAnswersToDb()
  }


}