import express, {NextFunction, Request, Response} from 'express'
import {ControllerNfiMpca} from './controller/ControllerNfiMpca'
import {KoboSdk} from '../feature/connector/kobo/KoboClient/KoboSdk'
import {Logger} from '../helper/Logger'
import {ControllerMain} from './controller/ControllerMain'
import {Services} from './services'
import {PrismaClient} from '@prisma/client'
import {ControllerActivityInfo} from './controller/ControllerActivityInfo'
import {ControllerKoboApi} from './controller/kobo/ControllerKoboApi'
import {ControllerMpcaPayment} from './controller/ControllerMpcaPayment'
import {ControllerSession} from './controller/ControllerSession'
import {ControllerKoboForm} from './controller/kobo/ControllerKoboForm'
import {ControllerKoboServer} from './controller/kobo/ControllerKoboServer'
import {ControllerKoboAnswer} from './controller/kobo/ControllerKoboAnswer'
import {ControllerWfp} from './controller/ControllerWfp'
import {Server} from './Server'
import {ControllerAccess} from './controller/ControllerAccess'
import {ControllerUser} from './controller/ControllerUser'
import {UserSession} from '../feature/session/UserSession'
import {AppError} from '../helper/Errors'
import {appConf} from '../core/conf/AppConf'
import apicache from 'apicache'

export interface AuthenticatedRequest extends Request {
  user?: UserSession
}

export const errorCatcher = (handler: (req: Request, res: Response, next: NextFunction) => Promise<void>) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await handler(req, res, next)
    } catch (err) {
      console.error('[errorCatcher()]')
      next(err)
    }
  }
}

export const getRoutes = (
  prisma: PrismaClient,
  koboSdk: KoboSdk,
  // ecrecSdk: EcrecSdk,
  // legalAidSdk: LegalaidSdk,
  services: Services,
  logger: Logger,
) => {
  const cache = apicache.middleware

  const router = express.Router()
  const nfi = new ControllerNfiMpca(
    koboSdk,
    services.nfi,
    logger
  )
  // const ecrec = new ControllerEcrec(
  //   ecrecSdk,
  // )
  // const legalaid = new ControllerLegalAid(
  //   legalAidSdk,
  //   logger,
  // )
  const mpcaPayment = new ControllerMpcaPayment(
    services.mpcaPayment
  )
  const main = new ControllerMain(services.stats)
  const koboForm = new ControllerKoboForm(prisma)
  const koboServer = new ControllerKoboServer(prisma)
  const koboAnswer = new ControllerKoboAnswer(prisma)
  const koboApi = new ControllerKoboApi(prisma)
  const activityInfo = new ControllerActivityInfo()
  const session = new ControllerSession(prisma)
  const wfp = new ControllerWfp(prisma)
  const access = new ControllerAccess(prisma)
  const user = new ControllerUser(prisma)

  const auth = ({adminOnly = false}: {adminOnly?: boolean} = {}) => async (req: Request, res: Response, next: NextFunction) => {
    // req.session.user = {
    //   email: 'alexandre.annic@drc.ngo',
    //   admin: true,
    // } as any
    // next()
    try {
      const email = req.session.user?.email
      if (!email) {
        throw new AppError.Forbidden('auth_user_not_connected' + JSON.stringify(appConf))
      }
      const user = await prisma.user.findFirst({where: {email}})
      if (!user) {
        throw new AppError.Forbidden('user_not_allowed')
      }
      if (adminOnly && !user.admin) {
        throw new AppError.Forbidden('user_not_allowed')
      }
      next()
    } catch (e) {
      next(e)
    }
  }

  try {
    router.get('/', errorCatcher(main.htmlStats))
    router.post('/session/login', errorCatcher(session.login))
    router.post('/session/connect-as', auth({adminOnly: true}), errorCatcher(session.connectAs))
    router.delete('/session', errorCatcher(session.logout))
    router.get('/session', errorCatcher(session.get))

    router.get('/access/me', auth(), errorCatcher(access.searchMine))
    router.get('/access', auth(), errorCatcher(access.search))
    router.put('/access', auth({adminOnly: true}), errorCatcher(access.create))
    router.delete('/access/:id', auth({adminOnly: true}), errorCatcher(access.remove))

    router.post('/user/me', auth(), errorCatcher(user.updateMe))
    router.get('/user', auth({adminOnly: true}), errorCatcher(user.search))

    router.post('/activity-info/activity', auth({adminOnly: true}), errorCatcher(activityInfo.submitActivity))

    router.get('/kobo/server', auth(), errorCatcher(koboServer.getServers))
    router.get('/kobo/form', auth(), errorCatcher(koboForm.getAll))
    router.get('/kobo/form/:id', auth(), errorCatcher(koboForm.get))
    router.put('/kobo/form', auth(), errorCatcher(koboForm.create))
    router.get('/kobo/answer/:formId', errorCatcher(koboAnswer.search))
    router.get('/kobo/answer/:formId/by-access', auth(), errorCatcher(koboAnswer.searchByUser))

    router.post('/proxy', auth(), errorCatcher(main.proxy))

    router.get('/kobo-api/local-form', auth(), errorCatcher(koboApi.getAnswersFromLocalCsv))
    router.post('/kobo-api/:id/:formId/sync', auth(), errorCatcher(koboApi.synchronizeAnswersFromKoboServer))
    router.get('/kobo-api/:id/attachment', auth(), errorCatcher(koboApi.getAttachementsWithoutAuth))
    router.get('/kobo-api/:id/:formId/answers', auth(), errorCatcher(koboApi.getAnswers))
    router.get('/kobo-api/:id', auth(), errorCatcher(koboApi.getForms))
    router.get('/kobo-api/:id/:formId', cache('24 hour'), auth(), errorCatcher(koboApi.getForm))

    router.put('/mpca-payment', auth(), errorCatcher(mpcaPayment.create))
    router.post('/mpca-payment/:id', auth(), errorCatcher(mpcaPayment.update))
    router.get('/mpca-payment', auth(), errorCatcher(mpcaPayment.getAll))
    router.get('/mpca-payment/:id', auth(), errorCatcher(mpcaPayment.get))
    router.post('/wfp-deduplication/refresh', auth(), errorCatcher(wfp.refresh))
    router.post('/wfp-deduplication/search', auth(), errorCatcher(wfp.search))
    router.post('/wfp-deduplication/upload-taxid', auth(), Server.upload.single('aa-file'), errorCatcher(wfp.uploadTaxIdMapping))

    // router.get('/legalaid', auth(), errorCatcher(legalaid.index))
    router.get('/nfi/raw', auth(), errorCatcher(nfi.raw))
    router.get('/nfi', auth(), errorCatcher(nfi.index))
    // router.get('/ecrec', auth(), errorCatcher(ecrec.index))
    // router.get('/*', errorCatcher(ecrec.index))
  } catch (e) {
    console.error('ROUTES CAUGHT!!!')
  }
  return router
}
