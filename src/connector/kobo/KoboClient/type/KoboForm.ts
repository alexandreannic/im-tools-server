import {KoboApiList} from './KoboAnswer'
import {ApiPaginate} from '../../../../core/Type'

export enum KoboQuestionType {
  SelectOne = 'select_one',
  Text = 'text',
}

export type SelectFromListName = string

export interface KoboQuestion {
  name: string
  type: KoboQuestionType
  $kuid: string
  label: string[],
  $qpath: string,
  $xpath: string,
  required: boolean,
  $autoname: string,
  appearance: 'minimal' | 'horizontal',
  select_from_list_name: SelectFromListName
}

export const koboToApiPaginate = <T>(_: KoboApiList<T>): ApiPaginate<T> => {
  return {
    total: _.count,
    data: _.results,
  }
}
