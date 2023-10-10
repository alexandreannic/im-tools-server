import {Bn_OldMpcaNfiOptions} from './Bn_OldMpcaNfiOptions'

type Opt<T extends keyof typeof Bn_OldMpcaNfiOptions> = keyof (typeof Bn_OldMpcaNfiOptions)[T]

// Form id: a4Sx3PrFMDAMZEGsyzgJJg
export interface Bn_OldMpcaNfi {
  start: string,
  end: string,
  today: string,
  ID: string,
  // [note] Unique ID ${ID}
  unique_id_view: string,
  // [select_one] Programme
  Programme: undefined | Opt<'Programme'>,
  // [select_one] Please select DRC project and donor that the MPCA registration is for
  DRC_project: undefined | Opt<'DRC_project'>,
  // [select_one] Office in charge of distribution/registration
  drc_base: undefined | Opt<'drc_base'>,
  // [geopoint] Record your current location
  location_geopoint: string,
  // [select_one] Select DRC staff name
  staff_names: undefined | Opt<'staff_names'>,
  // [select_one] Select BHA Consortium geographical area
  BHA_area: undefined | Opt<'BHA_area'>,
  // [note] In order to register your application, we'd need to ask you a few questions to understand the composition of your household and how to best transfer financial assistance to you if you are eligible. These questions will take between 10-15 minutes. If you are eligible, we’ll need to share some basic details with the bank in order to make the payment. We are also required to share Tax ID numbers of people we provide assistance to with other humanitarian agencies implementing financial assistance programs, to ensure we are not duplicating assistance. All the other information will be stored safely, in accordance with the Law on protection of personal data, and will not be shared outside of DRC and its partners.
  __021: string,
  // [select_one] Are you happy to proceed with the questionnaire?
  consent_mod_1: undefined | Opt<'confirm_truth'>,
  // [select_one] Select oblast where registration is taking place
  oblast: undefined | Opt<'oblast'>,
  // [select_one] Select raion where registration is taking place
  raion: undefined | Opt<'raion'>,
  // [select_one] Select hromada where registration is taking place
  hromada: undefined | Opt<'hromada'>,
  // [text] What is your surname name (as shown in personal ID)?
  patron: string | undefined,
  // [text] What is your first name (as shown in personal ID)?
  name_resp: string | undefined,
  // [text] What is your patronymic name?
  last_resp: string | undefined,
  // [select_one] Select status
  status: undefined | Opt<'status'>,
  // [integer] What is your phone number?
  phone: number | undefined,
  // [select_one] Does the beneficiary have an individual tax number (ITN)?
  Does_the_beneficiary_have_an_i: undefined | Opt<'Does_the_beneficiary_have_an_i'>,
  // [select_one] Other ID identification
  Other_ID_identification: undefined | Opt<'Other_ID_identification'>,
  // [text] Number of ID
  Number_of_ID: string | undefined,
  // [text] Individual tax number (ITN) of the HHH
  ITN: string | undefined,
  // [select_one] Select gender of respondent
  gender_respondent: undefined | Opt<'gender_respondent'>,
  // [select_one] Are you the head of your household?
  Are_you_the_head_of_your_house: undefined | Opt<'Are_you_the_head_of_your_house'>,
  // [select_one] If no, what is the gender of head of household?
  sex: undefined | Opt<'sex'>,
  // [integer] How old is the head of household?
  hh_elderly_check: number | undefined,
  // [integer] How old are you?
  agex: number | undefined,
  // [select_one] You have stated you are under 18 years, can you confirm you are the head of household?
  child_hhh_confirm: undefined | Opt<'child_hhh_confirm'>,
  // [note] This is a child headed household (high risk protection case), please refer immediately to a DRC Protection and complete internal referral form.
  child_hhh: string,
  // [integer] Indicate the total number of people in your household, including the HHH
  Total_Family: number | undefined,
  // [begin_repeat] HH members (excluding HHH)
  group_in3fh72: {AgeHH: number | undefined | undefined,GenderHH: undefined | Opt<'GenderHH'> | undefined}[] | undefined,
  // [select_multiple] Does anyone in your family present with any disability? Select all that apply.
  Does_anyone_in_your_elect_all_that_apply: undefined | Opt<'Does_anyone_in_your_elect_all_that_apply'>[],
  // [select_multiple] Kits to be provided
  Kits_to_be_provided: undefined | Opt<'Kits_to_be_provided'>[],
  // [integer] HKMV Family hygiene kit for IDPs on the move: How many?
  HKMV_: number | undefined,
  // [integer] HKF Hygiene kit: How many?
  HKF_: number | undefined,
  // [integer] NFKF Family NFI Kit: How many?
  NFKF_NFI_: number | undefined,
  // [integer] KS Family kitchen set: How many?
  KS_: number | undefined,
  // [integer] BK1 Baby Hygiene Kit 1: How many?
  BK_Baby_Kit_: number | undefined,
  // [integer] BK2 Baby Hygiene Kit 2: How many?
  BK_Baby_Kit: number | undefined,
  // [integer] BK3 Baby Hygiene Kit 3: How many?
  BK_Baby_Kit_001: number | undefined,
  // [integer] BK4 Baby Hygiene Kit 4: How many?
  BK_Baby_Kit_002: number | undefined,
  // [integer] WKB1 Baby Winterization Kit 1: How many?
  WKB1_1_: number | undefined,
  // [integer] WKB1 Baby Winterization Kit 2: How many?
  WKB2_2_: number | undefined,
  // [integer] WKB1 Baby Winterization Kit 3: How many?
  WKB3_3_: number | undefined,
  // [integer] WKB1 Baby Winterization Kit 4: How many?
  WKB4_4_: number | undefined,
  // [integer] BLN High Thermal Blankets: How many?
  BLN_: number | undefined,
  // [integer] Solar lamps: How many?
  BLN: number | undefined,
  Total_Kits: string,
  Total_BBKits: string,
  Total_BBKits_Hygiene: string,
  Total_BBKits_Winter: string,
  Total_Cost_HKMV: string,
  Total_Cost_HKF: string,
  Total_Cost_NFKF: string,
  Total_Cost_KS: string,
  Total_Cost_BK: string,
  Total_Cost_WKB1: string,
  Total_Cost_WKB2: string,
  Total_Cost_WKB3: string,
  Total_Cost_WKB4: string,
  Total_Cost_BLN: string,
  Total_Cost_Allkits: string,
  // [acknowledge] There are ${Total_Kits} planned for this family.
  Kits_Check: string,
  // [note] The total benefit equals ${Total_Cost_Allkits} UAH.
  group_kits_toomanybb_kitstotal_002: string,
  // [select_one] Are you registered to receive cash from an NGO?
  ingo: undefined | Opt<'confirm_truth'>,
  // [integer] What was the income of your household in the last 30 days in UAH?
  income_month: number | undefined,
  calculation_average_income: string,
  // [note] The average income of this household is ${calculation_average_income} per month per person
  The_average_income_o_per_month_per_person: string,
  // [select_one] This household is not eligible for cash assistance because they are receiving or due to receive cash from an NGO.
  exclusion_1: undefined | Opt<'exclusion_1'>,
  // [select_one] This household is not eligible for cash assistance because they earn more than 5,400 UAH per person per month
  exclusion_2: undefined | Opt<'exclusion_2'>,
  // [select_one] This household has passed the exclusion criteria and can be screened for inclusion and vulnerability criteria - proceed to next step
  vul_screen: undefined | Opt<'vul_screen'>,
  // [select_one] Has your household been displaced within in the last 3 days?
  recent_displacement: undefined | Opt<'confirm_truth'>,
  // [select_one] Where are you currently staying?
  safe_shelter_001: undefined | Opt<'safe_shelter_001'>,
  // [select_one] Has this location been damaged or shelled by the conflict since February 2022?
  Has_this_location_been_damaged: undefined | Opt<'Has_this_location_been_damaged'>,
  // [select_one] Was your house damaged or destroyed since Feb. 2022?
  idp_host_shelter_damaged: undefined | Opt<'idp_host_shelter_damaged'>,
  // [select_one] Is this the main reason you are not currently living in your house?
  main_reason_damaged_shelter: undefined | Opt<'main_reason_damaged_shelter'>,
  // [select_one] Has your family lived under occupation?
  occupation: undefined | Opt<'confirm_truth'>,
  // [select_one] Have you been displaced due to the occupation and are now returning to your place of residency?
  returnee: undefined | Opt<'confirm_truth'>,
  // [select_one] Was your home impacted or destroyed by the conflict?
  safe_shelter: undefined | Opt<'confirm_truth'>,
  ctr_vuln: string,
  // [select_one] Has your home been damaged or destroyed by shelling?
  displaced_ngca: undefined | Opt<'displaced_ngca'>,
  // [select_one] For DRC staff only - Was this household referred by DRC Protection?
  For_DRC_staff_only_Was_this_: undefined | Opt<'For_DRC_staff_only_Was_this_'>,
  // [select_one] Is this household female-headed?
  Is_this_household_female_heade: undefined | Opt<'Is_this_household_female_heade'>,
  // [select_one] Is this person living alone and have a chronic illness/disease/disability/temporary impairment?
  single_PWD: undefined | Opt<'single_PWD'>,
  // [select_one] Does this household have 2 or more children?
  large_hh: undefined | Opt<'large_hh'>,
  // [select_one] Does this household have at least 1 child (under 18 years) and 1 elderly (60+ years) person?
  child_elderly: undefined | Opt<'child_elderly'>,
  // [select_one] Does this household have at least 1 child (under 18 years) and 1 member with a chronic illness/disease/disability/temporary impairment?
  child_pwd: undefined | Opt<'child_pwd'>,
  // [select_one] Is there any pregnant or lactating women in your household?
  plw: undefined | Opt<'plw'>,
  // [select_one] Has this household been displaced in the last 30 days?
  displaced_30days: undefined | Opt<'displaced_30days'>,
  // [select_one] Is this household caring for other children (guardianship or custody)?
  child_custody: undefined | Opt<'child_custody'>,
  // [select_one] Is this household affected by sudden shelling including those where people have lost family member, houses, livelihoods (damaged shop/lost, farm, livestock)?
  damaged_inclusion_criteria: undefined | Opt<'damaged_inclusion_criteria'>,
  // [select_one] Should this household be referred to another DRC department?
  internal_referral: undefined | Opt<'internal_referral'>,
  // [select_multiple] Select to which DRC department
  internal_referral_specific: undefined | Opt<'internal_referral_specific'>[],
  // [text] For DRC staff - Please enter any additional comments regarding specific needs of this household?
  additional_specific_needs: string | undefined,
  // [select_one] This household is eligible for MPCA because they satisfy the inclusion criteria for the category of area
  mpca_eligible_inclusion_area: undefined | Opt<'mpca_eligible_inclusion_area'>,
  // [select_one] This household is eligible for MPCA because they were referred to from DRC Protection and pass the exclusion criteria
  protection_referral: undefined | Opt<'protection_referral'>,
  // [select_one] This household is eligible for MPCA because they are elderly-headed.
  mpca_yes_ehh: undefined | Opt<'mpca_yes_ehh'>,
  // [select_one] This household is eligible for MPCA because they meet at least one of the vulnerability targeting criteria.
  mpca_eligible_vul: undefined | Opt<'mpca_eligible_vul'>,
  // [select_one] Is this household currently renting or planning to rent an apartment/home?
  Is_this_household_currently_re: undefined | Opt<'Is_this_household_currently_re'>,
  // [note] The household is to be considered to receive cash-for-rent (WITH start-up grant).
  The_household_is_to_WITH_start_up_grant: string,
  // [note] The household is to be considered to receive cash-for-rent (NO start-up grant).
  The_household_is_to_t_NO_start_up_grant: string,
  // [calculate] undefined
  mpca_tot_transfer_value: string,
  // [note] You are eligible for cash assistance and according to the information provided, your household will receive a total transfer of ${mpca_tot_transfer_value} UAH (total number of people in HH * 2220 UAH * 3 months). We will now ask you some detailed questions about yourself.
  eligible_mpca_tv: string,
  // [select_one] Do you have an IDP certificate?
  idp_certificate: undefined | Opt<'idp_certificate'>,
  // [text] Please state main reason why you do not have an IDP certificate
  reason_no_idp_certificate: string | undefined,
  // [select_one] Do you have a resident permit from a conflict-affected location?
  resident_permit: undefined | Opt<'resident_permit'>,
  // [select_one] For staff member ONLY - is this person from a recognized conflict-affected area? (within the decree of cabinet of ministers)
  For_staff_member_ONL_cabinet_of_ministers: undefined | Opt<'For_staff_member_ONL_cabinet_of_ministers'>,
  // [text] If no, what is the main reason for not having a resident permit?
  no_resident_permit: string | undefined,
  // [text] Enter passport series
  passport_serial: string | undefined,
  // [text] Enter passport number
  passport_number: string | undefined,
  // [text] What is your Tax ID?
  your_id: string | undefined,
  // [text] Enter registration address
  registration_address: string | undefined,
  // [text] Confirm phone number of person receiving MPCA
  confirm_phone: string | undefined,
  // [select_one] What is your area of origin prior to displacement? (Select Oblast)
  area_of_origin: undefined | Opt<'area_of_origin'>,
  // [select_one] What is your preferred payment method?
  What_is_your_preferred_payment: undefined | Opt<'What_is_your_preferred_payment'>,
  // [select_multiple] If banks are not an option, for what reason?
  reason: undefined | Opt<'reason'>[],
  // [text] If none of the options are available, please specify the reason
  specify: string | undefined,
  // [select_one] Are you currently enrolled in any social protection assistance?
  Are_you_currently_enrolled_in_: undefined | Opt<'Are_you_currently_enrolled_in_'>,
  // [select_one] Have you received your social protection benefits in the last 3 months?
  Have_you_received_yo_in_the_last_3_months: undefined | Opt<'Have_you_received_yo_in_the_last_3_months'>,
  // [select_one] Are you able to provide information on which social protection assistance programe you are enrolled in?
  Are_you_able_to_provide_inform: undefined | Opt<'Are_you_able_to_provide_inform'>,
  // [select_multiple] Please select all the social protection assistance programs you are currently enrolled in
  Please_select_all_th_urrently_enrolled_in: undefined | Opt<'Please_select_all_th_urrently_enrolled_in'>[],
  // [select_one] Were you enrolled to these social assistance benefits before February 2022?
  Were_you_enrolled_to_before_February_2022: undefined | Opt<'Were_you_enrolled_to_before_February_2022'>,
  // [select_one] We would now like to ask you some questions about shelter, NFI and protection. Do you agree to proceed with the additional questions?
  We_would_now_like_to_ask_you_s: undefined | Opt<'We_would_now_like_to_ask_you_s'>,
  // [select_one] Are you currently paying for rent?
  rent: undefined | Opt<'confirm_truth'>,
  // [select_one] Do you anticipate that your household will need to pay rent next month?
  rent_2: undefined | Opt<'confirm_truth'>,
  // [select_one] Are you currently paying for any shelter repairs?
  repairs: undefined | Opt<'confirm_truth'>,
  // [select_one] Do you anticipate that you need to pay for shelter repairs in the next month?
  repairs_2: undefined | Opt<'confirm_truth'>,
  // [select_one] Do you provide DRC consent to take photos or copies of your personal documentation at this time? Following DRC Data Protection Protocols and Ukraine Law on Data Protection, we will not share copies or photos of your documents with anyone outside DRC and these will only be used for the sole purpose of processing your information in order to provide you with cash assistance. You can decide to say no at this time and we will need to collect your documents at a later point in time.
  consent_document: undefined | Opt<'consent_document'>,
  // [select_one] Does the respondent have personal documentation? (passport or IDP certificate)
  Does_the_respondent_have_perso: undefined | Opt<'Does_the_respondent_have_perso'>,
  // [note] For DRC Staff: Proceed to completing internal referral form after completion of this registration and refer to DRC Protection
  no_documents_refer: string,
  // [note] DRC Staff: take photo of IDP certificate only. If person does not have IDP certificate, take photo ONLY of passport registration page.
  DRC_Staff_take_phot_rt_registration_page: string,
  // [image] Photo of IDP Certificate
  Photo_of_IDP_Certificate: string,
  // [image] Photo of ITN Certificate
  Photo_of_IDP_Certificate_001: string,
  // [image] Photo of IBAN
  Photo_of_IBAN: string,
  // [image] Photo of Passport 1st page
  photo_reg_passport: string,
  // [image] Photo of Registration Page in Passport
  photo_reg_passport_001: string,
  // [select_one] Unfortunately, due to our targeting criteria you are not eligible to receive cash assistance from DRC. However, we would like to ask you some questions about shelter and protection in order to see if you are eligible for other type of assistance, and proceed with the NFI distribution. Do you agree to proceed with the additional questions?
  not_eligible_note: undefined | Opt<'not_eligible_note'>,
  // [select_one] Unfortunately, due to our targeting criteria you are not eligible to receive cash assistance from DRC. However, we would like to ask you some questions about shelter and protection in order to see if you are eligible for other type of assistance, and proceed with the NFI distribution. Do you agree to proceed with the additional questions?
  not_eligible_note2: undefined | Opt<'not_eligible_note2'>,
  // [select_one] Are you currently paying for rent?
  cfr_no_mpca: undefined | Opt<'cfr_no_mpca'>,
  // [select_one] Do you anticipate that your household will need to pay rent next month?
  cfr_no_mpca_2: undefined | Opt<'cfr_no_mpca_2'>,
  // [select_one] Are you currently paying any shelter repairs?
  Are_you_currently_pa_any_shelter_repairs: undefined | Opt<'Are_you_currently_pa_any_shelter_repairs'>,
  // [select_one] Do you anticipate that your household will need to pay for shelter repairs next month?
  Do_you_anticipate_th_r_repairs_next_month: undefined | Opt<'Do_you_anticipate_th_r_repairs_next_month'>,
  // [note] Thank you very much for talking to DRC today. We appreciate your time.
  no_consent_note: string,
  // [select_one] Do you confirm that all of the information you have provided is true and accurate?
  confirm_truth: undefined | Opt<'confirm_truth'>,
  // [select_one] DRC staff member ONLY - Can this person provide an e-signature?
  consent_to_esign: undefined | Opt<'consent_to_esign'>,
  // [image] In accordance with the Law of Ukraine "On the Protection of Personal Data" No. 2297-IV of June 1, 2010, we will need your consent for the following statement: "I give consent to the Representative Office of the Danish Refugee Council in Ukraine for the processing, use, access, distribution and transfer of my personal data to third parties that I provide about myself. The purpose of processing personal data to ensure the implementation of Assistance Programs.
  consent_signature_payment: string,
  // [note] You have stated this person cannot provide an e-signature. Please have them complete a paper consent form.
  paper_consent: string,
  // [note] Thank you so much for agreeing to answer the questions. DRC will be reviewing the application and might contact for additional clarification and request for personal documents..
  eligible_end_note: string,
}