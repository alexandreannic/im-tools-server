import { SelectQueryBuilder } from 'typeorm';
export type OrderBy = 'desc' | 'asc';
export interface PaginateOptions<T extends Record<string, any>> {
    limit?: number;
    offset?: number;
    orderBy?: OrderBy;
    sortBy?: keyof T;
}
export interface Paginate<T> {
    data: T[];
    totalSize: number;
}
export declare const paginate: <E, Opt extends PaginateOptions<E>>(options: Opt, query: (alias: string) => SelectQueryBuilder<E>) => Promise<Paginate<E>>;
