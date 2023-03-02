import {ApiClient} from './client/ApiClient'
import {KoboClient} from './kobo/KoboClient/KoboClient'
import {appConf} from './conf/AppConf'
import {Server} from './Server'
import {Database} from './db/Database'
import {logger} from './utils/Logger'
import {EcrecAppClient} from './ecrecAppClient/EcrecAppClient'
import {EcrecAppSdk} from './ecrecAppClient/EcrecAppSdk'

const run = async () => {
  const R = new EcrecAppSdk(new EcrecAppClient(appConf.ecrecApp))
  const res = await R.getData()
  console.log(await res.text())
}

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
  
  logger.info(`Connecting to ${conf.db.database}...`)
  await pgClient.connect()
  // logger.info(`Applying evolutions...`)
  // await new EvolutionManager(pgClient).run()


  new Server(conf, pgClient, koboClient, logger).start()
})()
