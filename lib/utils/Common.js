"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapMultipleChoices = exports.mapObjectColumns = exports.pipe = exports.objectToQueryString = exports.toYYYYMMDD = exports.queryStringToObject = exports.arrayToObject = exports.genUUID = void 0;
const uuid_1 = require("uuid");
const date_fns_1 = require("date-fns");
exports.genUUID = uuid_1.v4;
const arrayToObject = (array, indexedKey, selectedKey) => {
    const obj = {};
    array.map((t) => {
        const key = t[indexedKey];
        obj[key] = selectedKey ? t[selectedKey] : t;
    });
    return obj;
};
exports.arrayToObject = arrayToObject;
const queryStringToObject = (qs) => qs
    .split('&')
    .map(_ => _.split('='))
    .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});
exports.queryStringToObject = queryStringToObject;
const toYYYYMMDD = (_) => (0, date_fns_1.format)(_, 'yyyy-MM-dd'); //_.toString().substring(0, 10)
exports.toYYYYMMDD = toYYYYMMDD;
const objectToQueryString = (obj) => {
    const params = new URLSearchParams();
    for (const [key, value] of Object.entries(obj)) {
        if (value !== null && value !== undefined) {
            if (Array.isArray(value)) {
                for (const item of value) {
                    params.append(key, item.toString());
                }
            }
            else {
                params.set(key, value.toString());
            }
        }
    }
    return params.toString();
};
exports.objectToQueryString = objectToQueryString;
const pipe = (fn1, ...fns) => {
    return (arg) => fns.reduce((prev, fn) => fn ? fn(prev) : prev, fn1(arg));
};
exports.pipe = pipe;
const mapObjectColumns = (columnsMap) => (input) => {
    return Object.keys(columnsMap).reduce((acc, key) => {
        if (typeof columnsMap[key] === 'object') {
            return {
                ...acc,
                [key]: (0, exports.mapObjectColumns)(columnsMap[key])(input)
            };
        }
        return {
            ...acc,
            [key]: input[columnsMap[key]]
        };
    }, {});
};
exports.mapObjectColumns = mapObjectColumns;
const mapMultipleChoices = (value, map) => {
    const res = [];
    Object.keys(map).forEach(k => {
        if (value === null || value === void 0 ? void 0 : value.includes(k))
            res.push(map[k]);
    });
    return res;
};
exports.mapMultipleChoices = mapMultipleChoices;
//# sourceMappingURL=Common.js.map