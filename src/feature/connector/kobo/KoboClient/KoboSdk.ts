import {ApiPaginate} from '../../../../core/Type'
import {ApiClient} from '../../../../core/client/ApiClient'
import {ApiKoboAnswerMetaData, KoboAnswer, KoboAnswerId, KoboAnswerParams, KoboAnswerUtils, KoboApiList, KoboApiVersion, KoboId} from './type/KoboAnswer'
import {KoboApiForm, KoboApiType} from './type/KoboApiForm'
import {map} from '@alexandreannic/ts-utils'
import axios from 'axios'
import {appConf} from '../../../../core/conf/AppConf'
import {KoboForm} from '@prisma/client'

const koboToApiPaginate = <T>(_: KoboApiList<T>): ApiPaginate<T> => {
  return {
    total: _.count,
    data: _.results,
  }
}

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
    return this.api.get<KoboApiForm>(`/v2/assets/${form}`).then(_ => {
      _.content.survey.forEach(q => {
        q.name = q.$autoname ?? q.name
      })
      return _
    })
  }

  readonly edit = (formId: KoboId, answerId: KoboAnswerId) => {
    return this.api.get<{url: string, detail?: string}>(`/v2/assets/${formId}/data/${answerId}/enketo/edit/?return_url=false`)
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

  readonly updateDataSimple = ({
    formId,
    submissionIds,
    group,
    questionName,
    newValue,
  }: {
    formId: KoboId,
    submissionIds: string[],
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
      // qs: {format: 'json'},
      body: {
        payload: {
          submission_ids: submissionIds,
          data: {[(group ? group + '/' : '') + questionName]: newValue}
        }
      }
    })
  }

  readonly updateData = <TData extends any>({
    formId,
    submissionIds,
    data,
  }: {
    formId: KoboId,
    submissionIds: string[],
    data: TData
  }) => {
    // return this.api.patch(`/v2/assets/${formId}/data/${submissionId}/`, {
    //   body: {
    //     'start': new Date().toISOString(),
    //   }
    // })
    return this.api.patch(`/v2/assets/${formId}/data/bulk/`, {
      // qs: {format: 'json'},
      body: {
        payload: {
          submission_ids: submissionIds,
          data,
        }
      }
    })
  }

  readonly getFormByVersion = (formId: KoboId, versionId: string) => {
    return this.api.get<KoboApiForm>(`/v2/assets/${formId}/versions/${versionId}`)
  }

  readonly getAnswersByVersion = (formId: KoboId, versionId: string) => {
    return this.api.get<KoboApiForm>(`/v2/assets/${formId}/versions/${versionId}/data.json`)
  }

  readonly getAnswersRaw = (form: KoboId, params: KoboAnswerParams = {}) => {
    const start = map(params.start, _ => KoboSdk.makeDateFilter('start', 'gte', _))
    const end = map(params.end, _ => KoboSdk.makeDateFilter('start', 'lte', _))
    const query = start && end ? {'$and': [start, end]} : start ?? end
    return this.api.get<KoboApiList<ApiKoboAnswerMetaData & Record<string, any>>>(`/v2/assets/${form}/data`, {qs: {query: query ? JSON.stringify(query) : undefined}})
  }

  readonly getAnswers = (form: KoboId, params: KoboAnswerParams = {}): Promise<ApiPaginate<KoboAnswer>> => {
    return this.getAnswersRaw(form, params)
      .then(res => {
        return ({
          ...res,
          results: res.results
            .map(KoboAnswerUtils.mapAnswer)
            .sort((a, b) => a.submissionTime.getTime() - b.submissionTime.getTime())
        })
      })
      .then(koboToApiPaginate)
  }

  private readonly removeGroup = () => {

  }

  readonly getForms = () => {
    // return this.api.get(`/v2/assets/`)
    return this.api.get<KoboApiList<KoboForm>>(`/v2/assets/?q=asset_type%3Asurvey&limit=200`)
  }

  readonly getAttachement = (path: string) => {
    // TODO Use this.api
    return axios.create().request({
      url: appConf.kobo.url + '/api' + path,
      method: 'GET',
      headers: {
        Authorization: KoboSdk.makeAuthorizationHeader(appConf.kobo.token),
      },
      responseType: 'arraybuffer',
    }).then(_ => _.data)
    // return this.api.get(path, {
    //   responseType: 'arraybuffer',
    // })
  }
}
