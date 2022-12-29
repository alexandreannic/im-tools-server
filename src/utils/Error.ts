type StatusCode =
  200 |
  301 |
  302 |
  400 |
  401 |
  403 |
  404 |
  500 |
  504;

export class HttpError extends Error {
  constructor(public code: StatusCode, public message: string, public error?: Error) {
    super(message)
  }
}

export const httpError = (code: StatusCode, message: string) => (e?: Error) => {
  return Promise.reject(new HttpError(code, message, e))
}

export const httpErrorIf = <T>(condition: (t: T) => boolean, message: string, code: StatusCode = 500) => (entity: T): Promise<T> => {
  return condition(entity) ? Promise.reject(new HttpError(code, message)) : Promise.resolve(entity)
}

export const httpErrorNotExists = (message: string) => <T>(entity?: T): Promise<T> => {
  return (entity === undefined) ? Promise.reject(new HttpError(404, message)) : Promise.resolve(entity)
}
