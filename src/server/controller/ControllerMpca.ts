import {PrismaClient} from '@prisma/client'
import {MpcaDbService} from '../../feature/mpca/db/MpcaDbService'
import {NextFunction, Request, Response} from 'express'
import * as yup from 'yup'

export class ControllerMpca {

  constructor(
    private prisma: PrismaClient,
    private service: MpcaDbService = new MpcaDbService(prisma)
  ) {
  }

  readonly search = async (req: Request, res: Response, next: NextFunction) => {
    const body = await yup.object({
      filters: yup.object({
        start: yup.date(),
        end: yup.date(),
      })
    }).validate(req.body)
    const data = await this.service.search(body)
    res.send(data)
  }
}