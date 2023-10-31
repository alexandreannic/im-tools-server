import {Bn_0_mpcaRegNewShort} from './Bn_0_mpcaRegNewShort'


const extractQuestionName = (_: Record<string, any>) => {
  const output: any = {}
  Object.entries(_).forEach(([k, v]) => {
    const arr = k.split('/')
    const qName = arr[arr.length - 1]
    output[qName] = v
  })
  return output
}

export const mapBn_0_mpcaRegNewShort = (_: Record<keyof Bn_0_mpcaRegNewShort, any>): Bn_0_mpcaRegNewShort => ({
	..._,
	phone: _.phone ? +_.phone : undefined,
	household_size: _.household_size ? +_.household_size : undefined,
	income_month: _.income_month ? +_.income_month : undefined,
	hh_elderly_check: _.hh_elderly_check ? +_.hh_elderly_check : undefined,
	agex: _.agex ? +_.agex : undefined,
	group_hh_composition_row_less_4: _.group_hh_composition_row_less_4 ? +_.group_hh_composition_row_less_4 : undefined,
	group_hh_composition_row_5_to_17: _.group_hh_composition_row_5_to_17 ? +_.group_hh_composition_row_5_to_17 : undefined,
	group_hh_composition_row_18_to_59: _.group_hh_composition_row_18_to_59 ? +_.group_hh_composition_row_18_to_59 : undefined,
	group_hh_composition_row_above_60: _.group_hh_composition_row_above_60 ? +_.group_hh_composition_row_above_60 : undefined,
	group_hh_composition_row_1_less_4: _.group_hh_composition_row_1_less_4 ? +_.group_hh_composition_row_1_less_4 : undefined,
	group_hh_composition_row_1_5_to_17: _.group_hh_composition_row_1_5_to_17 ? +_.group_hh_composition_row_1_5_to_17 : undefined,
	group_hh_composition_row_1_18_to_59: _.group_hh_composition_row_1_18_to_59 ? +_.group_hh_composition_row_1_18_to_59 : undefined,
	group_hh_composition_row_1_above_60: _.group_hh_composition_row_1_above_60 ? +_.group_hh_composition_row_1_above_60 : undefined,
	internal_referral_specific: _.internal_referral_specific?.split(' '),
	reason: _.reason?.split(' '),
	Please_select_all_th_urrently_enrolled_in: _.Please_select_all_th_urrently_enrolled_in?.split(' '),
	nfi_issues_items: _.nfi_issues_items?.split(' '),
	no_mpca_nfi_issues: _.no_mpca_nfi_issues?.split(' '),
}) as Bn_0_mpcaRegNewShort