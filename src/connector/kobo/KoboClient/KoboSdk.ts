import {UUID} from '../../../core/Type'
import {ApiClient} from '../../../client/ApiClient'
import {KoboAnswer, KoboAnswerParams, KoboAnswerUtils, KoboApiList} from './type/KoboAnswer'
import {KoboForm, KoboQuestion, koboToApiPaginate} from './type/KoboForm'
import {ApiPaginate} from '../../../core/Type'
import {Cache, map} from '@alexandreannic/ts-utils'

export class KoboSdk {
  constructor(private api: ApiClient) {
  }

  static readonly parseDate = (_: Date) => _.toISOString()

  static readonly makeDateFilter = (name: string, operator: 'gte' | 'lte', date: Date) => {
    return {[name]: {['$' + operator]: KoboSdk.parseDate(date)}}
  }

  // static readonly parseDate = toYYYYMMDD

  static readonly makeAuthorizationHeader = (token: string) => `Token ${token}`

  readonly getForm = (form: UUID): Promise<KoboForm> => {
    return this.api.get(`/v2/assets/${form}`)
  }

  readonly getAnswers = Cache.request((form: UUID, params: KoboAnswerParams = {}): Promise<ApiPaginate<KoboAnswer>> => {
    const start = map(params.start, _ => KoboSdk.makeDateFilter('start', 'gte', _))
    const end = map(params.end, _ => KoboSdk.makeDateFilter('start', 'lte', _))
    const query = start && end ? {'$and': [start, end]} : start ?? end
    return this.api.get<KoboApiList<any>>(`/v2/assets/${form}/data.json`, {qs: {query: query ? JSON.stringify(query) : undefined}})
      .then(res => {
        return ({
          ...res,
          results: res.results.map(KoboAnswerUtils.mapAnswer).sort((a, b) => a.submissionTime.getTime() - b.submissionTime.getTime())
        })
      })
      .then(koboToApiPaginate)
  })

  readonly getForms = () => {
    // return this.api.get(`/v2/assets/`)
    return this.api.get(`/v2/assets/?q=asset_type%3Asurvey&limit=200`)
  }
}
