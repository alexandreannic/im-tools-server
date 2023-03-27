import {makeid} from '../../utils/Common'

export interface Form {
  resources: {
    id: AIID
    parentId: AIID
    label: string
    type: 'FORM',
    visibility: 'PRIVATE'
  }[]
}

export type AIID = string

export type FormDescs = Record<AIID, FormDesc>

export type FormDesc = {
  id: AIID
  permissions: {
    viewFilter?: string,
  },
  schema: {
    elements: {
      id: AIID
      code: string,
      label: string
      description: string
      relevanceCondition: string,
      validationCondition: string,
      required: boolean,
      type: 'subform' | 'reference' | 'enumerated' | 'calculated' | string,
      typeParameters: {
        formId?: AIID,
        cardinality?: 'single'
        range?: [{formId: AIID}]
        // formula?: string
      }
    }[]
  }
}

export interface Database {
  databaseId: string
  label: string
  description: string
  ownerId: string
}

const dbId = 'cbi4e3dlbs86afe2'
export const formId = {
  general_protection_rmm: 'cas3n26ldsu5aea5',
  activities_and_people: 'cy3vehlldsu5aeb6'
}

type Inputs = Record<keyof typeof inputs, any>
const inputs = {
  ID: {id: 'ci8ugsnldt0vh8z1c', label: 'ID'},
  // {id: 'cmlymv8ldsuaebzb', optionsId: 'cnbsrhflbs8advx9', label: 'Implementing Partner 1'},
  // {id: 'c4iibgxldsubqwqc', optionsId: 'cnbsrhflbs8advx9', label: 'Implementing Partner 2'},
  'Partner Organization': {id: 'ci607odlbs8w4pe2', optionsId: 'cnbsrhflbs8advx9', label: 'Partner Organization'},
  'Plan Code': {id: 'cu3do47ldu8x1eg4m', optionsId: 'co99k7plbs8ffnpn', label: 'Plan Code'},
  'Oblast': {id: 'cva2znrle7pd83vd', optionsId: 'ca0ivw8lda77nm46', label: 'Oblast'},
  'Raion': {id: 'cb7h23tle7pdocme', optionsId: 'cj7i9fldackojz7', label: 'Raion'},
  'Hromada': {id: 'cqai21ple7pe0bif', optionsId: 'co749hfldacpjlc8', label: 'Hromada'},
  // 'Settlement': {id: 'cir5yiule7peev5g', optionsId: 'c499sexlbuo3syc6e', label: 'Settlement'},
  // 'Collective Centre': {id: 'cpn7bf1le7pevjuh', optionsId: 'cb669lfldbf529g3', label: 'Collective Centre'},
  // 'Response Theme': {id: 'cfzh1whldu8r0u84k', label: 'Response Theme'},
  'Reporting Month': {id: 'cmxllh3ldsuvom9g', label: 'Reporting Month'},
  'Population Group': {id: 'c19j8p9ldsv4qa3o', optionsId: 'c2oj5l1ldad50qv2', label: 'Population Group'},
  'Protection Indicators': {id: 'c79be77ldswj831t', optionsId: 'c79be77ldswj831t', label: 'Protection Indicators'},
  'Protection Sub-Indicators': {id: 'ccli5mkldt1r8lb1d', optionsId: 'cvjz2klldswbsqzu', label: 'Protection Sub-Indicators'},
  'Total Individuals Reached': {id: 'cgwjgg2ldsx1nzsv', label: 'Total Individuals Reached'},
  'Girls': {id: 'c62l7s0lbs8mvnx3b', label: 'Girls'},
  'Boys': {id: 'cqvizd5lbs8mvnx3d', label: 'Boys'},
  'Adult Women': {id: 'ceij8s2lbs8mvnx3f', label: 'Adult Women'},
  'Adult Men': {id: 'cpbkputlbs8mvny3h', label: 'Adult Men'},
  'Elderly Women': {id: 'cpkkgqulbs8mvny3j', label: 'Elderly Women'},
  'Elderly Men': {id: 'cmyfyd8lbs8mvny3l', label: 'Elderly Men'},
  'Achievement (non-individual)': {id: 'cn37fnmlbs8mvny3r', label: 'Achievement (non-individual)'},
  'People with disability': {id: 'cj41459lbs8mvny3n', label: 'People with disability'},
  // {id: 'cev98hrldvi6g825', label: '# of individuals who received support to master stress-management strategies'},
  // {id: 'c26bbgoldvi7vq06', label: '# of individuals received Problem Management Plus intervention'},
  // {id: 'cb7lequldviae4r7', label: '# of individuals received CETA intervention'},
  // {id: 'ccjskp9ldviczzt8', label: '# of individuals received other PSS interventions'},
  // {id: 'cxv8koaldviffeg9', label: '# of individuals who received support to Master Stress-Management Strategies'},
  // {id: 'c9qcv7fldvih1bca', label: '# of individuals received Problem Management Plus intervention'},
  // {id: 'c2khmc8ldviio99b', label: '# of individuals received CETA intervention'},
  // {id: 'cucpuskldvik1mpc', label: '# of individuals received other PSS interventions'}
}

