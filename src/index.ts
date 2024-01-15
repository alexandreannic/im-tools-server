import {AppConf, appConf} from './core/conf/AppConf'
import {Server} from './server/Server'
import {ServiceStats} from './server/services/ServiceStats'
import {Services} from './server/services'
import {PrismaClient} from '@prisma/client'
import {MpcaPaymentService} from './feature/mpca/mpcaPayment/MpcaPaymentService'
import {DbInit} from './db/DbInit'
import {logger} from './helper/Logger'
// import {washRMM} from './feature/connector/activity-info/generatedModel/washRMM'
import {ScheduledTask} from './scheduledTask/ScheduledTask'
import {MpcaCachedDb} from './feature/mpca/db/MpcaCachedDb'
import {EventEmitter} from 'events'
import {ShelterCachedDb} from './feature/shelter/db/ShelterCachedDb'
import {KoboSdkGenerator} from './feature/kobo/KoboSdkGenerator'

export const appEventEmitter = new EventEmitter()

const initServices = (
  // koboClient: KoboSdk,
  // ecrecSdk: EcrecSdk,
  // legalaidSdk: LegalaidSdk,
  prisma: PrismaClient
): Services => {
  // const ecrec = new ServiceEcrec(ecrecSdk)
  // const legalAid = new ServiceLegalAid(legalaidSdk)
  // const nfi = new ServiceNfi(koboClient)
  const mpcaPayment = new MpcaPaymentService(prisma)
  const stats = new ServiceStats(
    // ecrec,
    // legalAid,
    // nfi,
  )
  return {
    // ecrec,
    // legalAid,
    // nfi,
    stats,
    mpcaPayment,
  }
}

const startApp = async (conf: AppConf) => {
  const log = logger('')
  log.info(`Starting...`)

  const prisma = new PrismaClient()
  log.info(`Initialize database ${conf.db.url.split('@')[1]}...`)
  await new DbInit(conf, prisma).initializeDatabase()
  log.info(`Database initialized.`)

  const services = initServices(
    // koboSdk,
    // ecrecAppSdk,
    // legalAidSdk,
    prisma,
  )

  if (conf.production) {
    new ScheduledTask(prisma).start()
    MpcaCachedDb.constructSingleton(prisma).warmUp()
    ShelterCachedDb.constructSingleton(prisma).warmUp()
  }

  new Server(
    conf,
    prisma,
    // ecrecAppSdk,
    // legalAidSdk,
    services,
  ).start()
}

// runAi.washRMM()
startApp(appConf)
