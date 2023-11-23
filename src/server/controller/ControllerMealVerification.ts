import {NextFunction, Request, Response} from 'express'
import * as yup from 'yup'
import {Enum} from '@alexandreannic/ts-utils'
import {MealVerificationAnswersStatus} from '../../feature/mealVerfication/MealVerificationType'
import {PrismaClient} from '@prisma/client'
import {MealVerificationService} from '../../feature/mealVerfication/MealVerificationService'

export class MealVerificationSchema {
  static readonly id = yup.object({
    id: yup.string().required()
  })
  static readonly answers = yup.object({
    koboAnswerId: yup.string().required(),
    status: yup.mixed<MealVerificationAnswersStatus>().oneOf(Enum.values(MealVerificationAnswersStatus)).optional(),
  })
  static readonly create = yup.object({
    activity: yup.string().required(),
    name: yup.string().required(),
    desc: yup.string().optional(),
    filters: yup.mixed().required(),
    answers: yup.array().of(MealVerificationSchema.answers.required()).required(),
  })
}

export class ControllerMealVerification {

  constructor(
    private prisma: PrismaClient,
    private service = new MealVerificationService(prisma)
  ) {

  }

  readonly create = async (req: Request, res: Response, next: NextFunction) => {
    const body = await MealVerificationSchema.create.validate(req.body)
    const data = await this.service.create({...body, createdBy: req.session.user?.email ?? 'unknown'})
    res.send(data)
  }

  readonly getAll = async (req: Request, res: Response, next: NextFunction) => {
    const data = await this.service.getAll()
    res.send(data)
  }

  readonly getAnswers = async (req: Request, res: Response, next: NextFunction) => {
    const {id} = await MealVerificationSchema.id.validate(req.params)
    const data = await this.service.getAnswers(id)
    res.send(data)
  }

  readonly remove = async (req: Request, res: Response, next: NextFunction) => {
    const {id} = await MealVerificationSchema.id.validate(req.params)
    await this.service.remove(id)
    res.send(id)
  }
}