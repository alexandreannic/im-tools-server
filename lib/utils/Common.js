"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeid = exports.msToString = exports.mapMultipleChoices = exports.renameObjectProperties = exports.pipe = exports.objectToQueryString = exports.toYYYYMMDD = exports.queryStringToObject = exports.arrayToObject = exports.genUUID = void 0;
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
const objectToQueryString = (obj = {}) => {
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
const renameObjectProperties = (propsMap) => (input) => {
    return Object.keys(propsMap).reduce((acc, key) => {
        if (typeof propsMap[key] === 'object') {
            return {
                ...acc,
                [key]: (0, exports.renameObjectProperties)(propsMap[key])(input)
            };
        }
        return {
            ...acc,
            [key]: input[propsMap[key]]
        };
    }, {});
};
exports.renameObjectProperties = renameObjectProperties;
const mapMultipleChoices = (value, map, defaultValue = []) => {
    const res = [];
    if (!value) {
        return defaultValue;
    }
    Object.keys(map).forEach(k => {
        if (value?.includes(k))
            res.push(map[k]);
    });
    return res;
};
exports.mapMultipleChoices = mapMultipleChoices;
const msToString = (duration) => (0, date_fns_1.format)(duration, 'dd hh:mm:ss');
exports.msToString = msToString;
const makeid = (length = 16) => {
    let result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789_';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};
exports.makeid = makeid;
//# sourceMappingURL=Common.js.map