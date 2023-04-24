import {KoboApiList} from './KoboAnswer'
import {ApiPaginate} from '../../../../../core/Type'

export interface KoboApiForm {
  content: {
    choices: {
      $autovalue: string,
      $kuid: string,
      label: string[],
      list_name: string,
      name: string,
    }[]
    schema: string
    settings: {version: string, default_language: string}
    survey: {
      $autoname: string
      $kuid: string
      $qpath: string
      $xpath: string
      name: string
      type:
        'begin_group' |
        'select_one' |
        'note' |
        'end_group' |
        'text' |
        'calculate' |
        'integer' |
        'select_multiple' |
        'date'
      select_from_list_name?: string
    }[]
    translated: ['hint', 'label', 'media::image']
    translations: [string, string]
  }
}

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
