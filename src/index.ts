import {ApiClient} from './client/ApiClient'
import {KoboClient} from './connector/kobo/KoboClient/KoboClient'
import {appConf} from './conf/AppConf'
import {Server} from './server/Server'
import {Database} from './db/Database'
import {logger} from './utils/Logger'
import {EcrecClient} from './connector/ecrec/EcrecClient'
import {EcrecSdk} from './connector/ecrec/EcrecSdk'
import {EcrecMsdStatus} from './connector/ecrec/EcrecSdkType'
import {sub} from 'date-fns'

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
  const ecrecAppSdk = new EcrecSdk(new EcrecClient(appConf.ecrecApp))


  const res = await ecrecAppSdk.getMsd({
    start: new Date(2022, 11, 1),
    end: sub(new Date(2023, 2, 1), {days: 1}),
    status: [
      EcrecMsdStatus['Funded'],
      EcrecMsdStatus['Post-funding reports'],
      EcrecMsdStatus['Final reports submitted'],
      EcrecMsdStatus['Monitoring'],
      EcrecMsdStatus['Monitoring completed'],
    ]
  })
  console.log(res.totalCount)

  logger.info(`Connecting to ${conf.db.database}...`)
  await pgClient.connect()
  // logger.info(`Applying evolutions...`)
  // await new EvolutionManager(pgClient).run()


  new Server(conf, pgClient, koboClient, ecrecAppSdk, logger).start()
})()
