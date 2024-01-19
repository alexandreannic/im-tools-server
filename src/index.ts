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
import {koboFormsId} from './core/conf/KoboFormsId'

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

  console.log(new Date().getTimezoneOffset())
  const sdk = await new KoboSdkGenerator(prisma).getV1('4820279f-6c3d-47ba-8afe-47f86b16ab5d')
  const sdkv2 = await new KoboSdkGenerator(prisma).get('4820279f-6c3d-47ba-8afe-47f86b16ab5d')

  const allData = await sdkv2.getAnswers(koboFormsId.prod.bn_re)
  allData.data.forEach(row => {
    sdkv2.updateData({
      formId: koboFormsId.prod.bn_re,
      submissionIds: [row.id],
      questionName: 'back_enum',
      newValue: 'vlad'
    })
  })

  await sdk.submit({
    formId: 'aExm7mBotx5mraTAdu8QNf',
    data: {
      question: 'option1',
      back_enum: 'vlad',
    }
  }).then(console.log)
  // await sdk.getForms()
  // .then(_ => console.log(JSON.stringify(_).slice(0, 100)))
  // .then(_ => _.results.find(x => x.name === 'test')).then(console.log)
  // await Promise.all([
  //   sdk.submitSubmission({
  //     formId: 'aExm7mBotx5mraTAdu8QNf',
  //     versionId: 'vJKGn6BcW2jnmV4kac96Vq',
  //   }).catch(e => console.error(1, e.details.code, e.message)),
  // sdk.submitSubmission1({
  //   formId: 'aExm7mBotx5mraTAdu8QNf',
  //   versionId: 'vJKGn6BcW2jnmV4kac96Vq',
  // }).catch(e => console.error(2, e.details.code, e.message)),
  // sdk.submitSubmission2({
  //   formId: 'aExm7mBotx5mraTAdu8QNf',
  //   versionId: 'vJKGn6BcW2jnmV4kac96Vq',
  // }).catch(e => console.error(3, e.details.code, e.message)),
  // ])
  // process.exit()
  // await KoboMigrateHHS2({
  //   prisma,
  //   serverId: koboServerId.prod,
  //   oldFormId: koboFormsId.prod.protectionHh_2,
  //   newFormId: koboFormsId.prod.protectionHh_2_1,
  // }).run()

  // try {
  //   await new KoboService(prisma).generateXLSForHHS({
  //     // start: new Date(2023, 5, 1),
  //     // end: new Date(2023, 6, 1),
  // })
  // } catch (e) {
  //   console.error(e)
  // }

  // const wfpSdk = new WFPBuildingBlockSdk(await new WfpBuildingBlockClient({
  //   login: appConf.buildingBlockWfp.login,
  //   password: appConf.buildingBlockWfp.password,
  //   otpUrl: appConf.buildingBlockWfp.otpURL,
  // }).generate())
  // await new WfpDeduplicationUpload(prisma, wfpSdk).saveAll()

  // const ecrecAppSdk = new EcrecSdk(new EcrecClient(appConf.ecrecApp))
  // const legalAidSdk = new LegalaidSdk(new ApiClient({
  //   baseUrl: 'https://api.lau-crm.org.ua',
  //   headers: {
  //     'x-auth-token': appConf.legalAid.apiToken,
  //   }
  // }))
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