const makeForm = (inputs: Omit<Inputs, 'ID' | 'Partner Organization'>): Inputs => {
  return {
    'ID': makeid(16),
    'Partner Organization': 'cr4xx3dlbs86w9y2:cv9umq8lehiq43f103',
    'Plan Code': '',
    'Oblast': 'clo1x4vlebrkckc4',
    'Raion': 'cy1jystlecp1fu23r',
    'Hromada': 'cyqcr4mlebsue991bk',
    // 'Settlement': '',
    // 'Collective Centre': '',
    // 'Response Theme': '',
    'Reporting Month': '2023-03',
    'Population Group': '',
    'Protection Indicators': '',
    'Protection Sub-Indicators': '',
    'Total Individuals Reached': 200000,
    'Girls': 100000,
    'Boys': 100000,
    'Adult Women': 0,
    'Adult Men': 0,
    'Elderly Women': 0,
    'Elderly Men': 0,
    'Achievement (non-individual)': 12,
    'People with disability': 0,
  }
}

interface AIHHForms {
  'ID': string,
  'Partner Organization': string
  'Implementing Partner 1': string
  'Implementing Partner 2': string
  'Plan Code': string
  'Oblast': string
  'Raion': string
  'Hromada': string
  'Settlement': string
  'Collective Centre': string
  'Response Theme': string
  'Reporting Month': string
  'Population Group': string
  'Protection Indicators': string
  'Protection Sub-Indicators': string
  'Total Individuals Reached': string
  'Girls': string
  'Boys': string
  'Adult Women': string
  'Adult Men': string
  'Elderly Women': string
  'Elderly Men': string
  'Achievement (non-individual)': string
  'People with disability': string
}


// form/c3vbxtgldsw1as42/record/cntvm8fle4efhhpn
const activities = {
  c6nflpglemqkd9h4: 'HRP2023',
  c16tlt9ldsw73ck4: 'Моніторинг у сфері захисту на рівні домогосподарств',
  cbp0y9bldswb0lxm: 'c2lllo9ldswb0lxl',
  cfsnsvdldswa105f: 'c173cqnldswa105e',
  cgtjh8zldvhgzn629: 'cc66lm4ldvhhbit2a',
  cjarsddldsw9l9z9: 'Особи',
  ck5orstldsw7jfn5: '# of persons reached through protection monitoring',
  cmees1vlemqj5iw2: 'GP108',
  cmyo72klemqjrwp3: 'GP108-019',
  cnebbh7ldsw8pu58: 'Individual',
  co2cveqldsw8bnr7: 'ALL',
  cqn8nk6ldsw7vr26: 'кількість осіб, охоплених моніторингом захисту',
  cvjz2klldswbsqzu: 'cq04ujnldswbsqzt',
  cykkilxldsw1s0h3: 'Protection Monitoring at Household Level',
}

export const columnsListMap = {
  cr4xx3dlbs86w9y2: {
    listId: 'cnbsrhflbs8advx9',
    label: 'partnerOrg',
  },
  cqnfuewldtzuhuf2: {
    listId: 'co99k7plbs8ffnpn',
    label: 'planCodeActivity',
  },
  cg7v61llbunvy9t9: {
    listId: 'ca0ivw8lda77nm46',
    label: 'oblast',
  },
  cjy8nbnlbunzcnh1h: {
    listId: 'cj7i9fldackojz7',
    label: 'raion',
  },
  c700rjplbuo1fjq5m: {
    listId: 'co749hfldacpjlc8',
    label: 'hromada',
  },
  cqjd0o4ld4hbyo12: {
    listId: 'c2oj5l1ldad50qv2',
    label: 'populationGroup',
  },
  c3vbxtgldsw1as42: {
    listId: 'c79be77ldswj831t', // ??
    label: 'protectionIndicators',
  },
}
