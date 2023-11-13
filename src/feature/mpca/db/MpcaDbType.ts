import {OblastISO, OblastName} from '../../../core/oblastIndex'
import {DrcDonor, DrcOffice, DrcProject} from '../../../core/DrcUa'
import {KoboAttachment} from '../../connector/kobo/KoboClient/type/KoboAnswer'
import {WfpDeduplication} from '../../wfpDeduplication/WfpDeduplicationType'
import {Bn_Re} from '../../../script/output/kobo/Bn_Re/Bn_Re'
import {MaybePeriod, Person} from '../../../core/Type'
import {koboFormsId} from '../../../core/conf/KoboFormsId'


// export enum MpcaRowSource {
//   [koboFormsId.prod.bn_RapidResponse] = 'RapidResponseMechansim',
//   CashForRent = 'CashForRent',
//   CashForRepairRegistration = 'CashForRepairRegistration',
//   BasicNeedRegistration = 'BasicNeedRegistration',
//   OldBNRE = 'OldBNRE',
//   v0_mpcaRegNewShort = 'v0_mpcaRegNewShort',
//   v0_mpcaReg = 'v0_mpcaReg',
//   v0_mpcaRegNoSig = 'v0_mpcaRegNoSig',
//   v0_mpcaRegESign = 'v0_mpcaRegESign',
// }

const buildEnumFromObject = <T extends keyof typeof koboFormsId.prod>(t: T[]): { [K in T]: K } => {
  return t.reduce((acc, curr) => ({...acc, [curr]: curr}), {} as any)
}

const builtEnum = buildEnumFromObject([
  'bn_rapidResponse',
  'shelter_cashForRepair',
  'bn_1_mpcaNfi',
  'bn_re',
  'bn_0_mpcaReg',
  'bn_0_mpcaRegESign',
  'bn_0_mpcaRegNoSig',
  'bn_0_mpcaRegNewShort',
])

export type MpcaRowSource = keyof typeof builtEnum

export enum MpcaProgram {
  CashForRent = 'CashForRent',
  CashForEducation = 'CashForEducation',
  MPCA = 'MPCA',
}

export interface MpcaDataFilter extends MaybePeriod{
  office?: DrcOffice[]
  source?: MpcaRowSource[]
}

export interface MpcaDataTag {
  projects?: DrcProject[]
  committed?: Date
}

export interface MpcaEntity {
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