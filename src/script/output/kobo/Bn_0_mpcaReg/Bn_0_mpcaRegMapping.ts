import {Bn_0_mpcaReg} from './Bn_0_mpcaReg'


const extractQuestionName = (_: Record<string, any>) => {
  const output: any = {}
  Object.entries(_).forEach(([k, v]) => {
    const arr = k.split('/')
    const qName = arr[arr.length - 1]
    output[qName] = v
  })
  return output
}

export const mapBn_0_mpcaReg = (_: Record<keyof Bn_0_mpcaReg, any>): Bn_0_mpcaReg => ({
	..._,
	phone: _.phone ? +_.phone : undefined,
	household_size: _.household_size ? +_.household_size : undefined,
	income_month: _.income_month ? +_.income_month : undefined,
	hh_elderly_check: _.hh_elderly_check ? +_.hh_elderly_check : undefined,
	agex: _.agex ? +_.agex : undefined,
	r1_c1: _.r1_c1 ? +_.r1_c1 : undefined,
	r1_c2: _.r1_c2 ? +_.r1_c2 : undefined,
	r1_c3: _.r1_c3 ? +_.r1_c3 : undefined,
	r2_c1: _.r2_c1 ? +_.r2_c1 : undefined,
	r2_c2: _.r2_c2 ? +_.r2_c2 : undefined,
	r2_c3: _.r2_c3 ? +_.r2_c3 : undefined,
	r3_c1: _.r3_c1 ? +_.r3_c1 : undefined,
	r3_c2: _.r3_c2 ? +_.r3_c2 : undefined,
	r3_c3: _.r3_c3 ? +_.r3_c3 : undefined,
	r4_c1: _.r4_c1 ? +_.r4_c1 : undefined,
	r4_c2: _.r4_c2 ? +_.r4_c2 : undefined,
	r4_c3: _.r4_c3 ? +_.r4_c3 : undefined,
	r5_c1: _.r5_c1 ? +_.r5_c1 : undefined,
	r5_c2: _.r5_c2 ? +_.r5_c2 : undefined,
	r5_c3: _.r5_c3 ? +_.r5_c3 : undefined,
	internal_referral_specific: _.internal_referral_specific?.split(' '),
	reason: _.reason?.split(' '),
	Please_select_all_th_urrently_enrolled_in: _.Please_select_all_th_urrently_enrolled_in?.split(' '),
	nfi_issues_items: _.nfi_issues_items?.split(' '),
	no_mpca_nfi_issues: _.no_mpca_nfi_issues?.split(' '),
}) as Bn_0_mpcaReg