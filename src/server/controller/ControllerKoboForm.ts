import {NextFunction, Request, Response} from 'express'
import {KoboClient} from '../../connector/kobo/KoboClient/KoboClient'
import {Client} from 'pg'
import {koboFormsId} from '../../conf/KoboFormsId'
import * as yup from 'yup'
import {PrismaClient} from '@prisma/client'

interface AnswersFilters {
  start?: Date
  end?: Date
}

const answersFiltersValidation = yup.object({
  start: yup.date(),
  end: yup.date(),
})

export class ControllerKoboForm {

  constructor(
    private pgClient: PrismaClient,
    private koboClient: KoboClient,
  ) {

  }

  readonly importAnswers = async (req: Request, res: Response, next: NextFunction) => {
    const {id} = req.body
    const answers = await this.koboClient.getAnswers(id)
      .then(_ => _.data)
    res.status(200).json(answers)
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
