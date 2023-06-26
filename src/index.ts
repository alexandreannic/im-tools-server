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
import {MpcaPaymentService} from './feature/mpcaPayment/MpcaPaymentService'
import {initializeDatabase} from './db/Db'
import {logger} from './helper/Logger'
import {KoboMigrateHHS2} from './script/KoboMigrateHHS2'
import {koboFormsId, koboServerId} from './core/conf/KoboFormsId'
// import {washRMM} from './feature/connector/activity-info/generatedModel/washRMM'

const initServices = (
  koboClient: KoboSdk,
  ecrecSdk: EcrecSdk,
  legalaidSdk: LegalaidSdk,
  prisma: PrismaClient
): Services => {
  const ecrec = new ServiceEcrec(ecrecSdk)
  const legalAid = new ServiceLegalAid(legalaidSdk)
  const nfi = new ServiceNfi(koboClient)
  const mpcaPayment = new MpcaPaymentService(prisma)
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
    mpcaPayment,
  }
}

const startApp = async () => {

  const log = logger('')
  const conf = appConf

  const prisma = new PrismaClient()
  log.info(`Connecting to ${conf.db.url.split('@')[1]}...`)
  await initializeDatabase({prisma, conf})

  const koboSdk = new KoboSdk(new ApiClient({
      baseUrl: conf.kobo.url + '/api',
      headers: {
        Authorization: KoboSdk.makeAuthorizationHeader(conf.kobo.token),
      }
    })
  )
  await KoboMigrateHHS2({
    prisma,
    serverId: koboServerId.prod,
    oldFormId: koboFormsId.prod.protectionHh_2,
    newFormId: koboFormsId.prod.protectionHh_2_1,
  }).run()
  // await new KoboApiService(prisma).saveApiAnswerToDb(koboServerId.prod, koboFormsId.prod.protectionHh_2_1)

  // try {
  //   await new KoboService(prisma).generateXLSForHHS({
  //     start: new Date(2023, 4, 1),
  //     end: new Date(2023, 5, 1),
  // })
  // } catch (e) {
  //   console.error(e)
  // }

  // await generateKoboInterface(
  //   koboSdk,
  //   '/Users/alexandreac/Workspace/_humanitarian/im-tools-server/src/db/koboInterface',
  // )

  // await initializeDatabase(prisma)
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
    prisma,
  )

  new Server(
    conf,
    prisma,
    koboSdk,
    ecrecAppSdk,
    legalAidSdk,
    services,
  ).start()
}


// new WfpBuildingBlockClient({
//   login: appConf.buildingBlockWfp.login,
//   password: appConf.buildingBlockWfp.password,
//   otpUrl: appConf.buildingBlockWfp.otpURL,
// }).getApiToken().then(console.log)
// runAi.washRMM()
startApp()
