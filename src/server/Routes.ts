import express from 'express'
import {ControllerNfiMpca} from './controller/ControllerNfiMpca'
import {KoboClient} from '../connector/kobo/KoboClient/KoboClient'
import {ControllerKobo} from './controller/ControllerKobo'
import {Logger} from '../utils/Logger'
import {EcrecSdk} from '../connector/ecrec/EcrecSdk'
import {LegalaidSdk} from '../connector/legalaid/LegalaidSdk'
import {ControllerLegalAid} from './controller/ControllerLegalAid'
import {ControllerMain} from './controller/ControllerMain'
import {ControllerEcrec} from './controller/ControllerEcrec'
import {Services} from './services'
import {PrismaClient} from '@prisma/client'
import {ControllerKoboForm} from './controller/ControllerKoboForm'
import {ControllerActivityInfo} from './controller/ControllerActivityInfo'
import {ActivityInfoSdk} from '../connector/activity-info/ActivityInfoSdk'

export const getRoutes = (
  pgClient: PrismaClient,
  koboClient: KoboClient,
  ecrecSdk: EcrecSdk,
  legalAidSdk: LegalaidSdk,
  services: Services,
  logger: Logger,
) => {
  const router = express.Router()
  const nfi = new ControllerNfiMpca(
    koboClient,
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
  const activityInfo = new ControllerActivityInfo()
  try {
    router.get('/', main.htmlStats)
    router.post('/activity-info/activity', activityInfo.submitActivity)
    router.get('/kobo', kobo.getServers)
    router.get('/kobo/local-form', kobo.getLocalDbAnswers)
    router.get('/kobo/:id', kobo.getForms)
    router.get('/kobo/:id/:formId/answers', kobo.getAnswers)
    router.get('/kobo/:id/:formId', kobo.getForm)
    router.post('/kobo/:id/:formId', kobo.importAnswers)
    router.get('/legalaid', legalaid.index)
    router.get('/nfi/raw', nfi.raw)
    router.get('/nfi', nfi.index)
    router.get('/ecrec', ecrec.index)
  } catch (e) {
    console.error('ROUTES CAUGHT!!!')
  }
  return router
}
