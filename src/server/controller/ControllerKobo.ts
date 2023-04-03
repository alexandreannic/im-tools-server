import {NextFunction, Request, Response} from 'express'
import {KoboClient} from '../../connector/kobo/KoboClient/KoboClient'
import * as yup from 'yup'
import {PrismaClient} from '@prisma/client'
import {ApiClient} from '../../client/ApiClient'
import {UUID} from '../../core/Type'

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
    private pgClient: PrismaClient,
    // private koboClient: KoboClient,
  ) {

  }

  private constructSdk = async (ksId: UUID) => {
    const k = await this.pgClient.koboServer.findFirstOrThrow({where: {id: ksId}})
      .catch(() => this.pgClient.koboServer.findFirstOrThrow())
    return new KoboClient(new ApiClient({
      baseUrl: k.url + '/api',
      headers: {
        Authorization: KoboClient.makeAuthorizationHeader(k.token),
      }
    }))
  }


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

  readonly getAnswers = async (req: Request, res: Response, next: NextFunction) => {
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
