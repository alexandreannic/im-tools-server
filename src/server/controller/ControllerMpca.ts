import {PrismaClient} from '@prisma/client'
import {MpcaDbService} from '../../feature/mpca/db/MpcaDbService'
import {NextFunction, Request, Response} from 'express'

export class ControllerMpca {

  constructor(
    private prisma: PrismaClient,
    private service: MpcaDbService = new MpcaDbService(prisma)
  ) {
  }

  readonly search = async (req: Request, res: Response, next: NextFunction) => {
    const data = await this.service.search({})
    res.send(data)
  }
}