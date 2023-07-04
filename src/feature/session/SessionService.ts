import {PrismaClient} from '@prisma/client'
import {logger, Logger} from '../../helper/Logger'

export class SessionService {

  constructor(
    private prisma: PrismaClient,
    private log: Logger = logger('SessionService'),
  ) {
  }


  readonly updateLastConnectedAt = async (email: string) => {
    const user = await this.prisma.user.findFirst({where: {email}})
    if (!user) {
      this.log.info(`Create account ${email}.`)
      await this.prisma.user.create({
        data: {
          email,
          lastConnectedAt: new Date()
        }
      })
    } else {
      await this.prisma.user.update({
        where: {email},
        data: {lastConnectedAt: new Date()}
      })
    }
    this.log.info(`${email} connected.`)
  }
}