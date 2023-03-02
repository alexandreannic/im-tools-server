import {ApiClient} from './client/ApiClient'
import {KoboClient} from './kobo/KoboClient/KoboClient'
import {appConf} from './conf/AppConf'
import {Server} from './Server'
import {Database} from './db/Database'
import {logger} from './utils/Logger'
import {Fetch} from './fetch'
import {_axios} from './_axios'

const R = Fetch
// const R = _axios
const run = async () => {
  const tokens = await R.getTokenAndSession()
  console.log('> tokens', tokens)
  console.warn('\nLogin')
  const logins = await R.login(tokens)
  console.log('> tokens', R.extractTokens(logins)[0])
  console.log(logins.headers)
  console.log('connected ?', await logins.text().then(_ => _.includes('new MainController();')))
  console.warn('\nGETDATA() with token ' + R.extractTokens(logins))
  const res = await R.getData(R.extractTokens(logins))
  console.log(await res.text())
}

(async () => {
  console.clear()
  console.log('start')
  
  await run()
  // process.exit(0)

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
