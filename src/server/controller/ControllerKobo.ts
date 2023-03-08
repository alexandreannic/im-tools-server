import {NextFunction, Request, Response} from 'express'
import {KoboClient} from '../../connector/kobo/KoboClient/KoboClient'
import {Client} from 'pg'

export class ControllerKobo {

  constructor(
    private pgClient: Client,
    private koboClient: KoboClient,
  ) {

  }

  readonly importAnswers = async (req: Request, res: Response, next: NextFunction) => {
    const answers = await this.koboClient.getAnswers('a5bMNqnRbitCHuM9j4Kbd3')
      .then(_ => _.results)
    res.status(200).json(answers)
  }
}
