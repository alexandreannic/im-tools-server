import {UUID} from '../../../core/Type'
import {ApiClient} from '../../../client/ApiClient'
import {KoboAnswer, KoboAnswerParams, KoboAnswerUtils, KoboApiList} from './type/KoboAnswer'
import {KoboQuestion, koboToApiPaginate} from './type/KoboForm'
import {ApiPaginate} from '../../../core/Type'
import {Cache, map} from '@alexandreannic/ts-utils'

export class KoboClient {
  constructor(private api: ApiClient) {
  }

  static readonly parseDate = (_: Date) => _.toISOString()

  static readonly makeDateFilter = (name: string, operator: 'gte' | 'lte', date: Date) => {
    return {[name]: {['$' + operator]: KoboClient.parseDate(date)}}
  }

  // static readonly parseDate = toYYYYMMDD

  static readonly makeAuthorizationHeader = (token: string) => `Token ${token}`

  readonly getForm = (form: UUID): Promise<KoboQuestion[]> => {
    return this.api.get(`/v2/assets/${form}`)
      .then(_ => _)
  }

  readonly getAnswers = Cache.request((form: UUID, params: KoboAnswerParams = {}): Promise<ApiPaginate<KoboAnswer>> => {
    const start = map(params.start, _ => KoboClient.makeDateFilter('start', 'gte', _))
    const end = map(params.end, _ => KoboClient.makeDateFilter('start', 'lte', _))
    const query = start && end ? {'$and': [start, end]} : start ?? end
    return this.api.get<KoboApiList<KoboAnswer>>(`/v2/assets/${form}/data.json`, {qs: {query: query ? JSON.stringify(query) : undefined}})
      .then(res => ({
        ...res,
        results: res.results.map(KoboAnswerUtils.mapAnswerMetaData).sort((a, b) => a.start.getTime() - b.start.getTime())
      }))
      .then(koboToApiPaginate)
  })

  readonly getForms = () => {
    // return this.api.get(`/v2/assets/`)
    return this.api.get(`/v2/assets/?q=asset_type%3Asurvey&limit=200`)
  }
}
