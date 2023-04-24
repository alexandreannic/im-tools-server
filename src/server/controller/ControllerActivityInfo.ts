import {NextFunction, Request, Response} from 'express'
import {ServiceStats} from '../services/ServiceStats'
import {ActivityInfoSdk} from '../../feature/connector/activity-info/ActivityInfoSdk'
import {AiProtectionHhs} from '../../feature/connector/activity-info/activity/AiProtectionHhs'
import FormParams = AiProtectionHhs.FormParams

export class ControllerActivityInfo {

  constructor(private api = new ActivityInfoSdk()) {

  }

  readonly submitActivity = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const activties: FormParams[] = req.body
      // await Promise.all(activties.map(this.api.publish))
      res.send()
    } catch (e) {
      console.log(e)
      throw e
    }
  }
}
