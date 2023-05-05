import {NextFunction, Request, Response} from 'express'
import * as yup from 'yup'
import {ObjectSchema} from 'yup'
import {PrismaClient} from '@prisma/client'
import {KoboService} from '../../feature/kobo/KoboService'
import {validateApiPaginate} from '../../core/Type'

export interface KoboAnswersFilters {
  start?: Date
  end?: Date
  filterBy?: {
    column: string
    value: string
  }[]
}

const answersFiltersValidation: ObjectSchema<KoboAnswersFilters> = yup.object({
  start: yup.date(),
  end: yup.date(),
  filterBy: yup.array(yup.object({
    column: yup.string().required(),
    value: yup.string().required(),
  }))
})

export class ControllerKobo {


  constructor(
    private pgClient: PrismaClient,
    private koboService = new KoboService(pgClient)
  ) {

  }

  readonly getServers = async (req: Request, res: Response, next: NextFunction) => {
    const servers = await this.pgClient.koboServer.findMany()
    res.send(servers)
  }

  readonly getAnswers = async (req: Request, res: Response, next: NextFunction) => {
    const {formId} = req.params
    const filters = await answersFiltersValidation.validate(req.query)
    const paginate = await validateApiPaginate.validate(req.query)
    const answers = await this.koboService.fetchAnswers(formId, filters, paginate)
    res.send(answers)
  }
}
