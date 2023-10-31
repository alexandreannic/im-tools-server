import {Bn_0_mpcaRegNoSigOptions} from './Bn_0_mpcaRegNoSigOptions'

type Opt<T extends keyof typeof Bn_0_mpcaRegNoSigOptions> = keyof (typeof Bn_0_mpcaRegNoSigOptions)[T]

// Form id: aHuWQPkrC43qBfTmJvoLqg
export interface Bn_0_mpcaRegNoSig {
  start: string,
  end: string,
  today: string,
  // [geopoint] Please enter location
  GPS1: string,
  // [select_one] Select DRC base
  drc_base: undefined | Opt<'drc_base'>,
  // [select_one] Select DRC staff name
  staff_names: undefined | Opt<'staff_names'>,
  // [select_one] Please select DRC project and donor that this registration is for
  DRC_project: undefined | Opt<'DRC_project'>,
  // [select_one] Select BHA geographical area
  BHA_area: undefined | Opt<'BHA_area'>,
  // [note] In order to register your application, we'd need to ask you a few questions to understand the composition of your household and how to best transfer financial assistance to you if you are eligible. These questions will take between 10-15 minutes. If you are eligible, we’ll need to share some basic details with the bank in order to make the payment. We are also required to share Tax ID numbers of people we provide assistance to with other humanitarian agencies implementing financial assistance programs, to ensure we are not duplicating assistance. All the other information will be stored safely, in accordance with the Law on protection of personal data, and will not be shared outside of DRC and its partners.
  __021: string,
  // [select_one] Are you happy to proceed with the questionnaire?
  consent_mod_1: undefined | Opt<'confirm_truth'>,
  // [select_one] Select oblast
  oblast: undefined | Opt<'oblast'>,
  // [select_one] Select raion
  raion: undefined | string,
  // [select_one] Select hromada
  hromada: undefined | string,
  // [text] What is your last name (as shown in personal ID)?
  patron: string | undefined,
  // [text] What is your first name (as shown in personal ID)?
  name_resp: string | undefined,
  // [text] What is your patronymic name?
  last_resp: string | undefined,
  // [integer] What is your phone number?
  phone: number | undefined,
  // [select_one] For interviewee only - Has this household been referred to by protection?
  protection_referral: undefined | Opt<'protection_referral'>,
  // [select_one] Have you received cash from an NGO in the last 3 months?
  ingo: undefined | Opt<'confirm_truth'>,
  // [integer] What is the size of your household? (we will ask you to provide more details later)
  household_size: number | undefined,
  // [integer] What was the income of your household in the last 30 days in UAH?
  income_month: number | undefined,
  calculation_average_income: string,
  // [note] The average income of this household is ${calculation_average_income} per month per person
  The_average_income_o_per_month_per_person: string,
  // [select_one] Has your household been displaced within in the last 3 days?
  recent_displacement: undefined | Opt<'confirm_truth'>,
  // [select_one] Where are you currently staying?
  west_shelter: undefined | Opt<'west_shelter'>,
  // [text] Enter name of collective center
  ccs: string | undefined,
  // [select_one] Has your family lived under occupation?
  occupation: undefined | Opt<'confirm_truth'>,
  // [select_one] Have you been displaced due to the occupation and are now returning to your place of residency?
  returnee: undefined | Opt<'confirm_truth'>,
  // [select_one] Was your home impacted or destroyed by the conflict?
  safe_shelter: undefined | Opt<'confirm_truth'>,
  ctr_vuln: string,
  // [select_one] Has your home been damaged or destroyed by shelling?
  displaced_ngca: undefined | Opt<'displaced_ngca'>,
  // [select_one] This household can be screened for vulnerability targeting criteria - proceed to next step
  vul_screen: undefined | Opt<'vul_screen'>,
  // [select_one] This household is not eligible for cash assistance because they have received cash from another NGO in the last 3 months.
  exclusion_1: undefined | Opt<'exclusion_1'>,
  // [select_one] This household is not eligible for cash assistance because they earn more than 5,400 UAH per person per month
  exclusion_2: undefined | Opt<'exclusion_2'>,
  // [select_one] Are you the head of your household?
  Are_you_the_head_of_your_house: undefined | Opt<'Are_you_the_head_of_your_house'>,
  // [select_one] Select gender
  Select_gender: undefined | Opt<'Select_gender'>,
  // [select_one] What is the gender of head of household?
  sex: undefined | Opt<'sex'>,
  // [integer] How old is the head of household?
  hh_elderly_check: number | undefined,
  // [integer] How old are you?
  agex: number | undefined,
  // [select_one] You have stated you are under 18 years, can you confirm you are the head of household?
  child_hhh_confirm: undefined | Opt<'child_hhh_confirm'>,
  // [note] This is a child headed household (high risk protection case), please refer immediately to a Child Protection Actor.
  child_hhh: string,
  // [select_one] Has your household been displaced in the last 30 days?
  displacement_30days: undefined | Opt<'displacement_30days'>,
  // [select_one] Are you traveling or living alone?
  alone: undefined | Opt<'confirm_truth'>,
  // [select_one] You are traveling alone, do you have any disability (physical, mental, chronic illness or temporary injury)?
  single_pwd: undefined | Opt<'single_pwd'>,
  // [select_one] Are you currently travelling or living with children? (any person under the age of 18)?
  hh_children: undefined | Opt<'hh_children'>,
  // [integer] How many children (under 18) are in your care/in your household?
  children_number: number | undefined,
  // [select_one] Are you or anyone in your household pregnant or lactating?
  plw: undefined | Opt<'confirm_truth'>,
  // [select_one] Is anyone in your household 60 years old or older?
  elderly: undefined | Opt<'confirm_truth'>,
  // [select_one] Is anyone in your household (including children) have a chronic illness or disability (including temporary or permanent impairment caused by war injury)?
  plwd: undefined | Opt<'confirm_truth'>,
  // [select_one] You mentioned you have children in your care, does this include children who are not yours (i.e. you are caring for someone else's children)?
  other_children: undefined | Opt<'confirm_truth'>,
  // [select_one] This household is eligible for MPCA because they are an elderly-headed household.
  mpca_yes_ehh: undefined | Opt<'mpca_yes_ehh'>,
  // [select_one] This household is eligible for MPCA because they are a female-headed household.
  mpca_yes_fhh: undefined | Opt<'mpca_yes_fhh'>,
  // [select_one] This household is eligible for MPCA because they have more than 2 children.
  mpca_yes_morechildren: undefined | Opt<'mpca_yes_morechildren'>,
  // [select_one] This household is eligible for MPCA because they have a pregnant/lactating woman.
  mpca_yes_plw: undefined | Opt<'mpca_yes_plw'>,
  // [select_one] This household is eligible for MPCA because they have at least 1 child and 1 elderly person in their household.
  mpca_yes_1child_1elderly: undefined | Opt<'mpca_yes_1child_1elderly'>,
  // [select_one] This household is eligible for MPCA because they have at least 1 child and 1 member with disability/chronic illness or war injury..
  mpca_eligible_1child_1pwd: undefined | Opt<'mpca_eligible_1child_1pwd'>,
  // [select_one] This household is eligible for MPCA because they are a single individual living with disabilities
  mpca_eligible_singlepwd: undefined | Opt<'mpca_eligible_singlepwd'>,
  // [select_one] This household is eligible for MPCA because they have meet at least 1 inclusion criteria.
  mpca_eligible_inclusion: undefined | Opt<'mpca_eligible_inclusion'>,
  // [select_one] This household is eligible for MPCA because they have been displaced in less than 30 days
  mpca_eligible_displaced: undefined | Opt<'mpca_eligible_displaced'>,
  // [select_one] This household is eligible for MPCA because they are caring for other children (guardianship or custody)
  mpca_eligible_careotherchildre: undefined | Opt<'mpca_eligible_careotherchildre'>,
  calculation_eligible: string,
  // [note] You are eligible for cash assistance, we will now ask you some detailed questions about yourself and your household members.
  You_are_eligible_for_ur_household_members: string,
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
  // [text] What is your Tax ID?
  your_id: string | undefined,
  // [note] **Please include information on household demographics in the table below**
  group_household_dem_header_note: string,
  // [note] **Female**
  group_household_dem_header_female: string,
  // [note] **Male**
  group_household_dem_header_male: string,
  // [note] ##### Under 4 years
  group_household_dem_under4_1_note: string,
  // [integer] <span style="display:none">under4_1-Female</span>
  group_household_dem_under4_1_female: number | undefined,
  // [integer] <span style="display:none">under4_1-Male</span>
  group_household_dem_under4_1_male: number | undefined,
  // [note] ##### 5 to 17 years
  group_household_dem_5to17_1_note: string,
  // [integer] <span style="display:none">5to17_1-Female</span>
  group_household_dem_5to17_1_female: number | undefined,
  // [integer] <span style="display:none">5to17_1-Male</span>
  group_household_dem_5to17_1_male: number | undefined,
  // [note] ##### 18 to 59 years
  group_household_dem_18to59_1_note: string,
  // [integer] <span style="display:none">18to59_1-Female</span>
  group_household_dem_18to59_1_female: number | undefined,
  // [integer] <span style="display:none">18to59_1-Male</span>
  group_household_dem_18to59_1_male: number | undefined,
  // [note] ##### Above 60 years
  group_household_dem_above60_1_note: string,
  // [integer] <span style="display:none">above60_1-Female</span>
  group_household_dem_above60_1_female: number | undefined,
  // [integer] <span style="display:none">above60_1-Male</span>
  group_household_dem_above60_1_male: number | undefined,
  // [text] What is the Tax ID of each additional adult that are part of your household?
  adult_1: string | undefined,
  // [note] Note for staff member: tell the respondent that we may be contacting them to verify the actual number of people in their household.
  overall_check_no: string,
  // [select_one] Do you provide DRC consent to take photos or copies of your personal documentation at this time? Following DRC Data Protection Protocols and Ukraine Law on Data Protection, we will not share copies or photos of your documents with anyone outside DRC and these will only be used for the sole purpose of processing your information in order to provide you with cash assistance. You can decide to say no at this time and we will need to collect your documents at a later point in time.
  consent_document: undefined | Opt<'consent_document'>,
  // [select_one] Do you have passport or ID card?
  document_passport_idcard: undefined | Opt<'document_passport_idcard'>,
  // [image] Photo of ID card
  Photo_of_ID_card: string,
  // [image] Passport page 1
  Passport_page_1: string,
  // [image] Passport page 2-3
  Passport_page_2_3: string,
  // [image] Passport page 4-5
  Passport_page_4_5: string,
  // [image] Passport page 6-7
  Passport_page_6_7: string,
  // [image] Passport Registration page
  Passport_Registration_page: string,
  // [image] Passport page after registration
  Passport_page_after_registration: string,
  // [select_one] Do you have certification of your Individual Tax Code?
  Do_you_have_certification_of_y: undefined | Opt<'Do_you_have_certification_of_y'>,
  // [image] Photo of Individual Tax Code
  Photo_of_Individual_Tax_Code: string,
  // [image] Photo of IDP Certificate
  Photo_of_IDP_Certificate: string,
  // [select_one] 4.1 Do you have access to bank branches/ ATMs?
  bank: undefined | Opt<'confirm_truth'>,
  // [select_multiple] If no, for what reason?
  reason: undefined | Opt<'reason'>[],
  // [select_one] If no, do you have access to a Ukraine Postha office?
  If_no_do_you_have_kraine_Postha_office: undefined | Opt<'If_no_do_you_have_kraine_Postha_office'>,
  // [text] If no, please specify the reason
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
  // [select_one] Unfortunately, due to our targeting criteria you are not eligible to receive cash assistance from DRC. However, we would like to ask you some questions about shelter, NFI and protection in order to see if you are eligible for other type of assistance. Do you agree to proceed with the additional questions?
  not_eligible_note: undefined | Opt<'not_eligible_note_001'>,
  // [select_one] Unfortunately, due to our targeting criteria you are not eligible to receive cash assistance from DRC. However, we would like to ask you some questions about shelter, NFI and protection in order to see if you are eligible for other type of assistance. Do you agree to proceed with the additional questions?
  not_eligible_note_001: undefined | Opt<'not_eligible_note_001'>,
  // [select_one] Unfortunately, due to our targeting criteria you are not eligible to receive cash assistance from DRC. However, we would like to ask you some questions about shelter, NFI and protection in order to see if you are eligible for other type of assistance. Do you agree to proceed with the additional questions?
  not_eligible_3: undefined | Opt<'not_eligible_3'>,
  // [select_one] Unfortunately, due to our targeting criteria you are not eligible to receive cash assistance from DRC. However, we would like to ask you some questions about shelter, NFI and protection in order to see if you are eligible for other type of assistance. Do you agree to proceed with the additional questions?
  not_eligible_4: undefined | Opt<'not_eligible_4'>,
  // [select_one] Unfortunately, due to our targeting criteria you are not eligible to receive cash assistance from DRC. However, we would like to ask you some questions about shelter, NFI and protection in order to see if you are eligible for other type of assistance. Do you agree to proceed with the additional questions?
  not_eligible_5: undefined | Opt<'not_eligible_5'>,
  // [select_one] Unfortunately, due to our targeting criteria you are not eligible to receive cash assistance from DRC. However, we would like to ask you some questions about shelter, NFI and protection in order to see if you are eligible for other type of assistance. Do you agree to proceed with the additional questions?
  not_eligible_6: undefined | Opt<'not_eligible_6'>,
  // [select_one] Are you currently paying for rent?
  cfr_no_mpca: undefined | Opt<'cfr_no_mpca'>,
  // [select_one] Do you anticipate that your household will need to pay rent next month?
  cfr_no_mpca_2: undefined | Opt<'cfr_no_mpca_2'>,
  // [select_one] Are you currently paying any shelter repairs?
  Are_you_currently_pa_any_shelter_repairs: undefined | Opt<'Are_you_currently_pa_any_shelter_repairs'>,
  // [select_one] Do you anticipate that your household will need to pay for shelter repairs next month?
  Do_you_anticipate_th_r_repairs_next_month: undefined | Opt<'Do_you_anticipate_th_r_repairs_next_month'>,
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
  // [select_one] B5.1 Is your household currently able to meet all, most, some, or none of its basic needs as you define them?
  needs: undefined | Opt<'needs'>,
  // [select_one] B5.2 Does your current living space allow you to conduct essential household activities with dignity, security, and provide protection from physical and environmental harm?
  shelter: undefined | Opt<'confirm_truth'>,
  // [select_one] B5.3 Does your household currently have enough clothing, bedding, cooking supplies, fuel, lighting, and other items needed to provide a basic level of comfort?
  nfis: undefined | Opt<'confirm_truth'>,
  // [select_one] B5.4 During the past two weeks, did your household purchase more, fewer, or the usual amount of items to meet your basic water, sanitation, and hygiene needs?
  wash: undefined | Opt<'wash'>,
  // [note] Thank you very much for talking to DRC today. We appreciate your time.
  no_consent_note: string,
  // [select_one] Do you confirm that all of the information you have provided is true and accurate?
  confirm_truth: undefined | Opt<'confirm_truth'>,
  // [select_one] In accordance with the Law of Ukraine "On the Protection of Personal Data" No. 2297-IV of June 1, 2010, we will need your consent for the following statement: "I give consent to the Representative Office of the Danish Refugee Council in Ukraine for the processing, use, access, distribution and transfer of my personal data to third parties that I provide about myself. The purpose of processing personal data to ensure the implementation of Assistance Programs.
  In_accordance_with_t_Assistance_Programs: undefined | Opt<'In_accordance_with_t_Assistance_Programs'>,
  // [note] Thank you so much for agreeing to answer the questions. DRC will be reviewing the application and might contact for additional clarification and request for personal documents..
  eligible_end_note: string,
}