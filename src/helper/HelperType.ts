export type ReverseMap<T extends Record<keyof T, keyof any>> = {
  [P in T[keyof T]]: {
    [K in keyof T]: T[K] extends P ? K : never
  }[keyof T]
}
export type StandardEnum<T> = {
  [id: string]: T | string
  [nu: number]: string
}

export interface Index<T> {
  [key: string]: T
}

export type NumberKeys<T> = {
  [K in keyof T]: T[K] extends number | undefined ? K : never;
}[keyof T]