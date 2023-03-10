import {NextFunction, Request, Response} from 'express'
import {KoboClient} from '../../connector/kobo/KoboClient/KoboClient'
import {Client} from 'pg'
import {Logger} from '../../utils/Logger'
import {KoboTransformClient} from '../../connector/kobo/KoboFormTransformer/KoboTransformer'
import {koboTransformerNfiMpcaMyko} from '../../connector/kobo/KoboFormTransformer/KoboTransformerNfiMpcaMyko'
import {sub} from 'date-fns'
import {babyKits, KoboNfiMcpa, koboTransformerNfiMcpa, nfis, NFIs, Program, winterizationKits} from '../../connector/kobo/KoboFormTransformer/KoboNfiMcpa'
import {Controller} from './Controller'
import {Arr, Enum} from '@alexandreannic/ts-utils'
import {koboTransformerNfiMcpaNaa} from '../../connector/kobo/KoboFormTransformer/KoboTransformerNfiMpcaNAA'

export interface NfiaMpcaStats extends NFIs<number> {
  submissions: number,
  individuals: number
  mpcaSubmissions: number
  nfiSubmissions: number
  cashForRentSubmissions: number
  mpcaIndividuals: number
  nfiIndividuals: number
  cashForRentIndividuals: number
  totalNFIs: number
  totalBabyKits: number
  totalWinterizationKits: number
}

interface Filters {
  start: Date
  end: Date
}

export class ControllerNfiMpca extends Controller {

  constructor(
    private pgClient: Client,
    private koboClient: KoboClient,
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
    res.send(x.results.sort((a, b) => b.start.getTime() - a.start.getTime()).map((_, i) => _._uuid + ' ' + _.start.toISOString() + ' ' + _.start.toLocaleString() + ' ' + i))
  }

  readonly index = async (req: Request, res: Response, next: NextFunction) => {
    this.logger.info(`Try...`)
    const filters = {
      start: new Date(2022, 11, 1),
      end: new Date(2023, 2, 1),
    }

    try {
      const main$ = this.koboTransformClient.getAnswers(koboTransformerNfiMcpa, filters)
      const myko$ = this.koboTransformClient.getAnswers(koboTransformerNfiMpcaMyko, filters)
      const naa$ = this.koboTransformClient.getAnswers(koboTransformerNfiMcpaNaa, filters)
      return Promise.all([
        main$.then(_ => this.reduce(_.results)),
        myko$.then(_ => this.reduce(_.results)),
        naa$.then(_ => this.reduce(_.results)),
      ]).then(([main, myko, naa]) => res.send({total: Arr([main, myko, naa]).sumObjects(), main, myko, naa}))
    } catch (e) {
      next(e)
    }
    // res.send({blanks, kits, counts: fcrmMpcaAnswers.length})
  }

  private readonly searchNfi = async (filters: Filters) => {
    return this.koboTransformClient.getAnswers(koboTransformerNfiMcpa, filters)
  }

  private readonly reduce = (input: KoboNfiMcpa[]): NfiaMpcaStats => {
    const init = {
      submissions: 0,
      individuals: 0,
      nfiSubmissions: 0,
      nfiIndividuals: 0,
      mpcaSubmissions: 0,
      mpcaIndividuals: 0,
      cashForRentSubmissions: 0,
      cashForRentIndividuals: 0,
      totalBabyKits: 0,
      totalNFIs: 0,
      totalWinterizationKits: 0,
      ...nfis.reduce((acc, curr) => ({...acc, [curr]: 0}), {} as NFIs<number>)
    }
    const stats = input.reduce<NfiaMpcaStats>((acc, curr) => {
      const res = {} as NfiaMpcaStats
      if (curr.program?.includes(Program.MPCA)) {
        res.mpcaIndividuals = acc.mpcaIndividuals + (curr.houseHoldSize ?? 0)
        res.mpcaSubmissions = acc.mpcaSubmissions + 1
      }
      if (curr.program?.includes(Program.NFI)) {
        res.nfiIndividuals = acc.nfiIndividuals + (curr.houseHoldSize ?? 0)
        res.nfiSubmissions = acc.nfiSubmissions + 1
      }
      if (curr.program?.includes(Program.CashForRent)) {
        res.cashForRentIndividuals = acc.cashForRentIndividuals + (curr.houseHoldSize ?? 0)
        res.cashForRentSubmissions = acc.cashForRentSubmissions + 1
      }

      return {
        ...acc,
        ...res,
        submissions: acc.submissions + 1,
        individuals: acc.individuals + curr.houseHoldSize,
        ...Enum.keys(curr.kits as NFIs<number>).reduce((nfis, k) => ({
          ...nfis,
          [k]: acc[k] + curr.kits[k]!,
        }), {} as NFIs<number>)
      }
    }, init)
    return {
      ...stats,
      totalNFIs: Arr(nfis).map(_ => stats[_]).sum(),
      totalBabyKits: Arr(babyKits).map(_ => stats[_]).sum(),
      totalWinterizationKits: Arr(winterizationKits).map(_ => stats[_]).sum(),
    }
  }

  private readonly getAll = async (filters: Filters): Promise<KoboNfiMcpa[]> => {
    return await Promise.all([
      this.koboTransformClient.getAnswers(koboTransformerNfiMcpa, filters),
      this.koboTransformClient.getAnswers(koboTransformerNfiMpcaMyko, filters),
      this.koboTransformClient.getAnswers(koboTransformerNfiMcpaNaa, filters),
    ]).then(_ => _.flatMap(_ => _.results))
  }
}
