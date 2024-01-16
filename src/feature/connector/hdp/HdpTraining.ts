import {OblastIndex, OblastName} from '../../../core/oblastIndex'

export interface HdpTraining {
  oblast: OblastName
  raion: string
  hromada: string
  code: string
}

export interface HdpTrainingParticipant {

}

export class HdpTrainingHelper {

  static readonly map = (_: any) => {
    return {
      oblast: OblastIndex.byIso(_.admin1_main_code).name,
    }
  }
}