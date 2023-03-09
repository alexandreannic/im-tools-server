import {NextFunction, Request, Response} from 'express'
import {KoboClient} from '../../connector/kobo/KoboClient/KoboClient'
import {Client} from 'pg'

export class ControllerMain {

  constructor(
  ) {

  }

  readonly index = async (req: Request, res: Response, next: NextFunction) => {
    res.send({})
  }
}
