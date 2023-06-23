import {NotFoundError} from '../../helper/Errors'

export namespace SessionError {

  export class UserNotFound extends NotFoundError {
    constructor() {
      super('session_user_not_found')
    }
  }
}

