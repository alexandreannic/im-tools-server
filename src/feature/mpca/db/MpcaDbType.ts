import {OblastISO, OblastName} from '../../../core/oblastIndex'
import {DrcDonor, DrcOffice, DrcProject} from '../../../core/DrcType'
import {Bn_Re} from '../../../db/generatedKoboInterface/Bn_Re/Bn_Re'
import {KoboAttachment} from '../../connector/kobo/KoboClient/type/KoboAnswer'
import {WfpDeduplication} from '../../wfpDeduplication/WfpDeduplicationType'

export enum MpcaRowSource {
  RRM = 'RRM',
  CashForRent = 'CashForRent',
  CashForRepairRegistration = 'CashForRepairRegistration',
  BNRE = 'BNRE',
  OldBNRE = 'OldBNRE',
}

export enum MpcaProgram {
  CashForRent = 'CashForRent',
  CashForEducation = 'CashForEducation',
  MPCA = 'MPCA',
}

export interface MpcaRow {
  id: string
  source: MpcaRowSource
  office?: DrcOffice
  oblast?: OblastName
  oblastIso?: OblastISO
  date: Date
  prog?: MpcaProgram[]
  donor?: DrcDonor
  project?: DrcProject
  amountUahSupposed?: number
  amountUahDedup?: number
  amountUahFinal?: number
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
  girls?: number
  boys?: number
  men?: number
  women?: number
}