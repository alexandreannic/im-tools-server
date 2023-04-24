import {AiProtectionHhs} from './activity/AiProtectionHhs'

const body: AiProtectionHhs.FormParams = {
  'Plan Code': 'GP-DRC-00001',
  'Oblast': 'Cherkaska_Черкаська',
  'Raion': 'Chernihivska_Чернігівська',
  'Hromada': 'Adzhamska_UA3504001_Аджамська',
  subActivities: [
    {
      'Population Group': 'Returnees',
      'Reporting Month': '2023-02',
      'Total Individuals Reached': 200000,
      'Girls': 100000,
      'Boys': 100000,
      'Adult Women': 0,
      'Adult Men': 0,
      'Elderly Women': 0,
      'Elderly Men': 0,
      'People with disability': 100000,
      // 'Achievement (non-individual)': 0,
    }
  ]
}
