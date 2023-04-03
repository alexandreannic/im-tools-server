import {KoboApiList} from '../connector/kobo/KoboClient/type/KoboAnswer'

export interface ApiPaginate<T> {
  total: number
  data: T[]
}

export type UUID = string
