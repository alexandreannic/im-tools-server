import express, {NextFunction, Request, Response} from 'express'
import {ControllerNfiMpca} from './controller/ControllerNfiMpca'
import {KoboSdk} from '../feature/connector/kobo/KoboClient/KoboSdk'
import {Logger} from '../helper/Logger'
import {EcrecSdk} from '../feature/connector/ecrec/EcrecSdk'
import {LegalaidSdk} from '../feature/connector/legalaid/LegalaidSdk'
import {ControllerLegalAid} from './controller/ControllerLegalAid'
import {ControllerMain} from './controller/ControllerMain'
import {ControllerEcrec} from './controller/ControllerEcrec'
import {Services} from './services'
import {PrismaClient} from '@prisma/client'
import {ControllerActivityInfo} from './controller/ControllerActivityInfo'
import {ControllerKoboApi} from './controller/kobo/ControllerKoboApi'
import {ControllerMpcaPayment} from './controller/ControllerMpcaPayment'
import {ControllerSession} from './controller/ControllerSession'
import {ControllerKoboForm} from './controller/kobo/ControllerKoboForm'
import {ControllerKoboServer} from './controller/kobo/ControllerKoboServer'
import {ControllerKoboAnswer} from './controller/kobo/ControllerKoboAnswer'
import {WFPBuildingBlockSdk} from '../feature/connector/wfpBuildingBlock/WfpBuildingBlockSdk'
import {ControllerWfp} from './controller/ControllerWfp'
import {Server} from './Server'
import {ControllerAccess} from './controller/ControllerAccess'

export const errorCatcher = (handler: (req: Request, res: Response, next: NextFunction) => Promise<void>) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await handler(req, res, next)
    } catch (err) {
      console.log('CATCH FUCK')
      next(err)
    }
  }
}

export const getRoutes = (
  pgClient: PrismaClient,
  koboSdk: KoboSdk,
  ecrecSdk: EcrecSdk,
  legalAidSdk: LegalaidSdk,
  wfpSdk: WFPBuildingBlockSdk,
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
  const koboForm = new ControllerKoboForm(pgClient)
  const koboServer = new ControllerKoboServer(pgClient)
  const koboAnswer = new ControllerKoboAnswer(pgClient)
  const koboApi = new ControllerKoboApi(pgClient)
  const activityInfo = new ControllerActivityInfo()
  const session = new ControllerSession(pgClient)
  const wfp = new ControllerWfp(pgClient, wfpSdk)
  const access = new ControllerAccess(pgClient)

  try {
    router.get('/', errorCatcher(main.htmlStats))
    router.post('/session/login', errorCatcher(session.login))
    router.delete('/session', errorCatcher(session.logout))
    router.get('/session', errorCatcher(session.get))
    router.get('/access', errorCatcher(access.search))

    router.post('/activity-info/activity', errorCatcher(activityInfo.submitActivity))

    router.get('/kobo/server', errorCatcher(koboServer.getServers))
    router.get('/kobo/form', errorCatcher(koboForm.getAll))
    router.get('/kobo/form/:id', errorCatcher(koboForm.get))
    router.put('/kobo/form', errorCatcher(koboForm.create))
    router.get('/kobo/answer/:formId', errorCatcher(koboAnswer.search))

    router.post('/proxy', errorCatcher(main.proxy))

    router.get('/kobo-api/local-form', errorCatcher(koboApi.getAnswersFromLocalCsv))
    router.post('/kobo-api/:id/:formId/sync', errorCatcher(koboApi.synchronizeAnswersFromKoboServer))
    router.get('/kobo-api/:id/attachment', errorCatcher(koboApi.getAttachementsWithoutAuth))
    router.get('/kobo-api/:id/:formId/answers', errorCatcher(koboApi.getAnswers))
    router.get('/kobo-api/:id', errorCatcher(koboApi.getForms))
    router.get('/kobo-api/:id/:formId', errorCatcher(koboApi.getForm))

    router.put('/mpca-payment', errorCatcher(mpcaPayment.create))
    router.post('/mpca-payment/:id', errorCatcher(mpcaPayment.update))
    router.get('/mpca-payment', errorCatcher(mpcaPayment.getAll))
    router.get('/mpca-payment/:id', errorCatcher(mpcaPayment.get))
    router.post('/wfp-deduplication/refresh', errorCatcher(wfp.refresh))
    router.post('/wfp-deduplication/search', errorCatcher(wfp.search))
    router.post('/wfp-deduplication/upload-taxid', Server.upload.single('aa-file'), errorCatcher(wfp.uploadTaxIdMapping))

    router.get('/legalaid', errorCatcher(legalaid.index))
    router.get('/nfi/raw', errorCatcher(nfi.raw))
    router.get('/nfi', errorCatcher(nfi.index))
    router.get('/ecrec', errorCatcher(ecrec.index))
    router.get('/*', errorCatcher(ecrec.index))
  } catch (e) {
    console.error('ROUTES CAUGHT!!!')
  }
  return router
}
