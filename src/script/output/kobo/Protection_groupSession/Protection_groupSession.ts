import {Protection_groupSessionOptions} from './Protection_groupSessionOptions'

type Opt<T extends keyof typeof Protection_groupSessionOptions> = keyof (typeof Protection_groupSessionOptions)[T]

// Form id: a8Tn94arrSaH2FQBhUa9Zo
export interface Protection_groupSession {
  start: string,
  end: string,
  // [date] Date
  date: Date | undefined,
  // [select_one] DRC office
  staff_to_insert_their_DRC_office: undefined | Opt<'staff_to_insert_their_DRC_office'>,
  // [select_one] Staff code (facilitator)
  staff_code: undefined | Opt<'staff_code_001'>,
  // [select_one] Staff code (facilitator)
  staff_code_001: undefined | Opt<'staff_code_001'>,
  // [select_one] Project code
  project: undefined | Opt<'project'>,
  // [select_one] Select oblast
  ben_det_oblast: undefined | Opt<'ben_det_oblast'>,
  // [select_one] Select raion
  ben_det_raion: undefined | string,
  // [select_one] Select hromada
  ben_det_hromada: undefined | string,
  // [text] Specify settlement/village/city neighborhood
  ben_det_hromada_001: string | undefined,
  // [select_one] Location
  location: undefined | Opt<'location'>,
  // [text] If "Other", please specify
  location_other: string | undefined,
  // [select_one] Which topic was the group information session about?
  activity: undefined | Opt<'activity'>,
  // [text] If "Other", please specify
  activity_other: string | undefined,
  // [text] Precise topic
  activity_topic: string | undefined,
  // [select_one] Are they new beneficiaries?
  new_ben: undefined | Opt<'new_ben'>,
  // [integer] If no new beneficiaries, session number
  new_ben_no: number | undefined,
  // [integer] Number of participants
  numb_part: number | undefined,
  // [begin_repeat] Participant
  hh_char_hh_det: {hh_char_hh_det_gender: undefined | Opt<'hh_char_hh_det_gender'> | undefined,hh_char_hh_det_age: number | undefined | undefined,hh_char_hh_det_status: undefined | Opt<'hh_char_hh_det_status'> | undefined}[] | undefined,
  // [text] Comments
  comments: string | undefined,
}