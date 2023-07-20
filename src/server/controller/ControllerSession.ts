import {Controller} from './Controller'
import {NextFunction, Request, Response} from 'express'
import * as yup from 'yup'
import {PrismaClient} from '@prisma/client'
import {SessionService} from '../../feature/session/SessionService'

export class ControllerSession extends Controller {

  constructor(
    private prisma: PrismaClient,
    private service = new SessionService(prisma)
  ) {
    super({errorKey: 'session'})
  }

  readonly get = async (req: Request, res: Response, next: NextFunction) => {
    res.send(req.session.user)
  }

  readonly logout = async (req: Request, res: Response, next: NextFunction) => {
    req.session.user = undefined
    res.send()
  }

  readonly login = async (req: Request, res: Response, next: NextFunction) => {
    const user = await yup.object({
      name: yup.string().required(),
      username: yup.string().required(),
      accessToken: yup.string().required(),
    }).validate(req.body)
    const connectedUser = await this.service.login(user)
    req.session.user = {
      name: user.name,
      accessToken: user.accessToken,
      admin: connectedUser.admin,
      email: connectedUser.email,
      drcJob: connectedUser.drcJob ?? undefined,
      drcOffice: connectedUser.drcOffice ?? undefined,
    }
    res.send(req.session.user)
  }

  readonly connectAs = async (req: Request, res: Response, next: NextFunction) => {
    const body = await yup.object({
      email: yup.string().required(),
    }).validate(req.body)

    const user = await this.prisma.user.findFirstOrThrow({where: {email: body.email}})
    req.session.user = {
      ...req.session.user,
      accessToken: req.session.user?.accessToken ?? '',
      name: (req.session.user?.name ?? '') + ' [STEALTH]',
      admin: user.admin,
      email: user.email,
      drcJob: user.drcJob ?? undefined,
      drcOffice: user.drcOffice ?? undefined,
    }
    res.send(req.session.user)
  }
}