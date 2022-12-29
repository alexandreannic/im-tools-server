import {NextFunction, Request, Response} from 'express'

export class AppController {

  readonly index = (req: Request, res: Response, next: NextFunction) => {
    res.send('Running !')
  }
}
