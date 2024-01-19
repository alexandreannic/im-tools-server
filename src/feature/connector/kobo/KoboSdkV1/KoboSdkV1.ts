import {ApiClient} from '../../../../core/client/ApiClient'
import {KoboAnswer, KoboId} from '../KoboClient/type/KoboAnswer'

export interface KoboV1Form {
  uuid: string
  id_string: KoboId
}

export class KoboSdkV1 {
  constructor(private api: ApiClient) {
  }

  readonly submit = async <T extends Record<string, any>>({
    formId,
    data,
  }: {
    data: Partial<T>
    formId: KoboId
  }) => {
    const uuid = await this.getForms().then(_ => _.find(f => f.id_string === formId)?.uuid)
    if (!uuid) throw new Error(`Kobo form id ${formId} not found.`)
    return this.api.post(`/submissions.json`, {
      body: {
        id: formId,
        submission: {
          formhub: {
            uuid,
          },
          ...data,
        }
      }
    })
  }

  readonly getForms = () => {
    return this.api.get<KoboV1Form[]>(`/forms`)
  }
  // static readonly parseDate = (_: Date) => _.toISOString()
  //
  // static readonly makeDateFilter = (name: string, operator: 'gte' | 'lte', date: Date) => {
  //   return {[name]: {['$' + operator]: KoboSdk.parseDate(date)}}
  // }
  //
  // // static readonly parseDate = toYYYYMMDD
  //
  // static readonly makeAuthorizationHeader = (token: string) => `Token ${token}`


}
