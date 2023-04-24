import {ApiClient} from './core/client/ApiClient'
import {KoboSdk} from './feature/connector/kobo/KoboClient/KoboSdk'
import {appConf} from './core/conf/AppConf'
import {Server} from './server/Server'
import {Database} from './db/Database'
import {logger} from './utils/Logger'
import {EcrecClient} from './feature/connector/ecrec/EcrecClient'
import {EcrecSdk} from './feature/connector/ecrec/EcrecSdk'
import {LegalaidSdk} from './feature/connector/legalaid/LegalaidSdk'
import {ServiceEcrec} from './server/services/ServiceEcrec'
import {ServiceLegalAid} from './server/services/ServiceLegalAid'
import {ServiceNfi} from './server/services/ServiceNfi'
import {ServiceStats} from './server/services/ServiceStats'
import {Services} from './server/services'
import {PrismaClient} from '@prisma/client'
import {ActivityInfoSdk} from './feature/connector/activity-info/ActivityInfoSdk'
import {KoboApiService} from './feature/kobo/KoboApiService'
import {ProtHHS_2_1_fields} from './feature/kobo/formInterface/ProtHHS_2_1_fields'
import {ProtHHS_2_1} from './feature/kobo/formInterface/ProtHHS_2_1'
import {ProtHHS_2_1Options} from './feature/kobo/formInterface/ProtHHS_2_1Options'
import {koboMigrateHHS2} from './script/KoboMigrateHHS2'

const initServices = (
  koboClient: KoboSdk,
  ecrecSdk: EcrecSdk,
  legalaidSdk: LegalaidSdk,
): Services => {
  const ecrec = new ServiceEcrec(ecrecSdk)
  const legalAid = new ServiceLegalAid(legalaidSdk)
  const nfi = new ServiceNfi(koboClient)
  const stats = new ServiceStats(
    ecrec,
    legalAid,
    nfi,
  )
  return {
    ecrec,
    legalAid,
    nfi,
    stats,
  }
}

const startApp = async () => {
  const conf = appConf
  const pgClient = new Database(conf).client
  const prisma = new PrismaClient()

  const koboSdk = new KoboSdk(new ApiClient({
      baseUrl: conf.kobo.url + '/api',
      headers: {
        Authorization: KoboSdk.makeAuthorizationHeader(conf.kobo.token),
      }
    })
  )
  const activityInfoSdk = new ActivityInfoSdk()
  const ecrecAppSdk = new EcrecSdk(new EcrecClient(appConf.ecrecApp))
  const legalAidSdk = new LegalaidSdk(new ApiClient({
    baseUrl: 'https://api.lau-crm.org.ua',
    headers: {
      'x-auth-token': appConf.legalAid.apiToken,
    }
  }))

  const services = initServices(
    koboSdk,
    ecrecAppSdk,
    legalAidSdk,
  )

  const koboSync = new KoboApiService(
    prisma,
  )
  // logger.info(`Connecting to ${conf.db.database}...`)
  // await pgClient.connect()
  // logger.info(`Applying evolutions...`)
  // await new EvolutionManager(pgClient).run()
  new Server(
    conf,
    prisma,
    koboSdk,
    ecrecAppSdk,
    legalAidSdk,
    services,
    logger,
  ).start()
}

// startApp()

(async () => {
  const conf = appConf
  const koboSdk = new KoboSdk(new ApiClient({
      baseUrl: conf.kobo.url + '/api',
      headers: {
        Authorization: KoboSdk.makeAuthorizationHeader(conf.kobo.token),
      }
    })
  )
  const prisma = new PrismaClient()
  koboMigrateHHS2(koboSdk, prisma)
})()