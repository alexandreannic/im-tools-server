import express from 'express'
import {ControllerMonitoring} from './controller/ControllerMonitoring'
import {Mongo} from '../mongodb/Mongo'
import {KoboClient} from '../connector/kobo/KoboClient/KoboClient'
import {Client} from 'pg'
import {ControllerKobo} from './controller/ControllerKobo'
import {Logger} from '../utils/Logger'
import {EcrecSdk} from '../connector/ecrec/EcrecSdk'
import {LegalaidSdk} from '../connector/legalaid/LegalaidSdk'

export const getRoutes = (
  pgClient: Client,
  koboClient: KoboClient,
  ecrecSdk: EcrecSdk,
  legalAidSdk: LegalaidSdk,
  logger: Logger,
) => {
  const router = express.Router()
  const app = new ControllerMonitoring(
    pgClient,
    koboClient,
    ecrecSdk,
    legalAidSdk,
    logger
  )
  const kobo = new ControllerKobo(pgClient, koboClient)
  router.get('/', app.index)
  router.get('/kobo/import', kobo.importAnswers)
  return router
}
