import {NextFunction, Request, Response} from 'express'
import {Client} from 'pg'
import {Logger} from '../../utils/Logger'
import {sub} from 'date-fns'
import {LegalaidSdk} from '../../connector/legalaid/LegalaidSdk'
import {Arr} from '@alexandreannic/ts-utils'
import {Controller} from './Controller'

export class ControllerLegalAid extends Controller {

  constructor(
    private pgClient: Client,
    private legalAidSdk: LegalaidSdk,
    private logger: Logger,
  ) {
    super({errorKey: 'monitoring'})
  }

  readonly index = async (req: Request, res: Response, next: NextFunction) => {
    this.logger.info(`Try...`)
    // const start = new Date(2022, 0, 1)
    // const end = new Date(2022, 11, 31)
    const start = sub(new Date(), {days: 3})
    const end = sub(new Date(), {days: 2})

    try {
      this.logger.info(`Done`)
      res.send({})
    } catch (e) {
      next(e)
    }
    // res.send({blanks, kits, counts: fcrmMpcaAnswers.length})
  }
  
  private readonly getLegalAidsData = async (start: Date, end: Date) => {
    const offices = await this.legalAidSdk.fetchOfficesAll()
      .then(_ => Object.values(_).flatMap(_ => _.id))
      .catch(this.error(500, `Cannot fetch offices`))

    const groups$ = this.legalAidSdk.fetchGroupsByOffices({
      offices,
      start,
      end
    }).then(_ => Arr(_.data).sum(_ => _.women + _.men))
      .catch(this.error(500, `Cannot fetch groups`))
    const individuals$ = await this.legalAidSdk.fetchBeneficiariesByOffices({
      offices, start, end
    }).catch(this.error(500, `Cannot fetch individuals`))
    
    return Promise.all([groups$, individuals$]).then(([group, individuals]) => ({group, individuals}))
  }
}
