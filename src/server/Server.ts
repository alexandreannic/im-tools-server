import express, {NextFunction, Request, Response} from 'express'
import * as bodyParser from 'body-parser'
import {getRoutes} from './Routes'
import {logger} from '../helper/Logger'
import {appConf, AppConf} from '../core/conf/AppConf'
import {genUUID} from '../helper/Utils'
import {KoboSdk} from '../feature/connector/kobo/KoboClient/KoboSdk'
import {HttpError} from './controller/Controller'
import {Services} from './services'
import {PrismaClient} from '@prisma/client'
import session from 'express-session'
import multer from 'multer'
import {AppError} from '../helper/Errors'
import {PrismaSessionStore} from '@quixo3/prisma-session-store'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import {IpSentry} from '../plugins/Sentry'
import * as Sentry from '@sentry/node'

// import sessionFileStore from 'session-file-store'

export class Server {

  constructor(
    private conf: AppConf = appConf,
    private pgClient: PrismaClient,
    private koboClient: KoboSdk,
    // private ecrecSdk: EcrecSdk,
    // private legalaidSdk: LegalaidSdk,
    private services: Services,
    private log = logger('Server'),
  ) {
  }

  static readonly upload = multer({dest: 'uploads/'})

  readonly errorHandler = (err: HttpError, req: Request, res: Response, next: (err?: any) => void) => {
    const errorId = genUUID().split('-')[0]
    try {
      if (err instanceof AppError.Forbidden) {
        res.status(401).json({
          data: err.message,
          errorId
        })
      } else if (err instanceof AppError.NotFound) {
        res.status(404).json({
          data: err.message,
          errorId,
        })
      }
      // console.error('[errorHandler()]', err)
      this.log.error(`[${errorId}] Error ${err.code}: ${err.message}\n${err.stack} on ${req.method} ${req.url} - ${JSON.stringify(req.body)}`)
      console.log({data: err.code === 500 ? 'Something went wrong.' : err.message, errorId})
      res.status(err.code ?? 500).json({
        data: err.code === 500 ? 'Something went wrong.' : err.message,
        errorId
      })
    } catch (e) {
      res.status(500).json({
        data: 'Something went wrong.',
        errorId,
      })
    }
  }

  readonly corsHeader = (req: Request, res: Response, next: NextFunction) => {
    res.header('Access-Control-Allow-Origin', this.conf.cors.allowOrigin)
    res.header('Access-Control-Allow-Headers', 'Authorization, Origin, X-Requested-With, Content-Type, Accept')
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    res.header('Access-Control-Allow-Credentials', 'true')
    next()
  }

  readonly start = () => {
    const app = express()
    new IpSentry(this.conf, app,)
    app.use(Sentry.Handlers.requestHandler())
    app.use(Sentry.Handlers.tracingHandler())
    app.set('trust proxy', 1)
    // app.use(this.corsHeader)
    app.use(cors({
      credentials: true,
      origin: this.conf.cors.allowOrigin,
    }))
    // const sessionstore = sessionFileStore(session)
    app.use(cookieParser())
    app.use(session({
      secret: '669d73f2-fc68-4b75-88ac-c2da4af60aa3',
      resave: false,
      saveUninitialized: false,
      name: 'infoportal-session',
      // proxy: true,
      unset: 'destroy',
      store: new PrismaSessionStore(this.pgClient, {
        checkPeriod: 2 * 60 * 1000,  //ms
        dbRecordIdIsSessionId: true,
        dbRecordIdFunction: undefined,
        // checkPeriod: duration(1, 'day').toMs,
        // dbRecordIdIsSessionId: true,
        // dbRecordIdFunction: undefined,
      }),
      cookie: {
        secure: appConf.production,
        // httpOnly: true,
        sameSite: appConf.production ? 'none' : undefined,
        maxAge: 2 * 1000 * 60 * 60 * 24
        // duration(365, 'day').toMs,
      },
    }))
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(getRoutes(
      this.pgClient,
      this.koboClient,
      // this.ecrecSdk,
      // this.legalaidSdk,
      this.services,
      this.log,
    ))
    app.use(Sentry.Handlers.errorHandler())
    app.use(this.errorHandler)
    app.listen(this.conf.port, () => {
      this.log.info(`server start listening on port ${this.conf.port}`)
    })
  }
}

// https://kobo.humanitarianresponse.info/api/v2/assets/aEvwuJkHVRiRQRKBNFNocH/data/79f86d1b-248a-4969-90e0-6e157ab47007/enketo/edit/?return_url=false