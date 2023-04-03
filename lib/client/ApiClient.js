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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiClient = exports.ApiError = void 0;
const axios_1 = __importDefault(require("axios"));
const qs = __importStar(require("qs"));
const Common_1 = require("../utils/Common");
class ApiError extends Error {
    message;
    details;
    name = 'ApiError';
    constructor(message, details) {
        super(message);
        this.message = message;
        this.details = details;
    }
}
exports.ApiError = ApiError;
class ApiClient {
    postGetPdf;
    getPdf;
    baseUrl;
    request;
    constructor({ baseUrl, headers, requestInterceptor, mapData, mapError }) {
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
                headers: builtOptions?.headers,
                // TODO(Alex) Check if it works
                // params: options?.qs,
                data: options?.body,
                paramsSerializer: {
                    encode: params => qs.stringify(params, { arrayFormat: 'repeat' }),
                }
            })
                .then(mapData ?? ((_) => _.data))
                .catch(mapError ??
                ((_) => {
                    console.warn(_);
                    const request = { method, url, qs: options?.qs, body: options?.body };
                    if (_.response && _.response.data) {
                        const message = _.response.data.details ?? _.response.data.timeout ?? JSON.stringify(_.response.data);
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
            return fetch(baseUrl + url + (options?.qs ? `?${qs.stringify(options.qs, { arrayFormat: 'repeat' })}` : ''), {
                method,
                headers: builtOptions?.headers,
                body: builtOptions.body ? JSON.stringify(builtOptions?.body) : undefined,
            });
        };
        this.postGetPdf = async (url, options) => {
            return requestUsingFetchApi('POST', url, options).then(_ => _.blob());
        };
        this.getPdf = async (url, options) => {
            return requestUsingFetchApi('GET', url, options).then(_ => _.blob());
        };
    }
    static buildOptions = async (options, headers, requestInterceptor = _ => _) => {
        const interceptedOptions = await requestInterceptor(options);
        return {
            ...interceptedOptions,
            headers: { ...headers, ...interceptedOptions?.headers },
        };
    };
    get = (uri, options) => {
        return this.request('GET', uri, options);
    };
    post = (uri, options) => {
        return this.request('POST', uri, options);
    };
    delete = (uri, options) => {
        return this.request('DELETE', uri, options);
    };
    put = (uri, options) => {
        return this.request('PUT', uri, options);
    };
    patch = (uri, options) => {
        return this.request('PATCH', uri, options);
    };
}
exports.ApiClient = ApiClient;
//# sourceMappingURL=ApiClient.js.map