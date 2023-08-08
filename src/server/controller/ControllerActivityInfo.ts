import {NextFunction, Request, Response} from 'express'
import {ActivityInfoSdk} from '../../feature/activityInfo/sdk/ActivityInfoSdk'
import {logger, Logger} from '../../helper/Logger'
import {appConf} from '../../core/conf/AppConf'
import {AppError} from '../../helper/Errors'

export class ControllerActivityInfo {

  constructor(
    private api = new ActivityInfoSdk(),
    private conf = appConf,
    private log: Logger = logger('ControllerActivityInfo')
  ) {

  }

  readonly submitActivity = async (req: Request, res: Response, next: NextFunction) => {
    const activities = req.body
    try {
      if (req.session.user?.email !== this.conf.ownerEmail) {
        throw new AppError.Forbidden('only_owner_can_submit_ai')
      }
      this.log.info(`Insert ${activities.length} activities`)
      const status = await Promise.all(activities.map(this.api.publish))
      if (status.find(_ => !!_.code)) {
        console.error(status)
        throw new AppError.BadRequest('cannot insert activity')
      }
      this.log.info(`${activities.length} activities inserted !`)
      res.send()
    } catch (e) {
      console.error(activities)
      this.log.error(`Failed to insert ${activities.length} activities`)
      console.error(e)
      throw e
    }
  }
}
