import {babyKits, KoboNfiMcpa, koboTransformerNfiMcpa, NFIs, nfis, Program, winterizationKits} from '../../feature/connector/kobo/KoboFormTransformer/KoboNfiMcpa'
import {seq, Enum} from '@alexandreannic/ts-utils'
import {koboTransformerNfiMpcaMyko} from '../../feature/connector/kobo/KoboFormTransformer/KoboTransformerNfiMpcaMyko'
import {koboTransformerNfiMcpaNaa} from '../../feature/connector/kobo/KoboFormTransformer/KoboTransformerNfiMpcaNAA'
import {KoboTransformClient} from '../../feature/connector/kobo/KoboFormTransformer/KoboTransformer'
import {KoboSdk} from '../../feature/connector/kobo/KoboClient/KoboSdk'
import {StatsFilters} from './ServiceStats'

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

export class ServiceNfi {

  constructor(
    private koboClient: KoboSdk,
    private koboTransformClient = new KoboTransformClient(koboClient),
  ) {
  }

  readonly getStats = async (filters: StatsFilters): Promise<NfiaMpcaStats> => {
    return this.getAll(filters).then(this.reduceSum)
  }

  readonly getAll = async (filters: StatsFilters): Promise<KoboNfiMcpa[]> => {
    const nfiMcpa = await this.koboTransformClient.getAnswers(koboTransformerNfiMcpa, filters)
    const nfiMpcaMyko = await this.koboTransformClient.getAnswers(koboTransformerNfiMpcaMyko, filters)
    const nfiMcpaNaa = await this.koboTransformClient.getAnswers(koboTransformerNfiMcpaNaa, filters)
    return [
      nfiMcpa,
      nfiMpcaMyko,
      nfiMcpaNaa,
    ].flatMap(_ => _.data)
  }

  readonly reduceSum = (input: KoboNfiMcpa[]): NfiaMpcaStats => {
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
      totalNFIs: seq(nfis).map(_ => stats[_]).sum(),
      totalBabyKits: seq(babyKits).map(_ => stats[_]).sum(),
      totalWinterizationKits: seq(winterizationKits).map(_ => stats[_]).sum(),
    }
  }
}
