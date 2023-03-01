"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginate = void 0;
const paginate = async (options, query) => {
    const { limit, offset, sortBy, orderBy, ...params } = options;
    const alias = 'a';
    const augmentedQuery = Object.keys(params).reduce((q, k) => q.andWhere(`${alias}.${k} = :${k}`, { [k]: params[k] }), query(alias));
    if (options.sortBy)
        augmentedQuery.orderBy(`${alias}.${sortBy}`, (orderBy && orderBy.toUpperCase()) || 'ASC');
    const [data, totalSize] = await Promise.all([
        augmentedQuery.limit(limit).offset(offset).getMany(),
        augmentedQuery.getCount()
    ]);
    return { totalSize, data, };
};
exports.paginate = paginate;
//# sourceMappingURL=Paginate.js.map