import {ApiClient} from './client/ApiClient'
import {KoboClient} from './connector/kobo/KoboClient/KoboClient'
import {appConf} from './conf/AppConf'
import {Server} from './server/Server'
import {Database} from './db/Database'
import {logger} from './utils/Logger'
import {EcrecClient} from './connector/ecrec/EcrecClient'
import {EcrecSdk} from './connector/ecrec/EcrecSdk'
import {LegalaidSdk} from './connector/legalaid/LegalaidSdk'
import {ServiceEcrec} from './server/services/ServiceEcrec'
import {ServiceLegalAid} from './server/services/ServiceLegalAid'
import {ServiceNfi} from './server/services/ServiceNfi'
import {ServiceStats} from './server/services/ServiceStats'
import {Services} from './server/services'
import {ActivityInfoSdk} from './connector/acticity-info/ActicityInfoSdk'
import {AIID, columnsListMap, FormDesc, FormDescs, formId} from './connector/acticity-info/ActivityInfo'
import {Arr, Enum, map} from '@alexandreannic/ts-utils'
import {id} from 'date-fns/locale'

const initServices = (
  koboClient: KoboClient,
  ecrecSdk: EcrecSdk,
  legalaidSdk: LegalaidSdk,
): Services => {
  const ecrec = new ServiceEcrec(ecrecSdk)
  const legalAid = new ServiceLegalAid(legalaidSdk)
  const nfi = new ServiceNfi(koboClient)
  const stats = new ServiceStats(
    ecrec,
    legalAid,
    nfi,
  )
  return {
    ecrec,
    legalAid,
    nfi,
    stats,
  }
}

(async () => {
  const conf = appConf
  const pgClient = new Database(conf).client
  const koboSdk = new KoboClient(new ApiClient({
      baseUrl: conf.kobo.url + '/api',
      headers: {
        Authorization: KoboClient.makeAuthorizationHeader(conf.kobo.token),
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

  const services = initServices(
    koboSdk,
    ecrecAppSdk,
    legalAidSdk,
  )

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
  new Server(conf, pgClient, koboSdk, ecrecAppSdk, legalAidSdk, services, logger).start()
})()


;(async () => {
  const x = new ActivityInfoSdk()
  const dbId = await x.fetchDatabases().then(_ => _[0].databaseId)
  const formDesc = await x.fetchForm(formId.general_protection_rmm)

  const getAllElements = (f: FormDescs, ids: AIID[]): FormDesc['schema']['elements'] => {
    const ignoredInputs = [
      'subform',
      'section',
      'calculated',
    ]
    const elements = ids.map(_ => f[_]).flatMap(_ => {
      return _.schema.elements
    })
    const questions = elements.filter(_ => !ignoredInputs.includes(_.type))
    const subformsIds = Arr(elements.filter(_ => _.type === 'subform').map(_ => {
      return _.typeParameters.formId
    })).compact().get
    return [
      ...questions,
      ...subformsIds.length > 0 ? getAllElements(f, subformsIds) : []
    ]
  }

  const getOptions = async (f: FormDescs, e: FormDesc['schema']['elements'][0]): Promise<{
    formId: AIID,
    optionId: AIID,
    optionDefId: AIID,
    options: any[]
  }> => {
    const optionId = e.typeParameters.range![0].formId
    const getRandomOptions = () => {
      return (f[optionId].schema.elements.find(_ => (_.code ?? '').includes('ENG')) ?? f[optionId].schema.elements[0]).id
    }
    const optionDefId = columnsListMap[optionId]?.listId ?? getRandomOptions()
    const options = await x.fetchColumns(optionId, optionDefId)
    return {
      formId: e.id,
      optionId,
      optionDefId: optionDefId,
      options,
    }
  }

  const print = async () => {
    const forms = getAllElements(formDesc, [formId.general_protection_rmm])
    const options = await Promise.all(forms.filter(_ => _.type === 'reference').map(f => getOptions(formDesc, f)))
    options.find(_ => _.formId === 'c19j8p9ldsv4qa3o')?.options.map(x => console.log(x, ','))
    // console.log(forms.map(_ => ['----', _.id, _.label, _.type]))
    return forms.map(q => {
      const o = options.find(_ => _.formId === q.id)
      return {
        id: q.id,
        optionsId: o?.optionDefId,
        label: q.label,
        // options: JSON.stringify(o?.options.splice(0, 5)),
        // optionsLength: o?.options.length,
      }
    })
  }

  print()
  // console.log(await print())
})
