import {ApiClient} from './client/ApiClient'
import {KoboClient} from './kobo/KoboClient/KoboClient'
import {appConf} from './conf/AppConf'
import {Server} from './Server'
import {Database} from './db/Database'
import {logger} from './utils/Logger'
import {Fetch} from './fetch'

const R = Fetch
// const R = Axios
const run = async () => {
  const tokens = await R.getTokenAndSession()
  const logins = await R.login(tokens)
  const res = await R.getData(R.extractTokens(logins))
  console.log(await res.text())
}

(async () => {
  await run()
  process.exit(0)
  
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
