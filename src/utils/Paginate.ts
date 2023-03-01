import {SelectQueryBuilder} from 'typeorm'

export type OrderBy = 'desc' | 'asc';

export interface PaginateOptions<T extends Record<string, any>> {
  limit?: number
  offset?: number
  orderBy?: OrderBy
  sortBy?: keyof T
}

export interface Paginate<T> {
  data: T[]
  totalSize: number,
}

export const paginate = async <E, Opt extends PaginateOptions<E>>(
  options: Opt,
  query: (alias: string) => SelectQueryBuilder<E>,
): Promise<Paginate<E>> => {
  const {limit, offset, sortBy, orderBy, ...params} = options
  const alias = 'a'
  const augmentedQuery = Object.keys(params).reduce(
    (q: SelectQueryBuilder<E>, k: string) => q.andWhere(`${alias}.${k} = :${k}`, {[k]: params[k]}),
    query(alias)
  )
  if (options.sortBy)
    augmentedQuery.orderBy(`${alias}.${sortBy}`, (orderBy && orderBy.toUpperCase() as any) || 'ASC')

  const [data, totalSize]: [E[], number] = await Promise.all([
    augmentedQuery.limit(limit).offset(offset).getMany(),
    augmentedQuery.getCount()
  ])
  return {totalSize, data,}
}
