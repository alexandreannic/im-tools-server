import {PrismaClient, User as PUser} from '@prisma/client'
import {logger, Logger} from '../../helper/Logger'
import {AuthenticationProvider} from '@microsoft/microsoft-graph-client/src/IAuthenticationProvider'
import {AuthenticationProviderOptions} from '@microsoft/microsoft-graph-client/src/IAuthenticationProviderOptions'
import {Client} from '@microsoft/microsoft-graph-client'
import {SessionError} from './SessionErrors'

// import {User} from '@microsoft/msgraph-sdk-javascript/lib/src/models/user'
type User = any

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
    const connectedUser = await this.syncUserInDb({
      email: msUser.mail,
      drcJob: msUser.jobTitle,
      accessToken: userBody.accessToken,
      name: userBody.name,
    })
    this.log.info(`${connectedUser.email} connected.`)
    return connectedUser
  }

  readonly syncUserInDb = async ({email, drcJob, accessToken, name}: {accessToken: string, name: string, email: string, drcJob: string}): Promise<PUser> => {
    const user = await this.prisma.user.findFirst({where: {email}})
    if (!user) {
      this.log.info(`Create account ${email}.`)
      return this.prisma.user.create({
        data: {
          email,
          name,
          accessToken,
          drcJob: drcJob,
          lastConnectedAt: new Date()
        }
      })
    } else {
      return this.prisma.user.update({
        where: {email},
        data: {
          accessToken,
          name,
          drcJob: drcJob,
          lastConnectedAt: new Date()
        }
      })
    }
  }

  readonly saveActivity = async ({email, detail}: {email?: string, detail?: string}) => {
    const user = email ? await this.prisma.user.findUnique({where: {email}}) : undefined
    return this.prisma.userActivity.create({
      data: {
        userId: user?.id,
        detail,
        at: new Date(),
      }
    })
  }
}