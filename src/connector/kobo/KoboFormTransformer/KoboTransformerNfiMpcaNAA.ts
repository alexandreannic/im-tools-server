import {KoboTransformer} from './KoboTransformer'
import {koboFormsId} from '../../../conf/KoboFormsId'

export interface KoboTransformerNfiMcpaNAA {
  oblast?: string
  kits: {
    HKMV: number
    HKF: number
    BLN: number
    WKB1: number
    WKB2: number
    WKB3: number
    WKB4: number
    BK1: number
    BK2: number
    BK3: number
    BK4: number
  }
  kitsTotalCost: {
    HKMV: number
    HKF: number
    BLN: number
    Allkits: number
  }
}

export const koboTransformerNfiMcpaNaa = new KoboTransformer<KoboTransformerNfiMcpaNAA>(
  koboFormsId.prod.fcrmMpcaNAA, {
    kits: {
      HKMV: "module_eligibility_screening_001/group_un9ff13_header/HKMV_",
      HKF: "module_eligibility_screening_001/group_un9ff13_header/HKF_",
      BLN: "module_eligibility_screening_001/group_un9ff13_header/BLN_",
      WKB1: "module_eligibility_screening_001/group_un9ff13_header/WKB1_How_many",
      WKB2: "module_eligibility_screening_001/group_un9ff13_header/WKB2_How_many",
      WKB3: "module_eligibility_screening_001/group_un9ff13_header/WKB3_How_many",
      WKB4: "module_eligibility_screening_001/group_un9ff13_header/WKB4_How_many",
      BK1: "module_eligibility_screening_001/group_un9ff13_header/BK1_How_many",
      BK2: "module_eligibility_screening_001/group_un9ff13_header/BK2_How_many",
      BK3: "module_eligibility_screening_001/group_un9ff13_header/BK3_How_many",
      BK4: "module_eligibility_screening_001/group_un9ff13_header/BK4_How_many",
    },
    kitsTotalCost: {
      HKMV: "module_eligibility_screening_001/group_un9ff13_header/Total_Cost_HKMV",
      HKF: "module_eligibility_screening_001/group_un9ff13_header/Total_Cost_HKF",
      BLN: "module_eligibility_screening_001/group_un9ff13_header/Total_Cost_BLN",
      Allkits: "module_eligibility_screening_001/group_un9ff13_header/Total_Cost_Allkits",
    },
  },
  _ => {
    return {
      kits: {
        HKMV: Number(_.kits.HKMV ?? 0),
        HKF: Number(_.kits.HKF ?? 0),
        BLN: Number(_.kits.BLN ?? 0),
        WKB1: Number(_.kits.WKB1 ?? 0),
        WKB2: Number(_.kits.WKB2 ?? 0),
        WKB3: Number(_.kits.WKB3 ?? 0),
        WKB4: Number(_.kits.WKB4 ?? 0),
        BK1: Number(_.kits.BK1 ?? 0),
        BK2: Number(_.kits.BK2 ?? 0),
        BK3: Number(_.kits.BK3 ?? 0),
        BK4: Number(_.kits.BK4 ?? 0),
      },
      kitsTotalCost: {
        HKMV: Number(_.kitsTotalCost.HKMV ?? 0),
        HKF: Number(_.kitsTotalCost.HKF ?? 0),
        BLN: Number(_.kitsTotalCost.BLN ?? 0),
        Allkits: Number(_.kitsTotalCost.Allkits ?? 0),
      }
    }
  }
)

