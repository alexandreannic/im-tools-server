import {SessionError} from '../feature/session/SessionErrors'

export class AppError extends Error {
  constructor(message: string) {
    super(message)
  }
}

export const throwError = (error: {new(): AppError}) => (e?: Error) => {
  return Promise.reject(new error())
}

export class NotFoundError extends AppError {
  constructor(message: string) {
    super(message)
  }
}

export class BadRequestError extends AppError {
  constructor(message: string) {
    super(message)
    // this.name = this.constructor.name
  }
}

export class OnUnexpectedError extends AppError {
  constructor(message: string) {
    super(message)
    // this.name = this.constructor.name
  }
}

export class DuplicateError extends AppError {
  constructor(message: string) {
    super(message)
    // this.name = this.constructor.name
  }
}

export class OnCreateError extends AppError {
  constructor(message: string) {
    super(message)
    // this.name = this.constructor.name
  }
}

export class OnUpdateError extends AppError {
  constructor(message: string) {
    super(message)
    // this.name = this.constructor.name
  }
}

export class OnDeleteError extends AppError {
  constructor(message: string) {
    super(message)
    // this.name = this.constructor.name
  }
}

export class OnSearchError extends AppError {
  constructor(message: string) {
    super(message)
    // this.name = this.constructor.name
  }
}

export class AlreadyExistError extends AppError {
  constructor(message: string) {
    super(message)
    // this.name = this.constructor.name
  }
}

export class UserNotFoundError extends AppError {
  constructor(message: string) {
    super(message)
    // this.name = this.constructor.name
  }
}

export class WrongFormatError extends AppError {
  constructor(message: string) {
    super(message)
    // this.name = this.constructor.name
  }
}

