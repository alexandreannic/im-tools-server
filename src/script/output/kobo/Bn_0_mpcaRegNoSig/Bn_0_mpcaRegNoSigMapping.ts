import {Bn_0_mpcaRegNoSig} from './Bn_0_mpcaRegNoSig'


const extractQuestionName = (_: Record<string, any>) => {
  const output: any = {}
  Object.entries(_).forEach(([k, v]) => {
    const arr = k.split('/')
    const qName = arr[arr.length - 1]
    output[qName] = v
  })
  return output
}

export const mapBn_0_mpcaRegNoSig = (_: Record<keyof Bn_0_mpcaRegNoSig, any>): Bn_0_mpcaRegNoSig => ({
	..._,
	phone: _.phone ? +_.phone : undefined,
	household_size: _.household_size ? +_.household_size : undefined,
	income_month: _.income_month ? +_.income_month : undefined,
	hh_elderly_check: _.hh_elderly_check ? +_.hh_elderly_check : undefined,
	agex: _.agex ? +_.agex : undefined,
	children_number: _.children_number ? +_.children_number : undefined,
	group_household_dem_under4_1_female: _.group_household_dem_under4_1_female ? +_.group_household_dem_under4_1_female : undefined,
	group_household_dem_under4_1_male: _.group_household_dem_under4_1_male ? +_.group_household_dem_under4_1_male : undefined,
	group_household_dem_5to17_1_female: _.group_household_dem_5to17_1_female ? +_.group_household_dem_5to17_1_female : undefined,
	group_household_dem_5to17_1_male: _.group_household_dem_5to17_1_male ? +_.group_household_dem_5to17_1_male : undefined,
	group_household_dem_18to59_1_female: _.group_household_dem_18to59_1_female ? +_.group_household_dem_18to59_1_female : undefined,
	group_household_dem_18to59_1_male: _.group_household_dem_18to59_1_male ? +_.group_household_dem_18to59_1_male : undefined,
	group_household_dem_above60_1_female: _.group_household_dem_above60_1_female ? +_.group_household_dem_above60_1_female : undefined,
	group_household_dem_above60_1_male: _.group_household_dem_above60_1_male ? +_.group_household_dem_above60_1_male : undefined,
	reason: _.reason?.split(' '),
	Please_select_all_th_urrently_enrolled_in: _.Please_select_all_th_urrently_enrolled_in?.split(' '),
}) as Bn_0_mpcaRegNoSig