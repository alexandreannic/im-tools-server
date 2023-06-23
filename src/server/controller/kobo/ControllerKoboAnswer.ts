import {NextFunction, Request, Response} from 'express'
import * as yup from 'yup'
import {ObjectSchema} from 'yup'
import {PrismaClient} from '@prisma/client'
import {KoboService} from '../../../feature/kobo/KoboService'
import {validateApiPaginate} from '../../../core/Type'
import {KoboId} from '../../../feature/connector/kobo/KoboClient/type/KoboAnswer'

export interface KoboAnswersFilters {
  start?: Date
  end?: Date
  ids?: KoboId[]
  filterBy?: {
    column: string
    value: string
  }[]
}

const answersFiltersValidation: ObjectSchema<KoboAnswersFilters> = yup.object({
  start: yup.date(),
  end: yup.date(),
  ids: yup.array().of(yup.string().required()).optional(),
  filterBy: yup.array(yup.object({
    column: yup.string().required(),
    value: yup.string().required(),
  }))
})

export class ControllerKoboAnswer {

  constructor(
    private pgClient: PrismaClient,
    private service = new KoboService(pgClient)
  ) {
  }

  readonly search = async (req: Request, res: Response, next: NextFunction) => {
    const {formId} = req.params
    const filters = await answersFiltersValidation.validate(req.query)
    const paginate = await validateApiPaginate.validate(req.query)
    const answers = await this.service.fetchAnswers(formId, filters, paginate)
    res.send(answers)
  }
}
