import {PrismaClient, User as PUser} from '@prisma/client'
import {logger, Logger} from '../../helper/Logger'
import {AuthenticationProvider} from '@microsoft/microsoft-graph-client/src/IAuthenticationProvider'
import {AuthenticationProviderOptions} from '@microsoft/microsoft-graph-client/src/IAuthenticationProviderOptions'
import {Client} from '@microsoft/microsoft-graph-client'
import {User} from '@microsoft/msgraph-sdk-javascript/lib/src/models/user'
import {SessionError} from './SessionErrors'

export class SessionService {

  constructor(
    private prisma: PrismaClient,
    private log: Logger = logger('SessionService'),
  ) {
  }

  readonly login = async (userBody: {
    name: string
    username: string
    accessToken: string
  }) => {
    class MyCustomAuthenticationProvider implements AuthenticationProvider {
      getAccessToken = async (authenticationProviderOptions?: AuthenticationProviderOptions) => {
        return userBody.accessToken
      }
    }

    // const msGraphSdk = GraphServiceClient.init({
    //   authProvider: new MyCustomAuthenticationProvider()
    // })
    // msGraphSdk.users.get()
    // const email = await msGraphSdk.me.get().then(_ => {
    //   return _!.mail as string
    // })

    const msGraphSdk = Client.initWithMiddleware({
      authProvider: new MyCustomAuthenticationProvider()
    })
    const msUser: User = await msGraphSdk.api('/me').get()

    if (msUser.mail === undefined || msUser.jobTitle === undefined) {
      throw new SessionError.UserNotFound
    }
    const connectedUser = await this.syncUserInDb(msUser.mail, msUser.jobTitle)
    this.log.info(`${connectedUser.email} connected.`)
    return connectedUser
  }

  readonly syncUserInDb = async (email: string, drcJob: string): Promise<PUser> => {
    const user = await this.prisma.user.findFirst({where: {email}})
    if (!user) {
      this.log.info(`Create account ${email}.`)
      return this.prisma.user.create({
        data: {
          email,
          drcJob: drcJob,
          lastConnectedAt: new Date()
        }
      })
    } else {
      return this.prisma.user.update({
        where: {email},
        data: {
          drcJob: drcJob,
          lastConnectedAt: new Date()
        }
      })
    }
  }
}