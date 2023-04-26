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
import {ActivityInfoSdk} from '../feature/connector/activity-info/ActivityInfoSdk'
import {ControllerKoboApi} from './controller/ControllerKoboApi'

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
  const main = new ControllerMain(services.stats)
  const kobo = new ControllerKobo(pgClient)
  const koboApi = new ControllerKoboApi(pgClient)
  const activityInfo = new ControllerActivityInfo()
  try {
    router.get('/', main.htmlStats)
    router.post('/activity-info/activity', activityInfo.submitActivity)

    router.get('/kobo', kobo.getServers)
    router.get('/kobo/:formId/answers', kobo.getAnswers)

    router.get('/kobo-api/local-form', koboApi.getAnswersFromLocalCsv)
    router.get('/kobo-api/:formId/sync', koboApi.synchronizeAnswersFromKoboServer)
    router.get('/kobo-api/:id', koboApi.getForms)
    router.get('/kobo-api/:id/:formId/answers', koboApi.getAnswers)
    router.get('/kobo-api/:id/:formId', koboApi.getForm)
    // router.post('/kobo-api/:id/:formId', koboApi.importAnswers)

    router.get('/legalaid', legalaid.index)
    router.get('/nfi/raw', nfi.raw)
    router.get('/nfi', nfi.index)
    router.get('/ecrec', ecrec.index)
  } catch (e) {
    console.error('ROUTES CAUGHT!!!')
  }
  return router
}
