import {NextFunction, Request, Response} from 'express'
import {KoboClient} from '../kobo/KoboClient/KoboClient'
import {Client} from 'pg'
import {koboFormsId} from '../conf/KoboFormsId'
import {Logger} from '../utils/Logger'
import {KoboTransformClient} from '../kobo/KoboFormTransformer/KoboTransformer'
import {koboTransformerNfiMpcaMyko} from '../kobo/KoboFormTransformer/KoboTransformerNfiMpcaMyko'
import {sub} from 'date-fns'
import {koboTransformerNfiMcpa, Program, Status} from '../kobo/KoboFormTransformer/KoboTransformerNfiMcpa'
import {koboTransformerNfiMcpaNaa} from '../kobo/KoboFormTransformer/KoboTransformerNfiMpcaNAA'

interface NfiaMpcaResult {
  kits: number
  blanks: number
  mpcaAssistedPeoples?: number
  cashForRent?: number
}

export class AppController {

  constructor(
    private pgClient: Client,
    private koboClient: KoboClient,
    private logger: Logger,
    private koboTransformClient = new KoboTransformClient(koboClient)
  ) {

  }

  readonly index = async (req: Request, res: Response, next: NextFunction) => {
    this.logger.info(`Try...`)
    // const start = new Date(2022, 0, 1)
    // const end = new Date(2022, 11, 31)
    const start = sub(new Date(), {days: 3})
    const end = sub(new Date(), {days: 2})

    try {
      const test = await this.koboClient.getAnswers(
        koboFormsId.prod.protectionHh,
        {start, end}
      )
      // const nfiMpcaData = await this.getNfiData(start, end)
      this.logger.info(`Done`)
      res.send({test})
    } catch (e) {
      next(e)
    }
    // res.send({blanks, kits, counts: fcrmMpcaAnswers.length})
  }
  
  private readonly getNfiData = async (start: Date, end: Date): Promise<NfiaMpcaResult> => {
    const params = {start, end}
    return Promise.all<NfiaMpcaResult>([
      this.koboTransformClient.getAnswers(koboTransformerNfiMcpa, params)
        .then(_ => _.results)
        .then(res => {
          let kits = 0
          let blanks = 0
          let mpcaAssistedPeoples = 0
          let cashForRent = 0
          res.forEach(_ => {
            blanks += _.kits.BLN
            mpcaAssistedPeoples += _.program?.includes(Program.MPCA) ? _.houseHoldSize : 0
            cashForRent += _.program?.includes(Program.CashForRent) ? _.houseHoldSize : 0
            if (_.status === Status.IPD) {
              kits += Object.keys(_.kits ?? {}).reduce((sum, key) => sum + _.kits[key], 0) - _.kits.BLN
            }
          })
          return {kits, blanks, mpcaAssistedPeoples, cashForRent}
        }),
      this.koboTransformClient.getAnswers(koboTransformerNfiMpcaMyko, params)
        .then(_ => _.results)
        .then(res => {
          let kits = 0
          let blanks = 0
          res.forEach(_ => {
            blanks += _.kits.BLN
            kits += Object.keys(_.kits ?? {}).reduce((sum, key) => sum + _.kits[key], 0) - _.kits.BLN
          })
          return {kits, blanks}
        }),
      this.koboTransformClient.getAnswers(koboTransformerNfiMcpaNaa, params)
        .then(_ => _.results)
        .then(res => {
          let kits = 0
          let blanks = 0
          res.forEach(_ => {
            blanks += _.kits.BLN
            kits += Object.keys(_.kits ?? {}).reduce((sum, key) => sum + _.kits[key], 0) - _.kits.BLN
          })
          return {kits, blanks}
        }),
    ]).then(_ => _.reduce((acc, curr) => ({
      kits: acc.kits + curr.kits,
      blanks: acc.blanks + curr.blanks,
      mpcaAssistedPeoples: (acc.mpcaAssistedPeoples ?? 0) + (curr.mpcaAssistedPeoples ?? 0),
      cashForRent: (acc.cashForRent ?? 0) + (curr.cashForRent ?? 0),
    })))
  }

  readonly uploadAnswers = async (req: Request, res: Response, next: NextFunction) => {
    const answers = await this.koboClient.getAnswers(koboFormsId.prod.fcrmMpca)
      .then(_ => _.results)
      .then()
    res.send(answers)

  }
}
