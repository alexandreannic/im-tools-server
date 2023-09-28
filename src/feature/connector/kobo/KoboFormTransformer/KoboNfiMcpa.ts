import {mapMultipleChoices} from '../../../../helper/Utils'
import {KoboTransformer} from './KoboTransformer'
import {koboFormsId} from '../../../../core/conf/KoboFormsId'
import {KoboAnswer, KoboAnswerMetaData} from '../KoboClient/type/KoboAnswer'

export enum Program {
  MPCA = 'MPCA',
  NFI = 'NFI',
  CashForRent = 'CashForRent',
}

export enum Status {
  IPD = 'IDP'
}

export const nfis: (keyof NFIs)[] = [
  'HKMV',
  'HKF',
  'NFKF',
  'KS',
  'BK1',
  'BK2',
  'BK3',
  'BK4',
  'WKB1',
  'WKB2',
  'WKB3',
  'WKB4',
  'BLN',
  'SL',
]

export const babyKits: (keyof NFIs)[] = [
  'BK1',
  'BK2',
  'BK3',
  'BK4',
  'WKB1',
  'WKB2',
  'WKB3',
  'WKB4',
]

export const winterizationKits: (keyof NFIs)[] = [
  'WKB1',
  'WKB2',
  'WKB3',
  'WKB4',
  'BLN',
]

export const nfisTranslations: NFIs<string> = {
  HKMV: 'Family hygiene kit for IDPs on the move',
  HKF: 'Hygiene kit',
  NFKF: 'Family NFI Kit',
  KS: 'Family kitchen set',
  BK1: 'Baby Hygiene Kit 1',
  BK2: 'Baby Hygiene Kit 2',
  BK3: 'Baby Hygiene Kit 3',
  BK4: 'Baby Hygiene Kit 4',
  WKB1: 'Baby Winterization Kit 1',
  WKB2: 'Baby Winterization Kit 2',
  WKB3: 'Baby Winterization Kit 3',
  WKB4: 'Baby Winterization Kit 4',
  BLN: 'High Thermal Blankets',
  SL: 'Solar lamps',
}

export interface NFIs<T = any> {
  // Family hygiene kit for IDPs on the move
  HKMV: T
  // Hygiene kit
  HKF: T
  // Family NFI Kit
  NFKF: T
  // Family kitchen set
  KS: T
  // Baby Hygiene Kit 1
  BK1: T
  // Baby Hygiene Kit 2
  BK2: T
  // Baby Hygiene Kit 3
  BK3: T
  // Baby Hygiene Kit 4
  BK4: T
  // Baby Winterization Kit 1
  WKB1: T
  // Baby Winterization Kit 2
  WKB2: T
  // Baby Winterization Kit 3
  WKB3: T
  // Baby Winterization Kit 4
  WKB4: T
  // High Thermal Blankets
  BLN: T
  // Solar lamps
  SL: T
}

export interface KoboNfiMcpa extends KoboAnswerMetaData {
  oblast?: string
  program?: Program[]
  status?: Status
  houseHoldSize: number
  kits: Partial<NFIs<number>>
  // Only available for full form
  kitsCheck?: boolean
  // kitsTotalCost: NFIs<number | undefined> & {allKits: number | undefined}
}

export const mapNfisCount = (n: Partial<NFIs<string>>): NFIs<number> => {
  return nfis.reduce((acc, nfi) => ({
    ...acc,
    [nfi]: Number(n[nfi] ?? 0),
  }), {} as any)
}

export const koboTransformerNfiMcpa = new KoboTransformer<KoboNfiMcpa>(
  koboFormsId.prod.bn_OldMpcaNfi,
  {
    oblast: 'module_eligibility_screening/oblast',
    program: 'group_xp17b32/Programme',
    status: 'module_eligibility_screening/status',
    houseHoldSize: 'module_eligibility_screening/group_kj9wg97/Total_Family',
    kits: {
      HKMV: 'module_eligibility_screening_001/group_un9ff13_header/HKMV_',
      HKF: 'module_eligibility_screening_001/group_un9ff13_header/HKF_',
      NFKF: 'module_eligibility_screening_001/group_un9ff13_header/NFKF_NFI_',
      KS: 'module_eligibility_screening_001/group_un9ff13_header/KS_',
      BK1: 'module_eligibility_screening_001/group_un9ff13_header/BK_Baby_Kit_',
      BK2: 'module_eligibility_screening_001/group_un9ff13_header/BK_Baby_Kit',
      BK3: 'module_eligibility_screening_001/group_un9ff13_header/BK_Baby_Kit_001',
      BK4: 'module_eligibility_screening_001/group_un9ff13_header/BK_Baby_Kit_002',
      WKB1: 'module_eligibility_screening_001/group_un9ff13_header/WKB1_1_',
      WKB2: 'module_eligibility_screening_001/group_un9ff13_header/WKB2_2_',
      WKB3: 'module_eligibility_screening_001/group_un9ff13_header/WKB3_3_',
      WKB4: 'module_eligibility_screening_001/group_un9ff13_header/WKB4_4_',
      BLN: 'module_eligibility_screening_001/group_un9ff13_header/BLN_',
      SL: 'module_eligibility_screening_001/group_un9ff13_header/BLN',
    },
    kitsCheck: 'module_eligibility_screening_001/group_checks/Kits_Check'
  },
  _ => {
    return {
      ..._,
      status: {
        'status_idp': Status.IPD
      }[_.status],
      program: mapMultipleChoices(_.program, {
        'nfi': Program.NFI,
        'mpca': Program.MPCA,
        'cash_for_rent': Program.CashForRent,
      }, [Program.NFI]),
      houseHoldSize: Number(_.houseHoldSize ?? 0),
      kits: mapNfisCount(_.kits),
    }
  }
)

