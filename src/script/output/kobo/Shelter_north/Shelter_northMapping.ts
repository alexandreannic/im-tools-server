import {Shelter_north} from './Shelter_north'


const extractQuestionName = (_: Record<string, any>) => {
  const output: any = {}
  Object.entries(_).forEach(([k, v]) => {
    const arr = k.split('/')
    const qName = arr[arr.length - 1]
    output[qName] = v
  })
  return output
}

export const mapShelter_north = (_: Record<keyof Shelter_north, any>): Shelter_north => ({
	..._,
	_Number_of_damaged_windows: _._Number_of_damaged_windows ? +_._Number_of_damaged_windows : undefined,
	__027: _.__027 ? +_.__027 : undefined,
	_Number_of_damaged_balcony: _._Number_of_damaged_balcony ? +_._Number_of_damaged_balcony : undefined,
	__028: _.__028 ? +_.__028 : undefined,
	Nodd: _.Nodd ? +_.Nodd : undefined,
	kpos: _.kpos ? +_.kpos : undefined,
	kpbd: _.kpbd ? +_.kpbd : undefined,
	ppda: _.ppda ? +_.ppda : undefined,
	vtv: _.vtv ? +_.vtv : undefined,
	vtb: _.vtb ? +_.vtb : undefined,
	__016: _.__016 ? +_.__016 : undefined,
	aph: _.aph ? +_.aph : undefined,
	__022: _.__022 ? +_.__022 : undefined,
	vph1: _.vph1 ? +_.vph1 : undefined,
	vph2: _.vph2 ? +_.vph2 : undefined,
	vph3: _.vph3 ? +_.vph3 : undefined,
	vph4: _.vph4 ? +_.vph4 : undefined,
	vph5: _.vph5 ? +_.vph5 : undefined,
	vph6: _.vph6 ? +_.vph6 : undefined,
	vph7: _.vph7 ? +_.vph7 : undefined,
	vph8: _.vph8 ? +_.vph8 : undefined,
	vph9: _.vph9 ? +_.vph9 : undefined,
	vph10: _.vph10 ? +_.vph10 : undefined,
	__026: _.__026 ? +_.__026 : undefined,
	vph1k: _.vph1k ? +_.vph1k : undefined,
	vph2k: _.vph2k ? +_.vph2k : undefined,
	vph3k: _.vph3k ? +_.vph3k : undefined,
	vph4k: _.vph4k ? +_.vph4k : undefined,
	vph5k: _.vph5k ? +_.vph5k : undefined,
	vph6k: _.vph6k ? +_.vph6k : undefined,
	vph7k: _.vph7k ? +_.vph7k : undefined,
	vph8k: _.vph8k ? +_.vph8k : undefined,
	vph9k: _.vph9k ? +_.vph9k : undefined,
	vph10k: _.vph10k ? +_.vph10k : undefined,
	cs_sh: _.cs_sh?.split(' '),
	cs_se: _.cs_se?.split(' '),
	cs_val: _.cs_val?.split(' '),
	__024: _.__024 ? new Date(_.__024) : undefined,
}) as Shelter_north