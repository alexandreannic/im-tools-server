import * as yup from 'yup'

export interface ApiPaginate<T> {
  total: number
  data: T[]
}

export const toApiPaginate = <T>(data: T[], total?: number): ApiPaginate<T> => {
  return {
    total: total ?? data.length,
    data,
  }
}

export type UUID = string

export interface ApiPagination {
  offset: number
  limit: number
}

export const defaultPagination = {
  offset: 0,
  limit: 200000,
}

export const validateApiPaginate = yup.object({
  offset: yup.number().default(defaultPagination.offset),
  limit: yup.number().default(defaultPagination.limit),
})

export interface Person {
  age?: number
  gender?: Gender
}

export enum Gender {
  Male = 'Male',
  Female = 'Female',
  Other = 'Other',
}

export interface Period {
  start: Date
  end: Date
}

export type MaybePeriod = Partial<Period>

export class PeriodHelper {
  static readonly filter = <T>(period: MaybePeriod, fn: (t: T) => Date | undefined) => (t: T) => {
    const val = fn(t)
    if (!val) return !period
    if (period?.start && period.start.getTime() >= val.getTime()) return false
    if (period?.end && period.end.getTime() <= val.getTime()) return false
    return true
  }
}