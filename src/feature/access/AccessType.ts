import {KoboId} from '../connector/kobo/KoboClient/type/KoboAnswer'
import {DrcOffice} from '../../core/DrcType'

export enum AppFeature {
  mpca = 'mpca',
  wfp_deduplication = 'wfp_deduplication',
  kobo_database = 'kobo_database',
  activity_info = 'activity_info',
}

interface AccessWfpDeduplication {
  office: DrcOffice
}

export interface KoboDatabaseFeatureParams {
  koboFormId: KoboId,
  filters?: Record<string, string[]>
}

export class KoboDatabaseFeatureParams {
  static readonly create = (_: KoboDatabaseFeatureParams): any => _
}