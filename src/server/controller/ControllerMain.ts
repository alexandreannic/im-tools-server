import {NextFunction, Request, Response} from 'express'
import {ServiceStats} from '../services/ServiceStats'

export class ControllerMain {

  constructor(
    private stats: ServiceStats
  ) {

  }

  readonly htmlStats = async (req: Request, res: Response, next: NextFunction) => {
    const html = await this.stats.getAll({
      start: new Date(2022, 11, 1),
      end: new Date(2023, 2, 1)
    })
    res.send(html)
  }
}
