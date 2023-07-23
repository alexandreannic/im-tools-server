import express, {NextFunction, Request, Response} from 'express'
import * as bodyParser from 'body-parser'
import {getRoutes} from './Routes'
import {logger} from '../helper/Logger'
import {AppConf} from '../core/conf/AppConf'
import {genUUID} from '../helper/Utils'
import {KoboSdk} from '../feature/connector/kobo/KoboClient/KoboSdk'
import {EcrecSdk} from '../feature/connector/ecrec/EcrecSdk'
import {LegalaidSdk} from '../feature/connector/legalaid/LegalaidSdk'
import {HttpError} from './controller/Controller'
import {Services} from './services'
import {PrismaClient} from '@prisma/client'
import session from 'express-session'
import {duration} from '@alexandreannic/ts-utils'
import multer from 'multer'
import {AppError} from '../helper/Errors'
import sessionFileStore from 'session-file-store'

export class Server {

  constructor(
    private conf: AppConf,
    private pgClient: PrismaClient,
    private koboClient: KoboSdk,
    private ecrecSdk: EcrecSdk,
    private legalaidSdk: LegalaidSdk,
    private services: Services,
    private log = logger('Server'),
  ) {
  }

  static readonly upload = multer({dest: 'uploads/'})

  readonly errorHandler = (err: HttpError, req: Request, res: Response, next: (err?: any) => void) => {
    const errorId = genUUID()
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
      this.log.error(`[${errorId}] Error ${err.code}: ${err.message}\n${err.stack}`)
      console.log({data: err.code === 500 ? 'Something went wrong.' : err.message, errorId})
      res.status(err.code ?? 500).json({
        data: err.code === 500 ? 'Something went wrong.' : err.message,
        errorId
      })
    } catch (e) {
      res.send(500).json({
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
    app.use(this.corsHeader)
    const x = sessionFileStore(session)
    app.use(session({
      store: new x(),
      secret: '669d73f2-fc68-4b75-88ac-c2da4af60aa3',
      name: 'session',
      cookie: {
        secure: false,
        httpOnly: false,
        maxAge: duration(365, 'day').toMs,
      },
      resave: false,
      saveUninitialized: false,
    }))
    // app.use(cookieParser())
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(getRoutes(
      this.pgClient,
      this.koboClient,
      this.ecrecSdk,
      this.legalaidSdk,
      this.services,
      this.log,
    ))
    app.use(this.errorHandler)
    app.listen(this.conf.port, () => {
      this.log.info(`server start listening on port ${this.conf.port}`)
    })
  }
}
