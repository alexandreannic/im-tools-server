import {koboFormsId} from '../../../conf/KoboFormsId'
import {KoboTransformer} from './KoboTransformer'
import {KoboNfiMcpa, mapNfisCount, Program} from './KoboNfiMcpa'

export const koboTransformerNfiMpcaMyko = new KoboTransformer<KoboNfiMcpa>(
  koboFormsId.prod.fcrmMpcaMyko, 
  {
    kits: {
      HKMV: 'module_eligibility_screening_001/group_un9ff13_header/HKMV_',
      HKF: 'module_eligibility_screening_001/group_un9ff13_header/HKF_',
      BLN: 'module_eligibility_screening_001/group_un9ff13_header/BLN_',
      WKB1: 'module_eligibility_screening_001/group_un9ff13_header/WKB1_How_many',
      WKB2: 'module_eligibility_screening_001/group_un9ff13_header/WKB2_How_many',
      WKB3: 'module_eligibility_screening_001/group_un9ff13_header/WKB3_How_many',
      WKB4: 'module_eligibility_screening_001/group_un9ff13_header/WKB4_How_many',
      BK1: 'module_eligibility_screening_001/group_un9ff13_header/BK1_How_many',
      BK2: 'module_eligibility_screening_001/group_un9ff13_header/BK2_How_many',
      BK3: 'module_eligibility_screening_001/group_un9ff13_header/BK3_How_many',
      BK4: 'module_eligibility_screening_001/group_un9ff13_header/BK4_How_many',
    },
  },
  _ => {
    return ({
      ..._,
      oblast: 'Mykolaivska',
      program: [Program.NFI],
      houseHoldSize: Number(_.houseHoldSize ?? 0),
      kits: mapNfisCount(_.kits),
    })
  }
)
