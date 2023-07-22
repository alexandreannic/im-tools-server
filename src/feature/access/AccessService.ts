import {FeatureAccessLevel, PrismaClient} from '@prisma/client'
import {AppFeature} from './AccessType'
import {yup} from '../../helper/Utils'
import {Enum} from '@alexandreannic/ts-utils'
import {InferType} from 'yup'
import {DrcJob, DrcOffice} from '../../core/DrcType'
import {UserSession} from '../session/UserSession'

export type AccessSearchParams = InferType<typeof AccessService.searchSchema>
export type AccessCreateParams = InferType<typeof AccessService.createSchema>

export class AccessService {

  constructor(private prisma: PrismaClient) {
  }

  static readonly createSchema = yup.object({
    accessLevel: yup.mixed<FeatureAccessLevel>().oneOf(Enum.values(FeatureAccessLevel)).required(),
    drcJob: yup.mixed<DrcJob>().oneOf(Enum.values(DrcJob)),
    drcOffice: yup.mixed<DrcOffice>().oneOf(Enum.values(DrcOffice)),
    email: yup.string(),
    featureId: yup.mixed<AppFeature>().oneOf(Enum.values(AppFeature)),
    params: yup.mixed().optional(),
  })

  static readonly searchSchema = yup.object({
    email: yup.string(),
    featureId: yup.mixed<AppFeature>().oneOf(Enum.values(AppFeature))
  })

  readonly add = (body: AccessCreateParams) => {
    return this.prisma.featureAccess.create({
      data: {
        level: body.accessLevel,
        drcJob: body.drcJob,
        drcOffice: body.drcOffice,
        email: body.email,
        featureId: body.featureId,
        params: body.params,
      },
    })
  }

  readonly search = (search: AccessSearchParams) => {
    return this.prisma.featureAccess.findMany({where: search})
  }

  readonly byUser = (user: UserSession) => {
    console.log(user)
    return this.prisma.featureAccess.findMany({
      where: {
        OR: {
          email: user.email,
          AND: {
            drcJob: user.drcJob,
            drcOffice: {in: user.drcOffice},
          }
        }
      },
    })
  }
}
