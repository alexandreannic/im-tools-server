import {ApiPaginate} from '../core/Type'

export class DbHelper {
  static toPaginate = (totalSize: number) => <T>(data: T[]): ApiPaginate<T> => {
    return {
      data,
      total: totalSize,
    }
  }
}