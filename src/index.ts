import {ApiClient} from './client/ApiClient'
import {KoboClient} from './connector/kobo/KoboClient/KoboClient'
import {appConf} from './conf/AppConf'
import {Server} from './server/Server'
import {Database} from './db/Database'
import {logger} from './utils/Logger'
import {EcrecAppClient} from './connector/ecrec/EcrecAppClient'
import {EcrecAppSdk} from './connector/ecrec/EcrecAppSdk'

(async () => {
  const conf = appConf
  const http = new ApiClient({
    baseUrl: conf.kobo.url + '/api',
    headers: {
      Authorization: KoboClient.genAuthorizationHeader(conf.kobo.token),
    }
  })
  const pgClient = new Database(conf).client
  const koboClient = new KoboClient(http)
  const ecrecAppSdk = new EcrecAppSdk(new EcrecAppClient(appConf.ecrecApp))


  logger.info(`Connecting to ${conf.db.database}...`)
  await pgClient.connect()
  // logger.info(`Applying evolutions...`)
  // await new EvolutionManager(pgClient).run()


  new Server(conf, pgClient, koboClient, ecrecAppSdk, logger).start()
})()
