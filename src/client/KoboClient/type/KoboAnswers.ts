export interface KoboAnswerParams {
  [key: string]: string
}

export interface KoboAnswerStatus {
  SubmittedViaWeb: 'submitted_via_web'
}

export type KoboAnswerAttachements = any
export type KoboAnswerGeolocation = any
export type KoboAnswerTags = any
export type KoboAnswerNotes = any

export interface KoboAnswerMetaData {
  _id: number,
  'formhub/uuid': string,
  start: Date,
  end: Date,
  __version__: string,
  'meta/instanceID': string,
  _xform_id_string: string,
  _uuid: string,
  _attachments: KoboAnswerAttachements[],
  _status: KoboAnswerStatus,
  _geolocation: KoboAnswerGeolocation[],
  _submission_time: Date,
  _tags: KoboAnswerTags[],
  _notes: KoboAnswerNotes[],
  _validation_status: any,
  _submitted_by: any
}

export type KoboAnswer = (KoboAnswerMetaData & {[key: string]: string})

export interface KoboAnswers {
  count: number,
  results: KoboAnswer[]
}
