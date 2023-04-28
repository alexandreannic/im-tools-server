import {ApiClient} from './core/client/ApiClient'
import {KoboSdk} from './feature/connector/kobo/KoboClient/KoboSdk'
import {appConf} from './core/conf/AppConf'
import {Server} from './server/Server'
import {EcrecClient} from './feature/connector/ecrec/EcrecClient'
import {EcrecSdk} from './feature/connector/ecrec/EcrecSdk'
import {LegalaidSdk} from './feature/connector/legalaid/LegalaidSdk'
import {ServiceEcrec} from './server/services/ServiceEcrec'
import {ServiceLegalAid} from './server/services/ServiceLegalAid'
import {ServiceNfi} from './server/services/ServiceNfi'
import {ServiceStats} from './server/services/ServiceStats'
import {Services} from './server/services'
import {PrismaClient} from '@prisma/client'
import {runAi} from './feature/connector/activity-info'

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
  const prisma = new PrismaClient()
  const koboSdk = new KoboSdk(new ApiClient({
      baseUrl: conf.kobo.url + '/api',
      headers: {
        Authorization: KoboSdk.makeAuthorizationHeader(conf.kobo.token),
      }
    })
  )
  // await generateForms(
  //   koboSdk,
  //   '/Users/alexandreac/Workspace/_humanitarian/im-tools-server/src/db/koboInterface',
  // )
  // await initializeDatabase(prisma)
  // await KoboMigrateHHS2({
  //   prisma,
  //   serverId: koboServerId.prod,
  //   oldFormId: koboFormsId.prod.protectionHh_2,
  //   newFormId: koboFormsId.prod.protectionHh_2_1,
  // }).run()
  // await new KoboApiService(prisma).saveApiAnswerToDb(koboServerId.prod, koboFormsId.prod.protectionHh_2_1)
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
  new Server(
    conf,
    prisma,
    koboSdk,
    ecrecAppSdk,
    legalAidSdk,
    services,
  ).start()
}

runAi.washAPM2()
startApp()
