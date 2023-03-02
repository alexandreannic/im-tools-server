import {mapMultipleChoices} from '../../utils/Common'
import {KoboTransformer} from './KoboTransformer'
import {koboFormsId} from '../../conf/KoboFormsId'

export enum Program {
  MPCA = 'MPCA',
  NFI = 'NFI',
  CashForRent = 'CashForRent',
}

export enum Status {
  IPD = 'IDP'
}

export interface KoboTransformerNfiMcpa {
  oblast?: string
  program?: Program[]
  status?: Status
  houseHoldSize: number
  kits: {
    HKMV: number
    HKF: number
    NFKF_NFI: number
    KS: number
    BK1: number
    BK2: number
    BK3: number
    BK4: number
    WKB1: number
    WKB2: number
    WKB3: number
    WKB4: number
    BLN: number
    SL: number
  }
  kitsTotal: {
    Kits: number
    BBKits: number
    BBKits_Hygiene: number
    BBKits_Winter: number
  }
  kitsTotalCost: {
    HKMV: number
    HKF: number
    NFKF: number
    KS: number
    BK: number
    WKB1: number
    WKB2: number
    WKB3: number
    WKB4: number
    BLN: number
    Allkits: number
  }
  kitsCheck?: boolean
}

export const koboTransformerNfiMcpa = new KoboTransformer<KoboTransformerNfiMcpa>(
  koboFormsId.prod.fcrmMpca, {
    oblast: 'module_eligibility_screening/oblast',
    program: 'group_xp17b32/Programme',
    status: 'module_eligibility_screening/status',
    houseHoldSize: 'module_eligibility_screening/group_kj9wg97/Total_Family',
    kits: {
      HKMV: 'module_eligibility_screening_001/group_un9ff13_header/HKMV_',
      HKF: 'module_eligibility_screening_001/group_un9ff13_header/HKF_',
      NFKF_NFI: 'module_eligibility_screening_001/group_un9ff13_header/NFKF_NFI_',
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
    kitsTotal: {
      Kits: 'module_eligibility_screening_001/group_un9ff13_header/Total_Kits',
      BBKits: 'module_eligibility_screening_001/group_un9ff13_header/Total_BBKits',
      BBKits_Hygiene: 'module_eligibility_screening_001/group_un9ff13_header/Total_BBKits_Hygiene',
      BBKits_Winter: 'module_eligibility_screening_001/group_un9ff13_header/Total_BBKits_Winter',
    },
    kitsTotalCost: {
      HKMV: 'module_eligibility_screening_001/group_un9ff13_header/Total_Cost_HKMV',
      HKF: 'module_eligibility_screening_001/group_un9ff13_header/Total_Cost_HKF',
      NFKF: 'module_eligibility_screening_001/group_un9ff13_header/Total_Cost_NFKF',
      KS: 'module_eligibility_screening_001/group_un9ff13_header/Total_Cost_KS',
      BK: 'module_eligibility_screening_001/group_un9ff13_header/Total_Cost_BK',
      WKB1: 'module_eligibility_screening_001/group_un9ff13_header/Total_Cost_WKB1',
      WKB2: 'module_eligibility_screening_001/group_un9ff13_header/Total_Cost_WKB2',
      WKB3: 'module_eligibility_screening_001/group_un9ff13_header/Total_Cost_WKB3',
      WKB4: 'module_eligibility_screening_001/group_un9ff13_header/Total_Cost_WKB4',
      BLN: 'module_eligibility_screening_001/group_un9ff13_header/Total_Cost_BLN',
      Allkits: 'module_eligibility_screening_001/group_un9ff13_header/Total_Cost_Allkits',
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
      }),
      houseHoldSize: Number(_.houseHoldSize ?? 0),
      kits: {
        HKMV: Number(_.kits?.HKMV ?? 0),
        HKF: Number(_.kits?.HKF ?? 0),
        NFKF_NFI: Number(_.kits?.NFKF_NFI ?? 0),
        KS: Number(_.kits?.KS ?? 0),
        BK1: Number(_.kits?.BK1 ?? 0),
        BK2: Number(_.kits?.BK2 ?? 0),
        BK3: Number(_.kits?.BK3 ?? 0),
        BK4: Number(_.kits?.BK4 ?? 0),
        WKB1: Number(_.kits?.WKB1 ?? 0),
        WKB2: Number(_.kits?.WKB2 ?? 0),
        WKB3: Number(_.kits?.WKB3 ?? 0),
        WKB4: Number(_.kits?.WKB4 ?? 0),
        BLN: Number(_.kits?.BLN ?? 0),
        SL: Number(_.kits?.SL ?? 0),
      },
      kitsTotal: {
        Kits: Number(_.kitsTotal?.Kits ?? 0),
        BBKits: Number(_.kitsTotal?.BBKits ?? 0),
        BBKits_Hygiene: Number(_.kitsTotal?.BBKits_Hygiene ?? 0),
        BBKits_Winter: Number(_.kitsTotal?.BBKits_Winter ?? 0),
      },
      kitsTotalCost: {
        HKMV: Number(_.kitsTotalCost?.HKMV ?? 0),
        HKF: Number(_.kitsTotalCost?.HKF ?? 0),
        NFKF: Number(_.kitsTotalCost?.NFKF ?? 0),
        KS: Number(_.kitsTotalCost?.KS ?? 0),
        BK: Number(_.kitsTotalCost?.BK ?? 0),
        WKB1: Number(_.kitsTotalCost?.WKB1 ?? 0),
        WKB2: Number(_.kitsTotalCost?.WKB2 ?? 0),
        WKB3: Number(_.kitsTotalCost?.WKB3 ?? 0),
        WKB4: Number(_.kitsTotalCost?.WKB4 ?? 0),
        BLN: Number(_.kitsTotalCost?.BLN ?? 0),
        Allkits: Number(_.kitsTotalCost?.Allkits ?? 0),
      },
    }
  }
)

