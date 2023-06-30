import {AppError} from '../../helper/Errors'

export namespace SessionError {

  export class UserNotFound extends AppError.NotFound {
    constructor() {
      super('session_user_not_found')
    }
  }
}

