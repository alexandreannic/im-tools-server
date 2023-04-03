import {ApiClient} from './client/ApiClient'
import {KoboClient} from './connector/kobo/KoboClient/KoboClient'
import {appConf} from './conf/AppConf'
import {Server} from './server/Server'
import {Database} from './db/Database'
import {logger} from './utils/Logger'
import {EcrecClient} from './connector/ecrec/EcrecClient'
import {EcrecSdk} from './connector/ecrec/EcrecSdk'
import {LegalaidSdk} from './connector/legalaid/LegalaidSdk'
import {ServiceEcrec} from './server/services/ServiceEcrec'
import {ServiceLegalAid} from './server/services/ServiceLegalAid'
import {ServiceNfi} from './server/services/ServiceNfi'
import {ServiceStats} from './server/services/ServiceStats'
import {Services} from './server/services'
import {PrismaClient} from '@prisma/client'

const initServices = (
  koboClient: KoboClient,
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

(async () => {
  const conf = appConf
  const pgClient = new Database(conf).client
  const prisma = new PrismaClient()

  const koboSdk = new KoboClient(new ApiClient({
      baseUrl: conf.kobo.url + '/api',
      headers: {
        Authorization: KoboClient.makeAuthorizationHeader(conf.kobo.token),
      }
    })
  )
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

  // logger.info(`Connecting to ${conf.db.database}...`)
  // await pgClient.connect()
  // logger.info(`Applying evolutions...`)
  // await new EvolutionManager(pgClient).run()
  new Server(conf, prisma, koboSdk, ecrecAppSdk, legalAidSdk, services, logger).start()
})()
