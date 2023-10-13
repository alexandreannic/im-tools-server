import {NextFunction, Request, Response} from 'express'
import * as yup from 'yup'
import {PrismaClient} from '@prisma/client'
import {UserService} from '../../feature/user/UserService'
import {DrcOffice} from '../../core/DrcUa'
import {Enum} from '@alexandreannic/ts-utils'
import {SessionError} from '../../feature/session/SessionErrors'
import {Util} from '../../helper/Utils'

export class ControllerUser {

  constructor(
    private pgClient: PrismaClient,
    private service = new UserService(pgClient)
  ) {
  }

  readonly search = async (req: Request, res: Response, next: NextFunction) => {
    const data = await this.service.getAll()
    res.send(data)
  }

  readonly updateMe = async (req: Request, res: Response, next: NextFunction) => {
    const user = await yup.object({
      drcOffice: yup.mixed<DrcOffice>().oneOf(Enum.values(DrcOffice)),
    }).validate(req.body)

    const email = req.session.user?.email
    if (!email) {
      throw new SessionError.UserNotConnected()
    }
    const data = await this.service.update({email, ...user})
    req.session.user = {
      ...req.session.user,
      ...Util.removeUndefined(data) as any,
    }
    res.send(data)
  }
}