import {PrismaClient} from '@prisma/client'
import {logger, Logger} from '../../helper/Logger'
import {throwIf} from '@alexandreannic/ts-utils'
import {throwError} from '../../helper/Errors'
import {SessionError} from './SessionErrors'

export class SessionService {

  constructor(
    private prisma: PrismaClient,
    private log: Logger = logger('SessionService'),
  ) {
  }


  readonly updateLastConnectedAt = async (email: string) => {
    await this.prisma.user.findFirstOrThrow({where: {email}})
      .catch(throwError(SessionError.UserNotFound))
    await this.prisma.user.update({
      where: {email},
      data: {
        lastConnectedAt: new Date(),
      }
    })
    this.log.info(`${email} connected.`)
  }
}