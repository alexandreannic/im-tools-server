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

  const conf = appConf
  const prisma = new PrismaClient()
  const koboSdk = new KoboSdk(new ApiClient({
      baseUrl: conf.kobo.url + '/api',
      headers: {
        Authorization: KoboSdk.makeAuthorizationHeader(conf.kobo.token),
      }
    })
  )
  // await KoboMigrateHHS2({
  //   prisma,
  //   serverId: koboServerId.prod,
  //   oldFormId: koboFormsId.prod.protectionHh_2,
  //   newFormId: koboFormsId.prod.protectionHh_2_1,
  // }).run()
  // await new KoboApiService(prisma).saveApiAnswerToDb(koboServerId.prod, koboFormsId.prod.protectionHh_2_1)

  // try {
  //   await new KoboService(prisma).generateXLSForHHS({
  //     // start: new Date(2023, 4, 1),
  //     // end: new Date(2023, 5, 1),
  //   })
  // } catch (e) {
  //   console.error(e)
  // }

  // await generateForms(
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
// runAi.washRMM()
startApp()

// const test: WashRMM = {
//   'Reporting Month': '2023-04',
//   'Organisation': 'Danish Refugee Council',
//   'Implementing Partner': 'Danish Refugee Council',
//   'Reporting Against a plan?': 'Yes',
//   'WASH - APM': 'DRC-00001', //TODO
//   'Oblast': 'Autonomous Republic of Crimea_Автономна Республіка Крим',
//   'Raion': 'Bakhchysaraiskyi_Бахчисарайський',
//   'Hormada': 'Aromatnenska_UA0102003',
//   'Settlement': 'Sevastopol_UA0102001',
//   'Location Type': 'Individuals/households',
//   'Other Institution': undefined,
//   'Activities & Indicators': '# of individuals benefiting from hygiene kit/items distribution (in-kind)', // TODO
//   'Disaggregation by population group, gender and age known?': 'Yes',
//   'Total Reached (No Disaggregation)': 1,
//   'Breakdown known?': 'Yes',
//   // 'Total Reached (All Population Groups)': '',
//   'Population Group': 'Overall (all groups)',
//   'Girls': 1,
//   'Boys': 2,
//   'Men': 3,
//   'Women': 4,
//   'Elderly Men': 5,
//   'Elderly Women': 6,
//   'People with disability': 7,
//   'Comments': undefined,
// }
