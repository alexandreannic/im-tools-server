import {WfpDeduplicationOffice} from '../wfpDeduplication/WfpDeduplicationType'
import {KoboId} from '../connector/kobo/KoboClient/type/KoboAnswer'

export enum AppFeature {
  mpca = 'mpca',
  wfp_deduplication = 'wfp_deduplication',
  database = 'database',
  activity_info = 'activity_info',
}

interface AccessWfpDeduplication {
  office: WfpDeduplicationOffice
}

export interface DatabaseFeatureParams {
  koboFormId: KoboId,
  filters?: Record<string, string[]>
}

export class DatabaseFeatureParams {
  static readonly create = (_: DatabaseFeatureParams): any => _
}