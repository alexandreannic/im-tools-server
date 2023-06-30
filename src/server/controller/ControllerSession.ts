import {Controller} from './Controller'
import {NextFunction, Request, Response} from 'express'
import * as yup from 'yup'
import {PrismaClient} from '@prisma/client'
import {SessionService} from '../../feature/session/SessionService'
import {Client} from '@microsoft/microsoft-graph-client'
import {AuthenticationProvider} from '@microsoft/microsoft-graph-client/src/IAuthenticationProvider'
import {AuthenticationProviderOptions} from '@microsoft/microsoft-graph-client/src/IAuthenticationProviderOptions'

export class ControllerSession extends Controller {

  constructor(
    private pgClient: PrismaClient,
    private service = new SessionService(pgClient)
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

    class MyCustomAuthenticationProvider implements AuthenticationProvider {
      getAccessToken = async (authenticationProviderOptions?: AuthenticationProviderOptions) => {
        return user.accessToken
      }
    }

    const msGraphSdk = Client.initWithMiddleware({
      authProvider: new MyCustomAuthenticationProvider()
    })
    const email = await msGraphSdk.api('/me').get().then(_ => _.mail as string)

    await this.service.updateLastConnectedAt(email)
    req.session.user = {...user, email}
    res.send(req.session.user)
  }
}