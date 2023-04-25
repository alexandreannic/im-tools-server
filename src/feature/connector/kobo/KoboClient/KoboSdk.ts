import {UUID} from '../../../../core/Type'
import {ApiClient} from '../../../../core/client/ApiClient'
import {KoboAnswer, KoboAnswerParams, KoboAnswerUtils, KoboApiList, KoboApiVersion} from './type/KoboAnswer'
import {KoboApiForm, KoboQuestion, koboToApiPaginate} from './type/KoboApiForm'
import {ApiPaginate} from '../../../../core/Type'
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

  readonly getForm = (form: string) => {
    return this.api.get<KoboApiForm>(`/v2/assets/${form}`)
  }

  readonly getVersions = (formId: string) => {
    return this.api.get<KoboApiList<KoboApiVersion>>(`/v2/assets/${formId}/versions`)
      .then(_ => {
        _.results.forEach(r => {
          r.date_modified = new Date(r.date_modified)
          r.date_deployed = new Date(r.date_deployed)
        })
        return _
      })
  }

  readonly updateData = ({
    formId,
    submissionId,
    group,
    questionName,
    newValue,
  }: {
    formId: string,
    submissionId: string,
    group?: string,
    questionName: string,
    newValue: string
  }) => {
    // return this.api.patch(`/v2/assets/${formId}/data/${submissionId}/`, {
    //   body: {
    //     'start': new Date().toISOString(),
    //   }
    // })
    return this.api.patch(`/v2/assets/${formId}/data/bulk/`, {
      qs: {format: 'json'},
      body: {
        payload: {
          submissionId: [submissionId],
          data: {[(group ? group + '/' : '') + questionName]: newValue}
        }
      }
    })
  }

  readonly getFormByVersion = (formId: string, versionId: string) => {
    return this.api.get<KoboApiForm>(`/v2/assets/${formId}/versions/${versionId}`)
  }

  readonly getAnswersByVersion = (formId: string, versionId: string) => {
    return this.api.get<KoboApiForm>(`/v2/assets/${formId}/versions/${versionId}/data.json`)
  }

  readonly getAnswers = Cache.request((form: UUID, params: KoboAnswerParams = {}): Promise<ApiPaginate<KoboAnswer>> => {
    const start = map(params.start, _ => KoboSdk.makeDateFilter('start', 'gte', _))
    const end = map(params.end, _ => KoboSdk.makeDateFilter('start', 'lte', _))
    const query = start && end ? {'$and': [start, end]} : start ?? end
    return this.api.get<KoboApiList<any>>(`/v2/assets/${form}/data`, {qs: {query: query ? JSON.stringify(query) : undefined}})
      .then(res => {
        return ({
          ...res,
          results: res.results.map(KoboAnswerUtils.mapAnswer).sort((a, b) => a.submissionTime.getTime() - b.submissionTime.getTime())
        })
      })
      .then(koboToApiPaginate)
  })

  private readonly removeGroup = () => {

  }

  readonly getForms = () => {
    // return this.api.get(`/v2/assets/`)
    return this.api.get(`/v2/assets/?q=asset_type%3Asurvey&limit=200`)
  }
}
