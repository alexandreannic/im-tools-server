import {DrcDonor, DrcProject} from '../../../core/DrcType'
import {Bn_Re} from '../../../db/generatedKoboInterface/Bn_Re/Bn_Re'
import {KoboAttachment} from '../../connector/kobo/KoboClient/type/KoboAnswer'
import {WfpDeduplication} from '../../wfpDeduplication/WfpDeduplicationType'

export enum MpcaDbRowSource {
  RRM = 'RRM',
  CFR = 'CFR',
  BNRE = 'BNRE',
  Old_form = 'Old_form',
}

export enum MpcaDbProgram {
  CashForRent = 'CashForRent',
  CashForEducation = 'CashForEducation',
  MPCA = 'MPCA',
}

export interface MpcaRow {
  id: number
  source: MpcaDbRowSource
  date: Date
  prog?: MpcaDbProgram[]
  donor?: DrcDonor
  project?: DrcProject
  amountUahSupposed?: number
  amountUahAfterDedup?: number
  benefStatus?: Bn_Re['ben_det_res_stat']
  lastName?: string
  firstName?: string
  patronyme?: string
  hhSize?: number
  passportSerie?: string
  passportNum?: string
  taxId?: string
  taxIdFileName?: string
  taxIdFileURL?: KoboAttachment
  idFileName?: string
  idFileURL?: KoboAttachment
  phone?: string
  deduplication?: WfpDeduplication
}