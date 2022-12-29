import {Id} from '../../type/Common'
import {ApiClient} from '../ApiClient'
import {KoboAnswer, KoboAnswerParams, KoboAnswers} from './type/KoboAnswers'

export class KoboClient {
  constructor(private api: ApiClient) {
  }

  readonly getAnswers = (formId: Id, params?: KoboAnswerParams): Promise<KoboAnswers> => {
    return this.api.get<KoboAnswers>(`/v2/assets/${formId}/data.json`, {qs: params})
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
