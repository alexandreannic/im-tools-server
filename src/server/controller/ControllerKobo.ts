import {NextFunction, Request, Response} from 'express'
import {KoboSdk} from '../../connector/kobo/KoboClient/KoboSdk'
import * as yup from 'yup'
import {PrismaClient} from '@prisma/client'
import {ApiClient} from '../../client/ApiClient'
import {UUID} from '../../core/Type'
import {lazy} from '@alexandreannic/ts-utils'
import {getCsv} from '../../connector/kobo/cleanKoboDb/CleadedKoboDbLoader'
import {format} from 'date-fns'
import {KoboService} from '../../feature/KoboService'

interface AnswersFilters {
  start?: Date
  end?: Date
}

const answersFiltersValidation = yup.object({
  start: yup.date(),
  end: yup.date(),
})

export class ControllerKobo {


  constructor(
    private koboSdk: KoboSdk,
    private pgClient: PrismaClient,
    private koboService = new KoboService(koboSdk, pgClient)
  ) {

  }

  private constructSdk = lazy(async (ksId: UUID) => {
    const k = await this.pgClient.koboServer.findFirstOrThrow({where: {id: ksId}})
      .catch(() => this.pgClient.koboServer.findFirstOrThrow())
    return new KoboSdk(new ApiClient({
      baseUrl: k.url + '/api',
      headers: {
        Authorization: KoboSdk.makeAuthorizationHeader(k.token),
      }
    }))
  })


  readonly getServers = async (req: Request, res: Response, next: NextFunction) => {
    const servers = await this.pgClient.koboServer.findMany()
    res.send(servers)
  }

  readonly getForms = async (req: Request, res: Response, next: NextFunction) => {
    const schema = yup.object({
      id: yup.string().required(),
    })
    const {id} = await schema.validate(req.params)
    const sdk = await this.constructSdk(id)
    const forms = await sdk.getForms()
    res.send(forms)
  }

  readonly importAnswers = async (req: Request, res: Response, next: NextFunction) => {
    const schema = yup.object({
      id: yup.string().required(),
      formId: yup.string().required(),
    })
    const {id, formId} = await schema.validate(req.params)
    const sdk = await this.constructSdk(id)
    const answers = await sdk.getAnswers(formId).then(_ => _.data)
    res.status(200).json(answers)
  }

  readonly getAnswersFromLocalCsv = async (req: Request, res: Response, next: NextFunction) => {
    const filters = await answersFiltersValidation.validate(req.query)
    const sdk = await this.constructSdk('746f2270-d15a-11ed-afa1-0242ac120002')
    const localForm = await getCsv(sdk)
    const filtered = localForm.filter(_ =>
      (!filters.start || _.end > format(filters.start, 'yyyy-MM-dd')) &&
      (!filters.end || _.end < format(filters.end, 'yyyy-MM-dd'))
    )
    res.send(filtered)
  }

  readonly synchronizeAnswersFromKoboServer = async (req: Request, res: Response, next: NextFunction) => {
    const {formId} = req.params
    this.koboService.syncImportAnswers(formId)
    res.send()
  }

  readonly getAnswers = async (req: Request, res: Response, next: NextFunction) => {
    const {formId} = req.params
    const filters = await answersFiltersValidation.validate(req.query)
    const answers = await this.koboService.fetchAnswers(formId, filters)
    res.send(answers)
  }

  readonly getAnswersFromKoboServer = async (req: Request, res: Response, next: NextFunction) => {
    const filters = await answersFiltersValidation.validate(req.query)
    const schema = yup.object({
      id: yup.string().required(),
      formId: yup.string().required(),
    })
    const {id, formId} = await schema.validate(req.params)
    const sdk = await this.constructSdk(id)
    try {
      const data = await sdk.getAnswers(formId, filters)
      res.send(data)
    } catch (e) {
      next(e)
    }
  }

  readonly getForm = async (req: Request, res: Response, next: NextFunction) => {
    const schema = yup.object({
      id: yup.string().required(),
      formId: yup.string().required(),
    })
    const {id, formId} = await schema.validate(req.params)
    const sdk = await this.constructSdk(id)
    const form = await sdk.getForm(formId)
    res.send(form)
  }
}
