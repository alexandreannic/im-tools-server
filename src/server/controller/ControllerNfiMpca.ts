import {NextFunction, Request, Response} from 'express'
import {KoboClient} from '../../connector/kobo/KoboClient/KoboClient'
import {Client} from 'pg'
import {Logger} from '../../utils/Logger'
import {KoboTransformClient} from '../../connector/kobo/KoboFormTransformer/KoboTransformer'
import {sub} from 'date-fns'
import {koboTransformerNfiMcpa} from '../../connector/kobo/KoboFormTransformer/KoboNfiMcpa'
import {Controller} from './Controller'
import {ServiceNfi} from '../services/ServiceNfi'
import {koboTransformerNfiMpcaMyko} from '../../connector/kobo/KoboFormTransformer/KoboTransformerNfiMpcaMyko'
import {koboTransformerNfiMcpaNaa} from '../../connector/kobo/KoboFormTransformer/KoboTransformerNfiMpcaNAA'
import {Arr} from '@alexandreannic/ts-utils'
import {koboFormsId} from '../../conf/KoboFormsId'

export class ControllerNfiMpca extends Controller {

  constructor(
    private koboClient: KoboClient,
    private service: ServiceNfi,
    private logger: Logger,
    private koboTransformClient = new KoboTransformClient(koboClient)
  ) {
    super({errorKey: 'monitoring'})
  }

  readonly raw = async (req: Request, res: Response, next: NextFunction) => {
    const start = sub(new Date(2022, 11, 1), {days: 0})
    const end = sub(new Date(2023, 2, 1), {days: 0})
    const x = await this.koboTransformClient.getAnswers(koboTransformerNfiMcpa, {start, end})
    // const x = await this.koboTransformClient.getAnswers(koboTransformerNfiMpcaMyko, {start, end})
    // const x = await this.koboClient.getAnswers(koboFormsId.prod.fcrmMpcaNAA)
    res.send(x.data.sort((a, b) => b.start.getTime() - a.start.getTime()).map((_, i) => _._uuid + ' ' + _.start.toISOString() + ' ' + _.start.toLocaleString() + ' ' + i))
  }

  readonly index = async (req: Request, res: Response, next: NextFunction) => {
    const filters= {
      start: new Date(2022, 11, 1),
      end: new Date(2023, 2, 1)
    }
    const nfiMcpa = await this.koboTransformClient.getAnswers(koboTransformerNfiMcpa, filters).then(_ => this.service.reduceSum(_.data))
    const nfiMpcaMyko = await this.koboTransformClient.getAnswers(koboTransformerNfiMpcaMyko, filters).then(_ => this.service.reduceSum(_.data))
    const nfiMcpaNaa = await this.koboTransformClient.getAnswers(koboTransformerNfiMcpaNaa, filters).then(_ => this.service.reduceSum(_.data))
    res.send({
      total: Arr([nfiMcpa, nfiMpcaMyko, nfiMcpaNaa]).sumObjects(),
      nfiMcpa,
      nfiMpcaMyko,
      nfiMcpaNaa,
    })
  }
}
