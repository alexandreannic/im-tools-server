import {NextFunction, Request, Response} from 'express'
import {ServiceStats} from '../services/ServiceStats'
import {ActivityInfoSdk} from '../../feature/connector/activity-info/ActivityInfoSdk'
import {AiProtectionHhs} from '../../feature/connector/activity-info/activity/AiProtectionHhs'
import FormParams = AiProtectionHhs.FormParams
import {logger, Logger} from '../../utils/Logger'

export class ControllerActivityInfo {

  constructor(private api = new ActivityInfoSdk(), private log: Logger = logger('ControllerActivityInfo')) {

  }

  readonly submitActivity = async (req: Request, res: Response, next: NextFunction) => {
    const activities = req.body
    try {
      this.log.info(`Insert ${activities.length} activities`)
      await Promise.all(activities.map(this.api.publish))
      this.log.info(`${activities.length} activities inserted !`)
      res.send()
    } catch (e) {
      console.error(activities)
      this.log.error(`Failed to insert ${activities.length} activities`)
      console.log(e)
      throw e
    }
  }
}
