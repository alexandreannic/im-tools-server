import {lazy} from '@alexandreannic/ts-utils'
import {UUID} from '../../core/Type'
import {KoboSdk} from '../connector/kobo/KoboClient/KoboSdk'
import {ApiClient} from '../../core/client/ApiClient'
import {PrismaClient} from '@prisma/client'

export class KoboSdkGenerator {

  constructor(
    private pgClient: PrismaClient,
  ) {
  }

  readonly get = lazy(async (koboServerId: UUID) => {
    const k = await this.pgClient.koboServer.findFirstOrThrow({where: {id: koboServerId}})
      .catch(() => this.pgClient.koboServer.findFirstOrThrow())
    return new KoboSdk(new ApiClient({
      baseUrl: k.url + '/api',
      headers: {
        Authorization: KoboSdk.makeAuthorizationHeader(k.token),
      }
    }))
  })
}