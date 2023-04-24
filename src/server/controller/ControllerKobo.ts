import {NextFunction, Request, Response} from 'express'
import * as yup from 'yup'
import {PrismaClient} from '@prisma/client'
import {KoboService} from '../../feature/kobo/KoboService'

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
    const answers = await this.koboService.fetchAnswers(formId, filters)
    res.send(answers)
  }
}
