import {ApiClient} from './client/ApiClient'
import {KoboClient} from './connector/kobo/KoboClient/KoboClient'
import {appConf} from './conf/AppConf'
import {Server} from './server/Server'
import {Database} from './db/Database'
import {logger} from './utils/Logger'
import {EcrecClient} from './connector/ecrec/EcrecClient'
import {EcrecSdk} from './connector/ecrec/EcrecSdk'
import {LegalaidSdk} from './connector/legalaid/LegalaidSdk'

(async () => {
  const conf = appConf
  const pgClient = new Database(conf).client
  const koboSdk = new KoboClient(new ApiClient({
      baseUrl: conf.kobo.url + '/api',
      headers: {
        Authorization: KoboClient.genAuthorizationHeader(conf.kobo.token),
      }
    })
  )
  const ecrecAppSdk = new EcrecSdk(new EcrecClient(appConf.ecrecApp))
  const legalAidSdk = new LegalaidSdk(new ApiClient({
    baseUrl: 'https://api.lau-crm.org.ua',
    headers: {
      'x-auth-token': appConf.legalAid.apiToken,
    }
  }))


  // const res = await ecrecAppSdk.getMsd({
  //   start: new Date(2022, 11, 1),
  //   end: sub(new Date(2023, 2, 1), {days: 1}),
  //   status: [
  //     EcrecMsdStatus['Funded'],
  //     EcrecMsdStatus['Post-funding reports'],
  //     EcrecMsdStatus['Final reports submitted'],
  //     EcrecMsdStatus['Monitoring'],
  //     EcrecMsdStatus['Monitoring completed'],
  //   ]
  // })

  // const resG = await legalAidSdk.fetchBeneficiaryForAllOffice({start, end, pollType: PollType.Group})
  // console.log('ind')
  // const resI = await legalAidSdk.fetchBeneficiaryForAllOffice({start, end, pollType: PollType.Individual})
  // console.log('G', resG)
  // console.log('I', resI)
  // console.log(res.data.map(_ => [
  //   _.createdAt,
  //   _.date,
  //   msToString(_.createdAt.getTime() - _['62629f40a397c105f1cdbecb'].getTime())
  // ]).length)
  // console.log(res.data.map(_ => _.createdAt.getTime() - _['62629f40a397c105f1cdbecb'].getTime()).sort().map(msToString))

  // logger.info(`Connecting to ${conf.db.database}...`)
  // await pgClient.connect()
  // logger.info(`Applying evolutions...`)
  // await new EvolutionManager(pgClient).run()


  new Server(conf, pgClient, koboSdk, ecrecAppSdk, legalAidSdk, logger).start()
})()
