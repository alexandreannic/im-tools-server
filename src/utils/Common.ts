import {v4} from 'uuid'
import {format} from 'date-fns'

export const genUUID = v4

export interface Index<T> {
  [key: string]: T
}

export const arrayToObject = <T>(array: T[], indexedKey: keyof T, selectedKey?: keyof T): Index<any> => {
  const obj = {}
  array.map((t: T) => {
    const key = t[indexedKey] as any
    obj[key] = selectedKey ? t[selectedKey] : t
  })
  return obj
}

export const queryStringToObject = (qs: string): Index<string> => qs
  .split('&')
  .map(_ => _.split('='))
  .reduce((acc, [key, value]) => ({...acc, [key]: value}), {})

export const toYYYYMMDD = (_: Date) => format(_, 'yyyy-MM-dd')//_.toString().substring(0, 10)

export const objectToQueryString = (obj: {[key: string]: any} = {}): string => {
  const params = new URLSearchParams()
  for (const [key, value] of Object.entries(obj)) {
    if (value !== null && value !== undefined) {
      if (Array.isArray(value)) {
        for (const item of value) {
          params.append(key, item.toString())
        }
      } else {
        params.set(key, value.toString())
      }
    }
  }
  return params.toString()
}

type PipeFunction = <T, R>(fn1: (arg: T) => R, ...fns: (((arg: R) => R) | undefined)[]) => (arg: T) => R;

export const pipe: PipeFunction = (fn1, ...fns) => {
  return (arg) => fns.reduce((prev, fn) => fn ? fn(prev) : prev, fn1(arg))
}

export type MappedColumn<T, O = string> = {
  [P in keyof T]: T[P] extends undefined | string | number | boolean | any[] ? O : MappedColumn<T[P], O>
}

export const renameObjectProperties = <O>(propsMap: Partial<MappedColumn<O>>) => (input: any): O => {
  return Object.keys(propsMap).reduce((acc, key) => {
    if (typeof propsMap[key] === 'object') {
      return {
        ...acc,
        [key]: renameObjectProperties(propsMap[key])(input)
      }
    }
    return {
      ...acc,
      [key]: input[propsMap[key]]
    }
  }, {} as O)
}

export const mapMultipleChoices = <T>(value: string | undefined, map: {[key: string]: T}): T[] => {
  const res: T[] = []
  Object.keys(map).forEach(k => {
    if (value?.includes(k)) res.push(map[k])
  })
  return res
}

export const msToString = (duration: number) => format(duration, 'dd hh:mm:ss')
