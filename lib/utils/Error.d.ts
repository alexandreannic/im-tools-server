type StatusCode = 200 | 301 | 302 | 400 | 401 | 403 | 404 | 500 | 504;
export declare class HttpError extends Error {
    code: StatusCode;
    message: string;
    error?: Error | undefined;
    constructor(code: StatusCode, message: string, error?: Error | undefined);
}
export declare const httpError: (code: StatusCode, message: string) => (e?: Error) => Promise<never>;
export declare const httpErrorIf: <T>(condition: (t: T) => boolean, message: string, code?: StatusCode) => (entity: T) => Promise<T>;
export declare const httpErrorNotExists: (message: string) => <T>(entity?: T | undefined) => Promise<T>;
export {};
