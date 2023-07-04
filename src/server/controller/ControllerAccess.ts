import {NextFunction, Request, Response} from 'express'
import {PrismaClient} from '@prisma/client'
import {accessSearchParamsSchema, AccessService} from '../../feature/access/AccessService'

export class ControllerAccess {

  constructor(
    private prisma: PrismaClient,
    private service = new AccessService(prisma),
  ) {
  }

  readonly search = async (req: Request, res: Response, next: NextFunction) => {
    const params = await accessSearchParamsSchema.validate(req.params)
    const data = await this.service.search(params)
    res.send(data)
  }


}
