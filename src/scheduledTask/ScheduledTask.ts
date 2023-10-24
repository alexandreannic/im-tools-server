import * as cron from 'node-cron'
import {PrismaClient} from '@prisma/client'
import {KoboSyncServer} from '../feature/kobo/KoboSyncServer'
import {logger} from '../helper/Logger'
import {appConf} from '../core/conf/AppConf'
import {MpcaCachedDb} from '../feature/mpca/db/MpcaCachedDb'

export class ScheduledTask {

  constructor(
    private prisma: PrismaClient,
    private koboApiService = new KoboSyncServer(prisma),
    private conf = appConf,
    private log = logger('ScheduledTask'),
    private memMpcaDb = MpcaCachedDb.constructSingleton(prisma),
  ) {

  }

  readonly start = async () => {
    cron.schedule('0 2 * * *', () => {
      if (this.conf.disableScheduledTask) {
        this.log.info('Scheduled tasks disabled.')
        return
      }
      this.log.info('Run scheduled tasks...')
      this.run()
    })
  }

  private readonly run = async () => {
    await this.koboApiService.syncAllApiAnswersToDb()
    await this.memMpcaDb.refresh()
  }
}