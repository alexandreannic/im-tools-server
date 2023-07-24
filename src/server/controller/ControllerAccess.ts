import {NextFunction, Request, Response} from 'express'
import {PrismaClient} from '@prisma/client'
import {AccessService} from '../../feature/access/AccessService'
import {Util} from '../../helper/Utils'

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

  readonly remove = async (req: Request, res: Response, next: NextFunction) => {
    const {id} = await AccessService.removeSchema.validate(req.params)
    await this.service.remove(id)
    res.send()
  }

  readonly search = async (req: Request, res: Response, next: NextFunction) => {
    const qs = await AccessService.searchSchema.validate(req.query)
    const data = await this.service.search(qs).then(Util.logThen('searh access'))
    res.send(data)
  }

  readonly searchMine = async (req: Request, res: Response, next: NextFunction) => {
    const qs = await AccessService.searchSchema.validate(req.query)
    const data = await this.service.search({...qs, user: req.session.user}).then(Util.logThen('searh access'))
    res.send(data)
  }

}
