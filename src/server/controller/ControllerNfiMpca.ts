import {NextFunction, Request, Response} from 'express'
import {KoboSdk} from '../../feature/connector/kobo/KoboClient/KoboSdk'
import {Client} from 'pg'
import {Logger} from '../../helper/Logger'
import {KoboTransformClient} from '../../feature/connector/kobo/KoboFormTransformer/KoboTransformer'
import {sub} from 'date-fns'
import {koboTransformerNfiMcpa} from '../../feature/connector/kobo/KoboFormTransformer/KoboNfiMcpa'
import {Controller} from './Controller'
import {ServiceNfi} from '../services/ServiceNfi'
import {koboTransformerNfiMpcaMyko} from '../../feature/connector/kobo/KoboFormTransformer/KoboTransformerNfiMpcaMyko'
import {koboTransformerNfiMcpaNaa} from '../../feature/connector/kobo/KoboFormTransformer/KoboTransformerNfiMpcaNAA'
import {seq} from '@alexandreannic/ts-utils'
import {koboFormsId} from '../../core/conf/KoboFormsId'

export class ControllerNfiMpca extends Controller {

  constructor(
    private koboClient: KoboSdk,
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
    res.send(x.data.sort((a, b) => b.start.getTime() - a.start.getTime()).map((_, i) => _.id + ' ' + _.start.toISOString() + ' ' + _.start.toLocaleString() + ' ' + i))
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
      total: seq([nfiMcpa, nfiMpcaMyko, nfiMcpaNaa]).sumObjects(),
      nfiMcpa,
      nfiMpcaMyko,
      nfiMcpaNaa,
    })
  }
}
