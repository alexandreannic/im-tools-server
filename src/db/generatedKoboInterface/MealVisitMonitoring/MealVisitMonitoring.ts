import {MealVisitMonitoringOptions} from './MealVisitMonitoringOptions'

type Opt<T extends keyof typeof MealVisitMonitoringOptions> = keyof (typeof MealVisitMonitoringOptions)[T]

export interface MealVisitMonitoring {
  start: string,
  end: string,
  // [select_one] Area
  mda: Opt<'mda'>,
  // [select_one] Responsible office:
  mdro: Opt<'mdro'>,
  // [date] Date of visit
  mdd: Date | undefined,
  // [select_one] Oblast
  md_det_oblast: Opt<'md_det_oblast'>,
  // [select_one] Raion
  md_det_raion: Opt<'md_det_raion'>,
  // [select_one] Hromada
  md_det_hromada: Opt<'md_det_hromada'>,
  // [text] Settlement
  mds: string | undefined,
  // [select_one] MEAL Focal Point
  mdp: Opt<'mdp'>,
  // [select_multiple] DONOR:
  mdd_001: Opt<'mdd_001'>[],
  // [select_multiple] With which team was conducted visit?
  mdt: Opt<'mdt'>[],
  // [text] Name of collective center?
  mdc: string | undefined,
  // [text] Other:
  mdo: string | undefined,
  // [select_multiple] If NFI distribution, then:
  pan: Opt<'pan'>[],
  // [select_one] If EcRec:
  pae: Opt<'pae'>,
  // [select_one] If Shelter:
  pas: Opt<'pas'>,
  // [select_one] If LAU:
  pal: Opt<'pal'>,
  // [select_one] If Protection:
  pap: Opt<'pap'>,
  // [select_one] If EORE:
  pao: Opt<'pao'>,
  // [text] Other:
  paoth: string | undefined,
  // [integer] What percentage of beneficiaries for this activity are male?
  sem: number | undefined,
  // [integer] What percentage of beneficiaries for this activity are female?
  sew: number | undefined,
  // [select_one] If a NFI distribution: Are there priority queues for vulnerable individuals?
  sey: Opt<'visf'>,
  // [text] If no, please explain why:
  set: string | undefined,
  // [select_one] Any concerns to flag?
  sef: Opt<'visf'>,
  // [select_multiple] If YES – Details to be provided
  sei: Opt<'sei'>[],
  // [select_one] Were there any security concerns during this activity?
  ssy: Opt<'visf'>,
  // [select_multiple] If yes, please select the type of situation:
  sst: Opt<'sst'>[],
  // [text] Other:
  sso: string | undefined,
  // [select_one] Did DRC staff inform beneficiaries of how they can provide feedback through the CFM mechanism?
  ccm: Opt<'visf'>,
  // [text] If no, please explain why:
  ccn: string | undefined,
  // [select_one] Was DRC staff behaviour in line with DRC Code of Conduct standards?
  ccs: Opt<'visf'>,
  // [text] If no, please explain why:
  ccsn: string | undefined,
  // [select_one] Did any beneficiaries report of not feeling safe around DRC staff?
  ccd: Opt<'visf'>,
  // [text] If no, please explain why:
  ccdn: string | undefined,
  // [select_one] Were CFM flyers distributed?
  ccc: Opt<'visf'>,
  // [text] If no, please explain why:
  cccn: string | undefined,
  // [select_one] Have you been asked for permission to collect your data?
  pmid: Opt<'visf'>,
  // [text] If no, please explain why:
  pmidn: string | undefined,
  // [select_one] For vulnerable staff, were issues handled with care and confidentiality?
  pmic: Opt<'visf'>,
  // [text] If no, please explain why:
  pmicn: string | undefined,
  // [select_one] Was the assistance from DRC timely for people?
  qtip: Opt<'visf'>,
  // [text] If no, please explain why:
  qtipn: string | undefined,
  // [select_one] Was the activity of quality and in line with the planned activity?
  qtia: Opt<'visf'>,
  // [text] If no, please explain why:
  qtian: string | undefined,
  // [select_one] Were all DRC staff in visibility and easily identified by beneficiaries?
  visb: Opt<'visf'>,
  // [text] If no, please explain why:
  visbn: string | undefined,
  // [select_one] Any critical concerns to flag?
  visf: Opt<'visf'>,
  // [select_multiple] If YES, ‘’any details to be provided’’
  visp: Opt<'visp'>[],
  // [text] Other:
  vispo: string | undefined,
  // [text] Comments
  fcpc: string | undefined,
  // [note] Photos of the visit
  fspp: string,
  // [image] The photo of the visit
  fcp1: string,
  // [image] The photo of the visit
  fcp2: string,
  // [image] The photo of the visit
  fcp3: string,
  // [image] The photo of the visit
  fcp4: string,
  // [image] The photo of the visit
  fcp5: string,
  // [image] The photo of the visit
  fcp6: string,
  // [image] The photo of the visit
  fcp7: string,
  // [image] The photo of the visit
  fcp8: string,
  // [image] The photo of the visit
  fcp9: string,
  // [image] The photo of the visit
  fcp10: string,
  // [text] Link to the folder with photos
  fcpl: string | undefined,
}