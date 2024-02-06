import {ApiClient} from '../../../../core/client/ApiClient'
import {KoboAnswer, KoboId} from '../KoboClient/type/KoboAnswer'
import retry from 'promise-retry'

export interface KoboV1Form {
  uuid: string
  id_string: KoboId
}

interface SubmitResponse {
  message?: 'Successful submission.',
  formid?: KoboId
  encrypted?: boolean,
  instanceID?: string,
  submissionDate?: string,
  markedAsCompleteDate?: string
  error?: 'Duplicate submission'
}

export class KoboSdkV1 {
  constructor(private api: ApiClient) {
  }

  readonly submit = async <T extends Record<string, any>>({
    formId,
    data,
    retries = 20,
  }: {
    retries?: number
    data: Partial<T>
    formId: KoboId
  }): Promise<SubmitResponse> => {
    const uuid = await this.getForms().then(_ => _.find(f => f.id_string === formId)?.uuid)
    if (!uuid) throw new Error(`Kobo form id ${formId} not found.`)
    return retry((retry, number) => {
      return this.api.post<SubmitResponse>(`/submissions.json`, {
        body: {
          id: formId,
          submission: {
            formhub: {uuid,},
            ...data,
          }
        }
      }).catch(x => {
        console.log('caugth')
        return retry(x)
      })
    }, {retries})
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
