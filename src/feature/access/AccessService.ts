import {FeatureAccessLevel, PrismaClient} from '@prisma/client'
import {Access, AppFeatureId, KoboDatabaseFeatureParams} from './AccessType'
import {yup} from '../../helper/Utils'
import {Enum} from '@alexandreannic/ts-utils'
import {InferType} from 'yup'
import {DrcJob, DrcOffice} from '../../core/DrcType'
import {UserSession} from '../session/UserSession'

export type AccessSearchParams = InferType<typeof AccessService.searchSchema>
export type AccessCreateParams = InferType<typeof AccessService.createSchema>


interface SearchByFeature {
  ({featureId, user}: {featureId: AppFeatureId.kobo_database, user?: UserSession}): Promise<Access<KoboDatabaseFeatureParams>[]>
  ({featureId, user}: {featureId?: AppFeatureId, user?: UserSession}): Promise<Access<any>[]>
}

export class AccessService {

  constructor(private prisma: PrismaClient) {
  }

  static readonly removeSchema = yup.object({
    id: yup.string().required(),
  })

  static readonly createSchema = yup.object({
    accessLevel: yup.mixed<FeatureAccessLevel>().oneOf(Enum.values(FeatureAccessLevel)).required(),
    drcJob: yup.mixed<DrcJob>().oneOf(Enum.values(DrcJob)),
    drcOffice: yup.mixed<DrcOffice>().oneOf(Enum.values(DrcOffice)),
    email: yup.string(),
    featureId: yup.mixed<AppFeatureId>().oneOf(Enum.values(AppFeatureId)),
    params: yup.mixed().optional(),
  })

  static readonly searchSchema = yup.object({
    featureId: yup.mixed<AppFeatureId>().oneOf(Enum.values(AppFeatureId))
  })

  // @ts-ignore
  readonly search: SearchByFeature = ({featureId, user}: any) => {
    console.log('search', featureId, user?.email)
    return this.prisma.featureAccess.findMany({
        distinct: ['id'],
        where: {
          AND: [
            {featureId: featureId},
            ...user ? [{
              OR: [
                {email: user.email},
                {
                  AND: [
                    {drcJob: user.drcJob ?? null},
                    {drcOffice: user.drcOffice}
                  ]
                }
              ]
            }] : []
          ]
        },
      }
    )
  }

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

  readonly remove = (id: string) => {
    return this.prisma.featureAccess.delete({
      where: {
        id
      },
    })
  }

  readonly byUser = (user: UserSession) => {
    return this.prisma.featureAccess.findMany({
        distinct: ['id'],
        where: {
          OR: [
            {
              email: user.email,
            },
            {
              AND: {
                drcJob: user.drcJob,
                drcOffice: {in: user.drcOffice},
              }
            }
          ]
        },
      }
    )
  }
}
