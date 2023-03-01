"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiClient = exports.ApiError = void 0;
const axios_1 = __importDefault(require("axios"));
const qs = __importStar(require("qs"));
const Common_1 = require("../utils/Common");
class ApiError extends Error {
    constructor(message, details) {
        super(message);
        this.message = message;
        this.details = details;
        this.name = 'ApiError';
    }
}
exports.ApiError = ApiError;
class ApiClient {
    constructor({ baseUrl, headers, requestInterceptor, mapData, mapError }) {
        this.get = (uri, options) => {
            return this.request('GET', uri, options);
        };
        this.post = (uri, options) => {
            return this.request('POST', uri, options);
        };
        this.delete = (uri, options) => {
            return this.request('DELETE', uri, options);
        };
        this.put = (uri, options) => {
            return this.request('PUT', uri, options);
        };
        this.patch = (uri, options) => {
            return this.request('PATCH', uri, options);
        };
        const client = axios_1.default.create({
            baseURL: baseUrl,
            headers: { ...headers },
        });
        client.interceptors.request.use(request => {
            // console.log('Starting Request', JSON.stringify(request, null, 2))
            return request;
        });
        this.baseUrl = baseUrl;
        this.request = async (method, url, options) => {
            const builtOptions = await ApiClient.buildOptions(options, headers, requestInterceptor);
            return client
                .request({
                method,
                url: url + (options ? '?' + (0, Common_1.objectToQueryString)(options.qs) : ''),
                headers: builtOptions === null || builtOptions === void 0 ? void 0 : builtOptions.headers,
                // TODO(Alex) Check if it works
                // params: options?.qs,
                data: options === null || options === void 0 ? void 0 : options.body,
                paramsSerializer: {
                    encode: params => qs.stringify(params, { arrayFormat: 'repeat' }),
                }
            })
                .then(mapData !== null && mapData !== void 0 ? mapData : ((_) => _.data))
                .catch(mapError !== null && mapError !== void 0 ? mapError : ((_) => {
                var _b, _c;
                const request = { method, url, qs: options === null || options === void 0 ? void 0 : options.qs, body: options === null || options === void 0 ? void 0 : options.body };
                if (_.response && _.response.data) {
                    const message = (_c = (_b = _.response.data.details) !== null && _b !== void 0 ? _b : _.response.data.timeout) !== null && _c !== void 0 ? _c : JSON.stringify(_.response.data);
                    throw new ApiError(message, {
                        code: _.response.status,
                        id: _.response.data.type,
                        request,
                        error: _,
                    });
                }
                throw new ApiError(`Something not caught went wrong`, {
                    code: 'front-side',
                    error: _,
                    request,
                });
            }));
        };
        /**
         * TODO(Alex) Didn't find any way to download pdf with axios so I did it using fetch(), but it should exist.
         */
        const requestUsingFetchApi = async (method, url, options) => {
            const builtOptions = await ApiClient.buildOptions(options, headers, requestInterceptor);
            return fetch(baseUrl + url + ((options === null || options === void 0 ? void 0 : options.qs) ? `?${qs.stringify(options.qs, { arrayFormat: 'repeat' })}` : ''), {
                method,
                headers: builtOptions === null || builtOptions === void 0 ? void 0 : builtOptions.headers,
                body: builtOptions.body ? JSON.stringify(builtOptions === null || builtOptions === void 0 ? void 0 : builtOptions.body) : undefined,
            });
        };
        this.postGetPdf = async (url, options) => {
            return requestUsingFetchApi('POST', url, options).then(_ => _.blob());
        };
        this.getPdf = async (url, options) => {
            return requestUsingFetchApi('GET', url, options).then(_ => _.blob());
        };
    }
}
exports.ApiClient = ApiClient;
_a = ApiClient;
ApiClient.buildOptions = async (options, headers, requestInterceptor = _ => _) => {
    const interceptedOptions = await requestInterceptor(options);
    return {
        ...interceptedOptions,
        headers: { ...headers, ...interceptedOptions === null || interceptedOptions === void 0 ? void 0 : interceptedOptions.headers },
    };
};
//# sourceMappingURL=ApiClient.js.map