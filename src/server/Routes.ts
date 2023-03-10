import express from 'express'
import {ControllerNfiMpca} from './controller/ControllerNfiMpca'
import {KoboClient} from '../connector/kobo/KoboClient/KoboClient'
import {Client} from 'pg'
import {ControllerKobo} from './controller/ControllerKobo'
import {Logger} from '../utils/Logger'
import {EcrecSdk} from '../connector/ecrec/EcrecSdk'
import {LegalaidSdk} from '../connector/legalaid/LegalaidSdk'
import {ControllerLegalAid} from './controller/ControllerLegalAid'
import {ControllerMain} from './controller/ControllerMain'
import {ControllerEcrec} from './controller/ControllerEcrec'

export const getRoutes = (
  pgClient: Client,
  koboClient: KoboClient,
  ecrecSdk: EcrecSdk,
  legalAidSdk: LegalaidSdk,
  logger: Logger,
) => {
  const router = express.Router()
  const nfi = new ControllerNfiMpca(
    pgClient,
    koboClient,
    logger
  )
  const ecrec = new ControllerEcrec(
    ecrecSdk,
  )
  const legalaid = new ControllerLegalAid(
    pgClient,
    legalAidSdk,
    logger,
  )
  const main = new ControllerMain()
  const kobo = new ControllerKobo(pgClient, koboClient)
  router.get('/', main.index)
  router.get('/kobo/import', kobo.importAnswers)
  router.get('/legalaid', legalaid.index)
  router.get('/nfi/raw', nfi.raw)
  router.get('/nfi', nfi.index)
  router.get('/ecrec', ecrec.index)
  return router
}
