import {NextFunction, Request, Response} from 'express'
import {Client} from 'pg'
import {Logger} from '../../utils/Logger'
import {LegalaidSdk} from '../../feature/connector/legalaid/LegalaidSdk'
import {Controller} from './Controller'


export class ControllerLegalAid extends Controller {

  constructor(
    private legalAidSdk: LegalaidSdk,
    private logger: Logger,
  ) {
    super({errorKey: 'monitoring'})
  }

  readonly index = async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.send({})
    } catch (e) {
      next(e)
    }
  }

}
