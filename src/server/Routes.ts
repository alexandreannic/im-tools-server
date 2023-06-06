import express from 'express'
import {ControllerNfiMpca} from './controller/ControllerNfiMpca'
import {KoboSdk} from '../feature/connector/kobo/KoboClient/KoboSdk'
import {ControllerKobo} from './controller/ControllerKobo'
import {Logger} from '../utils/Logger'
import {EcrecSdk} from '../feature/connector/ecrec/EcrecSdk'
import {LegalaidSdk} from '../feature/connector/legalaid/LegalaidSdk'
import {ControllerLegalAid} from './controller/ControllerLegalAid'
import {ControllerMain} from './controller/ControllerMain'
import {ControllerEcrec} from './controller/ControllerEcrec'
import {Services} from './services'
import {PrismaClient} from '@prisma/client'
import {ControllerKoboForm} from './controller/ControllerKoboForm'
import {ControllerActivityInfo} from './controller/ControllerActivityInfo'
import {ActivityInfoSdk} from '../feature/activityInfo/sdk/ActivityInfoSdk'
import {ControllerKoboApi} from './controller/ControllerKoboApi'
import {ControllerMpcaPayment} from './controller/ControllerMpcaPayment'

export const getRoutes = (
  pgClient: PrismaClient,
  koboSdk: KoboSdk,
  ecrecSdk: EcrecSdk,
  legalAidSdk: LegalaidSdk,
  services: Services,
  logger: Logger,
) => {
  const router = express.Router()
  const nfi = new ControllerNfiMpca(
    koboSdk,
    services.nfi,
    logger
  )
  const ecrec = new ControllerEcrec(
    ecrecSdk,
  )
  const legalaid = new ControllerLegalAid(
    legalAidSdk,
    logger,
  )
  const mpcaPayment = new ControllerMpcaPayment(
    services.mpcaPayment
  )
  const main = new ControllerMain(services.stats)
  const kobo = new ControllerKobo(pgClient)
  const koboApi = new ControllerKoboApi(pgClient)
  const activityInfo = new ControllerActivityInfo()
  try {
    router.get('/', main.htmlStats)
    router.post('/activity-info/activity', activityInfo.submitActivity)

    router.get('/kobo', kobo.getServers)
    router.get('/kobo/:formId/answers', kobo.getAnswers)

    router.post('/proxy', main.proxy)

    router.get('/kobo-api/local-form', koboApi.getAnswersFromLocalCsv)
    router.post('/kobo-api/:id/:formId/sync', koboApi.synchronizeAnswersFromKoboServer)
    router.get('/kobo-api/:id', koboApi.getForms)
    router.get('/kobo-api/:id/attachment', koboApi.getAttachementsWithoutAuth)
    router.get('/kobo-api/:id/:formId/answers', koboApi.getAnswers)
    router.get('/kobo-api/:id/:formId', koboApi.getForm)
    // router.post('/kobo-api/:id/:formId', koboApi.importAnswers)

    router.put('/mpca-payment', mpcaPayment.create)
    router.post('/mpca-payment/:id', mpcaPayment.update)
    router.get('/mpca-payment', mpcaPayment.getAll)
    router.get('/mpca-payment/:id', mpcaPayment.get)

    router.get('/legalaid', legalaid.index)
    router.get('/nfi/raw', nfi.raw)
    router.get('/nfi', nfi.index)
    router.get('/ecrec', ecrec.index)
  } catch (e) {
    console.error('ROUTES CAUGHT!!!')
  }
  return router
}
