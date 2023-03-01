import {Id} from '../../type/Common'
import {ApiClient} from '../../client/ApiClient'
import {KoboAnswer, KoboAnswerParams, KoboApiList} from './type/KoboAnswer'
import {toYYYYMMDD} from '../../utils/Common'

export class KoboClient {
  constructor(private api: ApiClient) {
  }

  static readonly parseDate = toYYYYMMDD

  static readonly genAuthorizationHeader = (token: string) => `Token ${token}`
  
  readonly getAnswers = (formId: Id, params?: KoboAnswerParams): Promise<KoboApiList<KoboAnswer>> => {
    let query = {}
    if (params?.start && params.end) {
      query = {
        '$and': [
          // {_submission_time: {'$gt': KoboClient.parseDate(params.start)}},
          // {_submission_time: {'$lt': KoboClient.parseDate(params.end)}},
          {_submission_time: {'$gt': KoboClient.parseDate(params.start)}},
          {_submission_time: {'$lt': KoboClient.parseDate(params.end)}},
        ]
      }
    } else if (params?.start) {
      query = {_submission_time: {'$gt': KoboClient.parseDate(params.start)}}
    } else if (params?.end) {
      query = {_submission_time: {'$lt': KoboClient.parseDate(params.end)}}
    }
    // const query = JSON.stringify({
    //   ...(params?.start || params?.end) && {
    //     _submission_time: {
    //       ...params?.start && {'$gt': KoboClient.parseDate(params.start)},
    //       ...params?.end && {'lt': KoboClient.parseDate(params.end)},
    //     },
    //   },
    // })
    return this.api.get<KoboApiList<KoboAnswer>>(
      `/v2/assets/${formId}/data.json`,
      {qs: {query: JSON.stringify(query)}}
    )
      .then(res => {
          const results = res.results.map(_ => ({
            ..._,
            start: new Date(_.start),
            end: new Date(_.end),
            _submission_time: new Date(_._submission_time),
          })) as KoboAnswer[]
          return {
            ...res,
            results
          }
        }
      )
  }
}
