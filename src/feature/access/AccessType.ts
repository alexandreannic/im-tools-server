import {WfpDeduplicationOffice} from '../wfpDeduplication/WfpDeduplicationType'
import {KoboId} from '../connector/kobo/KoboClient/type/KoboAnswer'

export enum AppFeature {
  MPCA = 'mpca',
  WFP_DEDUPLICATION = 'wfp_deduplication',
  DATABASE = 'database',
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