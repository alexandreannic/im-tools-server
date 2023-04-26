import {ApiPaginate, UUID} from '../../../../../core/Type'
import {Arr} from '@alexandreannic/ts-utils'

export interface KoboAnswerParams {
  start?: Date
  end?: Date
}

export interface KoboAnswerStatus {
  SubmittedViaWeb: 'submitted_via_web'
}

export type KoboAnswerAttachements = any
export type KoboAnswerGeolocation = any
export type KoboAnswerTags = any
export type KoboAnswerNotes = any

export type KoboAnswerMetaData = Pick<ApiKoboAnswerMetaData, 'start' | 'end'> & {
  version: ApiKoboAnswerMetaData['__version__']
  geolocation: ApiKoboAnswerMetaData['_geolocation']
  submissionTime: ApiKoboAnswerMetaData['_submission_time']
  id: ApiKoboAnswerMetaData['_id']
  validationStatus?: 'validation_status_approved'
  validatedBy?: string
  lastValidatedTimestamp?: number
}

interface ApiKoboAnswerMetaData {
  _id: string,
  start: Date,
  end: Date,
  __version__: string,
  _xform_id_string: string,
  _uuid: UUID,
  _attachments: KoboAnswerAttachements[],
  _status: KoboAnswerStatus,
  _geolocation: KoboAnswerGeolocation[],
  _submission_time: Date,
  _tags: KoboAnswerTags[],
  _notes: KoboAnswerNotes[],
  _validation_status: {
    timestamp: number
    uid: 'validation_status_approved'
    by_whom: string
  },
  _submitted_by: any
  // 'formhub/uuid': string,
  // 'meta/instanceID': string,
}

// export interface KoboAnswer extends KoboAnswerMetaData {
//   [key: string]: string
// }
export type KoboAnswer = KoboAnswerMetaData & {answers: Record<string, any>}

export interface KoboApiList<T> {
  count: number,
  results: T[]
}


export class KoboAnswerUtils {

  static readonly mapAnswersMetaData = (k: ApiPaginate<Record<keyof ApiKoboAnswerMetaData, any>>): ApiPaginate<KoboAnswerMetaData> => {
    return {
      ...k,
      data: k.data.map(KoboAnswerUtils.mapAnswer)
    }
  }

  static readonly mapAnswer = (k: ApiKoboAnswerMetaData & Record<string, any>): KoboAnswer => {
    delete k['formhub/uuid']
    delete k['meta/instanceId']
    const {
      _id,
      start,
      end,
      __version__,
      _xform_id_string,
      _uuid,
      _attachments,
      _status,
      _geolocation,
      _submission_time,
      _tags,
      _notes,
      _validation_status,
      _submitted_by,
      ...answers
    } = k
    return {
      // start: start,
      // end: end,
      geolocation: _geolocation,
      start: new Date(start ?? _submission_time),
      end: new Date(end ?? _submission_time),
      submissionTime: new Date(_submission_time),
      version: __version__,
      id: '' + _id,
      validationStatus: _validation_status.uid,
      lastValidatedTimestamp: _validation_status.timestamp,
      validatedBy: _validation_status.by_whom,
      answers: KoboAnswerUtils.removeGroup(answers),
    }
  }

  static readonly removeGroup = <T>(answers: Record<string, T>): Record<string, T> => {
    return Arr(Object.entries(answers)).reduceObject(([k, v]) => [k.replace(/^.*\//, ''), v])
  }
  // static readonly mapAnswerMetaData = (k: Record<keyof KoboAnswerMetaData, any>): KoboAnswerMetaData => {
  //   return {
  //     ...k,
  //     start: new Date(k.start),
  //     end: new Date(k.end),
  //     _submission_time: new Date(k._submission_time),
  //   }
  // }
}

export interface KoboApiVersion {
  uid: string
  url: string
  content_hash: string
  date_deployed: Date
  date_modified: Date
}

// git remote add azure https://drc-imaa-ukr-tools-api.scm.azurewebsites.net/drc-imaa-ukr-tools-api.git