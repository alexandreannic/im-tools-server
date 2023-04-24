import express, {NextFunction, Request, Response} from 'express'
import * as bodyParser from 'body-parser'
import {getRoutes} from './Routes'
import {Logger} from '../utils/Logger'
import {AppConf} from '../core/conf/AppConf'
import {genUUID} from '../utils/Common'
import {KoboSdk} from '../feature/connector/kobo/KoboClient/KoboSdk'
import {Client} from 'pg'
import {EcrecSdk} from '../feature/connector/ecrec/EcrecSdk'
import {LegalaidSdk} from '../feature/connector/legalaid/LegalaidSdk'
import {HttpError} from './controller/Controller'
import {Services} from './services'
import {PrismaClient} from '@prisma/client'

export class Server {
  
  constructor(
    private conf: AppConf,
    private pgClient: PrismaClient,
    private koboClient: KoboSdk,
    private ecrecSdk: EcrecSdk,
    private legalaidSdk: LegalaidSdk,
    private services: Services,
    private logger: Logger,
  ) {
  }

  readonly errorHandler = (err: HttpError, req: Request, res: Response, next: (err?: any) => void) => {
    const errorId = genUUID()
    this.logger.error(`[${errorId}] Error ${err.code}: ${err.message}\n${err.stack}`)
    console.error(err.error)
    res.status(err.code).json({
      data: err.code === 500 ? 'Something went wrong.' : err.message,
      errorId
    })
  }

  static readonly corsHeader = (req: Request, res: Response, next: NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Authorization, Origin, X-Requested-With, Content-Type, Accept')
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    next()
  }

  readonly start = () => {
    const app = express()
    app.use(Server.corsHeader)
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(getRoutes(
      this.pgClient,
      this.koboClient,
      this.ecrecSdk,
      this.legalaidSdk,
      this.services,
      this.logger,
    ))
    app.use(this.errorHandler)
    app.listen(this.conf.port, () => {
      this.logger.info(`server start listening on port ${this.conf.port}`)
    })
  }
}
