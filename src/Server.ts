import express, {NextFunction, Request, Response} from 'express'
import * as bodyParser from 'body-parser'
import {getRoutes} from './conf/Routes'
import {logger} from './utils/Logger'
import {HttpError} from './utils/Error'
import {AppConf} from './conf/AppConf'
import {genUUID} from './utils/Common'


export class Server {
  constructor(
    private conf: AppConf,
  ) {
  }

  static readonly errorHandler = (err: HttpError, req: Request, res: Response, next: (err?: any) => void) => {
    const errorId = genUUID()
    logger.error(`[${errorId}] Error ${err.code}: ${err.message}\n${err.stack}`)
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
    app.use(getRoutes())
    app.use(Server.errorHandler)
    app.listen(this.conf.port, () => {
      logger.info(`server start listening on port ${this.conf.port}`)
    })
  }
}
