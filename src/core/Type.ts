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
  limit: 20,
}

export const validateApiPaginate = yup.object({
  offset: yup.number().default(defaultPagination.offset),
  limit: yup.number().default(defaultPagination.limit),
})