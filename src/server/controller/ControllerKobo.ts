import {NextFunction, Request, Response} from 'express'
import {KoboClient} from '../../connector/kobo/KoboClient/KoboClient'
import {Client} from 'pg'
import {koboFormsId} from '../../conf/KoboFormsId'
import * as yup from 'yup'

interface AnswersFilters {
  start?: Date
  end?: Date
}

const answersFiltersValidation = yup.object({
  start: yup.date(),
  end: yup.date(),
})

export class ControllerKobo {

  constructor(
    private pgClient: Client,
    private koboClient: KoboClient,
  ) {

  }

  readonly importAnswers = async (req: Request, res: Response, next: NextFunction) => {
    const answers = await this.koboClient.getAnswers('a5bMNqnRbitCHuM9j4Kbd3')
      .then(_ => _.data)
    res.status(200).json(answers)
  }

  readonly getForms = async (req: Request, res: Response, next: NextFunction) => {
    res.send(koboFormsId)
  }

  readonly getAnswers = async (req: Request, res: Response, next: NextFunction) => {
    const filters = await answersFiltersValidation.validate(req.query)
    const formId = req.params.id
    try {
      const data = await this.koboClient.getAnswers(formId, filters)
      res.send(data)
    } catch (e) {
      next(e)
    }
  }

  readonly getForm = async (req: Request, res: Response, next: NextFunction) => {
    const form = await this.koboClient.getForm(req.params.id)
    res.send(form)
  }
}
