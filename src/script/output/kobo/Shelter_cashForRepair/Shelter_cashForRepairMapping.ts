import {Shelter_cashForRepair} from './Shelter_cashForRepair'


const extractQuestionName = (_: Record<string, any>) => {
  const output: any = {}
  Object.entries(_).forEach(([k, v]) => {
    const arr = k.split('/')
    const qName = arr[arr.length - 1]
    output[qName] = v
  })
  return output
}

export const mapShelter_cashForRepair = (_: Record<keyof Shelter_cashForRepair, any>): Shelter_cashForRepair => ({
	..._,
	bihm: _.bihm ? +_.bihm : undefined,
	sihaf: _.sihaf ? +_.sihaf : undefined,
	shelter_damage: _.shelter_damage?.split(' '),
	shelter_damage_window: _.shelter_damage_window ? +_.shelter_damage_window : undefined,
	shelter_damage_doors: _.shelter_damage_doors ? +_.shelter_damage_doors : undefined,
	shelter_damage_doors_external: _.shelter_damage_doors_external ? +_.shelter_damage_doors_external : undefined,
	shelter_damage_doors_internal: _.shelter_damage_doors_internal ? +_.shelter_damage_doors_internal : undefined,
}) as Shelter_cashForRepair