import {OblastISO, OblastName} from '../../../core/oblastIndex'
import {DrcDonor, DrcOffice, DrcProject} from '../../../core/DrcUa'
import {KoboAttachment} from '../../connector/kobo/KoboClient/type/KoboAnswer'
import {WfpDeduplication} from '../../wfpDeduplication/WfpDeduplicationType'
import {Bn_Re} from '../../../script/output/kobo/Bn_Re/Bn_Re'
import {Person} from '../../../core/Type'

export enum MpcaRowSource {
  RapidResponseMechansim = 'RapidResponseMechansim',
  CashForRent = 'CashForRent',
  CashForRepairRegistration = 'CashForRepairRegistration',
  BasicNeedRegistration = 'BasicNeedRegistration',
  OldBNRE = 'OldBNRE',
  v0_mpcaRegNewShort = 'v0_mpcaRegNewShort',
  v0_mpcaReg = 'v0_mpcaReg',
  v0_mpcaRegNoSig = 'v0_mpcaRegNoSig',
  v0_mpcaRegESign = 'v0_mpcaRegESign',
}

export enum MpcaProgram {
  CashForRent = 'CashForRent',
  CashForEducation = 'CashForEducation',
  MPCA = 'MPCA',
}

export interface MpcaDataFilter {
  start?: Date
  end?: Date
  office?: DrcOffice[]
  source?: MpcaRowSource[]
}

export interface MpcaDataTag {
  projects?: DrcProject[]
  committed?: Date
}

export interface MpcaData {
  id: string
  source: MpcaRowSource
  office?: DrcOffice
  oblast?: OblastName
  raion?: string
  hromada?: string
  oblastIso?: OblastISO
  date: Date
  prog?: MpcaProgram[]
  donor?: DrcDonor
  project?: DrcProject
  // finalProject?: DrcProject
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
  persons?: Person[]
  tags?: MpcaDataTag
  // girls?: number
  // boys?: number
  // men?: number
  // women?: number
}