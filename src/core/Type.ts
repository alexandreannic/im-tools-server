import {KoboApiList} from '../connector/kobo/KoboClient/type/KoboAnswer'

export interface ApiPaginate<T> {
  total: number
  data: T[]
}

export const koboToApiPaginate = <T>(_: KoboApiList<T>): ApiPaginate<T> => {
  return {
    total: _.count,
    data: _.results,
  }
}

export type UUID = string
