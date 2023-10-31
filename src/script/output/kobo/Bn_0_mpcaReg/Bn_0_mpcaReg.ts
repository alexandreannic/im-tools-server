import {Bn_0_mpcaRegOptions} from './Bn_0_mpcaRegOptions'

type Opt<T extends keyof typeof Bn_0_mpcaRegOptions> = keyof (typeof Bn_0_mpcaRegOptions)[T]

// Form id: aEwY33SAtdayNTeHoiJfdg
export interface Bn_0_mpcaReg {
  start: string,
  end: string,
  today: string,
  // [select_one] Please select DRC project and donor that this registration is for
  DRC_project: undefined | Opt<'DRC_project'>,
  // [select_one] Select DRC base
  drc_base: undefined | Opt<'drc_base'>,
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
  raion: undefined | string,
  // [select_one] Select hromada where registration is taking place
  hromada: undefined | string,
  // [text] What is your surname name (as shown in personal ID)?
  patron: string | undefined,
  // [text] What is your first name (as shown in personal ID)?
  name_resp: string | undefined,
  // [text] What is your patronymic name?
  last_resp: string | undefined,
  // [integer] What is your phone number?
  phone: number | undefined,
  // [select_one] Are you registered to receive cash from an NGO?
  ingo: undefined | Opt<'confirm_truth'>,
  // [integer] What is the size of your household? (we will ask you to provide more details later)
  household_size: number | undefined,
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
  // [note] **Age/Sex**
  h_note: string,
  // [note] **No of Males**
  h_c1: string,
  // [note] **No of Females**
  h_c2: string,
  // [note] **Total (Row)**
  h_c3: string,
  // [note] ##### 0-4 Years
  r1_note: string,
  // [integer] <span style="display:none">r1-No of Males</span>
  r1_c1: number | undefined,
  // [integer] <span style="display:none">r1-No of Females</span>
  r1_c2: number | undefined,
  // [integer] <span style="display:none">r1-Total (Row)</span>
  r1_c3: number | undefined,
  // [note] ##### 5-17 Years
  r2_note: string,
  // [integer] <span style="display:none">r2-No of Males</span>
  r2_c1: number | undefined,
  // [integer] <span style="display:none">r2-No of Females</span>
  r2_c2: number | undefined,
  // [integer] <span style="display:none">r2-Total (Row)</span>
  r2_c3: number | undefined,
  // [note] ##### 18 - 59 Years
  r3_note: string,
  // [integer] <span style="display:none">r3-No of Males</span>
  r3_c1: number | undefined,
  // [integer] <span style="display:none">r3-No of Females</span>
  r3_c2: number | undefined,
  // [integer] <span style="display:none">r3-Total (Row)</span>
  r3_c3: number | undefined,
  // [note] ##### 60+ Years
  r4_note: string,
  // [integer] <span style="display:none">r4-No of Males</span>
  r4_c1: number | undefined,
  // [integer] <span style="display:none">r4-No of Females</span>
  r4_c2: number | undefined,
  // [integer] <span style="display:none">r4-Total (Row)</span>
  r4_c3: number | undefined,
  // [note] ##### Total (Column)
  r5_note: string,
  // [integer] <span style="display:none">r5-No of Males</span>
  r5_c1: number | undefined,
  // [integer] <span style="display:none">r5-No of Females</span>
  r5_c2: number | undefined,
  // [integer] <span style="display:none">r5-Total (Row)</span>
  r5_c3: number | undefined,
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
  // [calculate] undefined
  mpca_tot_transfer_value: string,
  // [note] You are eligible for cash assistance and according to the information provided, your household will receive a total transfer of ${mpca_tot_transfer_value} UAH (total number of people in HH * 2220 UAH * 3 months). We will now ask you some detailed questions about yourself.
  eligible_mpca_tv: string,
  // [select_one] Should this household be considered for cash for rent?
  Should_this_household_be_consi: undefined | Opt<'Should_this_household_be_consi'>,
  // [select_one] Is this household currently renting or planning to rent an apartment/home?
  Is_this_household_currently_re: undefined | Opt<'Is_this_household_currently_re'>,
  // [note] The household is to be considered to receive cash-for-rent (NO start-up grant).
  The_household_is_to_t_NO_start_up_grant: string,
  // [note] The household is to be considered to receive cash-for-rent (WITH start-up grant).
  The_household_is_to_WITH_start_up_grant: string,
  // [select_one] Select status
  status: undefined | Opt<'status'>,
  // [select_one] Do you have an IDP certificate?
  idp_certificate: undefined | Opt<'idp_certificate'>,
  // [text] Please state main reason why you do not have an IDP certificate
  reason_no_idp_certificate: string | undefined,
  // [select_one] Do you have a resident permit from a conflict-affected location?
  resident_permit: undefined | Opt<'resident_permit'>,
  // [select_one] For staff member ONLY - is this person from a recognized conflict-affected area? (within the decree of cabinet of ministers)
  For_staff_member_ONL_cabinet_of_ministers: undefined | Opt<'For_staff_member_ONL_cabinet_of_ministers'>,
  // [text] If no, what is the mean reason for not having a resident permit?
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
  // [image] Photo of Registration Page in Passport
  photo_reg_passport: string,
  // [image] Photo of Registration Page in Passport
  photo_reg_passport_001: string,
  // [select_one] What is your preferred payment method?
  What_is_your_preferred_payment: undefined | Opt<'What_is_your_preferred_payment'>,
  // [select_multiple] If banks are not an option, for what reason?
  reason: undefined | Opt<'reason'>[],
  // [text] If none of the options are available, please specify the reason
  specify: string | undefined,
  // [image] Photo of IBAN
  Photo_of_IBAN: string,
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
  // [select_one] Has your family suffered from the loss of most of your belongings due to the conflict?
  nfi_loss: undefined | Opt<'nfi_loss'>,
  // [select_multiple] Do you have any issues finding and/or paying for the following items?
  nfi_issues_items: undefined | Opt<'nfi_issues_items'>[],
  // [text] If other, please specify
  nfi_other: string | undefined,
  // [select_one] Would you or a family member be able to pick-up items from a designated location near your home (up to 5KM)?
  nfi_pickup: undefined | Opt<'nfi_pickup'>,
  // [note] Now we would like to ask you a few questions to understand your family dynamics, so we can better monitor the effects of our assistance. This would take an extra 5 minutes. Responding these questions is optional - even though it would be great for us to have this information, bear in mind that if you say 'No', this will not have any negative repercussion in your application to our assistance
  pre: string,
  // [select_one] Would you like to proceed with some more questions?
  pre2: undefined | Opt<'confirm_truth'>,
  // [select_one] a. Rely on less preferred and less expensive foods?
  cheap_food: undefined | Opt<'high_kcal_food'>,
  pts_cheap_food: string,
  yes_cheap_food: string,
  // [select_one] Eat poor quality food or expired food?
  food_expired: undefined | Opt<'high_kcal_food'>,
  pts_food_expired: string,
  yes_food_expired: string,
  // [select_one] b. Borrow food, or rely on help from a friend or relative?
  borrow: undefined | Opt<'high_kcal_food'>,
  pts_borrow: string,
  yes_borrow: string,
  // [select_one] c. Limit portion size at mealtimes?
  reduce_portion: undefined | Opt<'high_kcal_food'>,
  pts_reduce_portion: string,
  yes_reduce_portion: string,
  // [select_one] Collect wild berries, herbs, mushrooms, or hunt or fish?
  wild_foods: undefined | Opt<'high_kcal_food'>,
  pts_wild_food: string,
  yes_wild_food: string,
  // [select_one] d. Restrict consumption by adults in order for small children to eat?
  prioritize_child_meals: undefined | Opt<'high_kcal_food'>,
  pts_prioritize_child_meals: string,
  yes_child_meal: string,
  // [select_one] e. Reduce number of meals eaten in a day?
  skip_meals: undefined | Opt<'high_kcal_food'>,
  pts_skip_meals: string,
  yes_skip_meals: string,
  // [select_one] Have meals from collective shelters or volunteer groups?
  meal_shelter: undefined | Opt<'high_kcal_food'>,
  pts_shelter_meal: string,
  yes_shelter_meal: string,
  // [select_one] Prioritize highly caloric foods over other food groups? (e.g., fresh fruits & vegetables)
  high_kcal_food: undefined | Opt<'high_kcal_food'>,
  pts_high_kcal_food: string,
  yes_high_kcal_food: string,
  pts_std_rcsi: string,
  ipc_std_rcsi: string,
  pts_context_rcsi: string,
  ipc_context_rcsi: string,
  // [select_one] Unfortunately, due to our targeting criteria you are not eligible to receive cash assistance from DRC. However, we would like to ask you some questions about shelter, NFI and protection in order to see if you are eligible for other type of assistance. Do you agree to proceed with the additional questions?
  not_eligible_note: undefined | Opt<'not_eligible_note'>,
  // [select_one] Unfortunately, due to our targeting criteria you are not eligible to receive cash assistance from DRC. However, we would like to ask you some questions about shelter, NFI and protection in order to see if you are eligible for other type of assistance. Do you agree to proceed with the additional questions?
  not_eligible_note2: undefined | Opt<'not_eligible_note2'>,
  // [select_one] Are you currently paying for rent?
  cfr_no_mpca: undefined | Opt<'cfr_no_mpca'>,
  // [select_one] Do you anticipate that your household will need to pay rent next month?
  cfr_no_mpca_2: undefined | Opt<'cfr_no_mpca_2'>,
  // [select_one] Are you currently paying any shelter repairs?
  Are_you_currently_pa_any_shelter_repairs: undefined | Opt<'Are_you_currently_pa_any_shelter_repairs'>,
  // [select_one] Do you anticipate that your household will need to pay for shelter repairs next month?
  Do_you_anticipate_th_r_repairs_next_month: undefined | Opt<'Do_you_anticipate_th_r_repairs_next_month'>,
  // [select_one] Has your family suffered from the loss of most of your belongings due to the conflict?
  no_mpca_nfi: undefined | Opt<'no_mpca_nfi'>,
  // [select_multiple] Do you have any issues finding and/or paying for the following items?
  no_mpca_nfi_issues: undefined | Opt<'no_mpca_nfi_issues'>[],
  // [text] If other, please specify
  no_mpca_nfi_other: string | undefined,
  // [select_one] Would you or a family member be able to pick-up items from a designated location near your home (up to 5KM)?
  no_mpca_nfi_pickup: undefined | Opt<'no_mpca_nfi_pickup'>,
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