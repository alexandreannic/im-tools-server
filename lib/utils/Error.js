"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpErrorNotExists = exports.httpErrorIf = exports.httpError = exports.HttpError = void 0;
class HttpError extends Error {
    constructor(code, message, error) {
        super(message);
        this.code = code;
        this.message = message;
        this.error = error;
    }
}
exports.HttpError = HttpError;
const httpError = (code, message) => (e) => {
    return Promise.reject(new HttpError(code, message, e));
};
exports.httpError = httpError;
const httpErrorIf = (condition, message, code = 500) => (entity) => {
    return condition(entity) ? Promise.reject(new HttpError(code, message)) : Promise.resolve(entity);
};
exports.httpErrorIf = httpErrorIf;
const httpErrorNotExists = (message) => (entity) => {
    return (entity === undefined) ? Promise.reject(new HttpError(404, message)) : Promise.resolve(entity);
};
exports.httpErrorNotExists = httpErrorNotExists;
//# sourceMappingURL=Error.js.map