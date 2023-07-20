import {NextFunction, Request, Response} from 'express'
import {PrismaClient} from '@prisma/client'
import {AccessService} from '../../feature/access/AccessService'

export class ControllerAccess {

  constructor(
    private prisma: PrismaClient,
    private service = new AccessService(prisma),
  ) {
  }

  readonly create = async (req: Request, res: Response, next: NextFunction) => {
    const body = await AccessService.createSchema.validate(req.body)
    const data = await this.service.add(body)
    res.send(data)
  }

  readonly search = async (req: Request, res: Response, next: NextFunction) => {
    const params = await AccessService.searchSchema.validate(req.params)
    const data = await this.service.search(params)
    res.send(data)
  }


}
