import {ApiPaginate, UUID} from '../../../../core/Type'

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

export interface KoboAnswerMetaData {
  // _id: number,
  // 'formhub/uuid': string,
  start: Date,
  end: Date,
  // __version__: string,
  // 'meta/instanceID': string,
  // _xform_id_string: string,
  _uuid: UUID,
  // _attachments: KoboAnswerAttachements[],
  // _status: KoboAnswerStatus,
  // _geolocation: KoboAnswerGeolocation[],
  _submission_time: Date,
  // _tags: KoboAnswerTags[],
  // _notes: KoboAnswerNotes[],
  // _validation_status: any,
  // _submitted_by: any
}

// export interface KoboAnswer extends KoboAnswerMetaData {
//   [key: string]: string
// }
export type KoboAnswer = (KoboAnswerMetaData & {[key: string]: any})

export interface KoboApiList<T> {
  count: number,
  results: T[]
}

export class KoboAnswerUtils {

  static readonly mapAnswersMetaData = (k: ApiPaginate<Record<keyof KoboAnswerMetaData, any>>): ApiPaginate<KoboAnswerMetaData> => {
    return {
      ...k,
      data: k.data.map(KoboAnswerUtils.mapAnswerMetaData)
    }
  }
  
  static readonly mapAnswerMetaData = (k: Record<keyof KoboAnswerMetaData, any>): KoboAnswerMetaData => {
    return {
      ...k,
      start: new Date(k.start),
      end: new Date(k.end),
      _submission_time: new Date(k._submission_time),
    }
  }
  
  /**
   * It's verbose and unoptimized but it's type safe. If field of KoboAnswerMetaData are changed,
   * compiler will throw an error
   */
  static readonly extractAnswerFromMetadata = (a : KoboAnswer) => {
    const dataToExtract: (keyof KoboAnswerMetaData)[] = [
      // '_id',
      // 'formhub/uuid',
      'start',
      'end',
      // '__version__',
      // 'meta/instanceID',
      // '_xform_id_string',
      '_uuid',
      // '_attachments',
      // '_status',
      // '_geolocation',
      '_submission_time',
      // '_tags',
      // '_notes',
      // '_validation_status',
      // '_submitted_by',
    ]
    // const {
    //  
    // }
  }
}
