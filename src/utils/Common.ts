import {v4} from 'uuid'

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
