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
import {NotFoundError} from '../helper/Errors'
import {duration} from '@alexandreannic/ts-utils'

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

  readonly errorHandler = (err: HttpError, req: Request, res: Response, next: (err?: any) => void) => {
    const errorId = genUUID()
    console.log('caught errorHandler')
    if (err instanceof NotFoundError) {
      console.log('errorHandler CAUGHT NO FOUND!!!')
      res.status(404).json({
        data: err.message,
        errorId,
      })
    }

    this.log.error(`[${errorId}] Error ${err.code}: ${err.message}\n${err.stack}`)
    console.error(err.error)
    res.status(err.code).json({
      data: err.code === 500 ? 'Something went wrong.' : err.message,
      errorId
    })
  }

  static readonly corsHeader = (req: Request, res: Response, next: NextFunction) => {
    res.header('Access-Control-Allow-Origin', 'https://infoportal-ua.drc.ngo')
    res.header('Access-Control-Allow-Headers', 'Authorization, Origin, X-Requested-With, Content-Type, Accept')
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    res.header('Access-Control-Allow-Credentials', 'true')
    next()
  }

  readonly start = () => {
    const app = express()
    app.use(Server.corsHeader)
    app.use(session({
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
