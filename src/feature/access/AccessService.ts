import {FeatureAccess, FeatureAccessLevel, PrismaClient} from '@prisma/client'
import {Access, AppFeatureId, KoboDatabaseFeatureParams, WfpDeduplicationAccessParams} from './AccessType'
import {yup} from '../../helper/Utils'
import {Enum} from '@alexandreannic/ts-utils'
import {InferType} from 'yup'
import {DrcOffice} from '../../core/DrcUa'
import {UserSession} from '../session/UserSession'
import {UUID} from '../../core/Type'
import {logger, Logger} from '../../helper/Logger'
import {GroupItemService} from '../group/GroupItemService'

export type AccessSearchParams = InferType<typeof AccessService.searchSchema>
export type AccessCreateParams = InferType<typeof AccessService.createSchema>


interface SearchByFeature {
  ({featureId, user}: {featureId: AppFeatureId.kobo_database, user?: UserSession}): Promise<Access<KoboDatabaseFeatureParams>[]>
  ({featureId, user}: {featureId: AppFeatureId.wfp_deduplication, user?: UserSession}): Promise<Access<WfpDeduplicationAccessParams>[]>
  ({featureId, user}: {featureId?: AppFeatureId, user?: UserSession}): Promise<Access<any>[]>
}

export class AccessService {

  constructor(
    private prisma: PrismaClient,
    private group: GroupItemService = new GroupItemService(prisma),
    private log: Logger = logger('AccessService'),
  ) {
  }

  static readonly idParamsSchema = yup.object({
    id: yup.string().required(),
  })

  static readonly createSchema = yup.object({
    level: yup.mixed<FeatureAccessLevel>().oneOf(Enum.values(FeatureAccessLevel)).required(),
    drcJob: yup.array().of(yup.string().required()),//yup.mixed<DrcJob>().oneOf(Enum.values(DrcJob)),
    // drcOffice: yup.string().optional(),
    drcOffice: yup.mixed<DrcOffice>().oneOf(Enum.values(DrcOffice)),
    email: yup.string(),
    featureId: yup.mixed<AppFeatureId>().oneOf(Enum.values(AppFeatureId)),
    params: yup.mixed().optional(),
  })

  static readonly updateSchema = yup.object({
    level: yup.mixed<FeatureAccessLevel>().oneOf(Enum.values(FeatureAccessLevel)),
    drcJob: yup.string(),//yup.mixed<DrcJob>().oneOf(Enum.values(DrcJob)),
    drcOffice: yup.mixed<DrcOffice>().oneOf(Enum.values(DrcOffice)),
  })

  static readonly searchSchema = yup.object({
    featureId: yup.mixed<AppFeatureId>().oneOf(Enum.values(AppFeatureId))
  })


  private readonly searchFromAccess = async ({featureId, user}: {featureId?: AppFeatureId, user?: UserSession}) => {
    return this.prisma.featureAccess.findMany({
        distinct: ['id'],
        where: {
          AND: [
            {featureId: featureId},
            ...user ? [{
              OR: [
                {email: {equals: user.email, mode: 'insensitive' as const,}},
                {
                  OR: [
                    {drcOffice: user.drcOffice}, // Replace 'value' with the specific value you want to check against
                    {drcOffice: null},
                    {drcOffice: ''},
                  ],
                  drcJob: {equals: user.drcJob, mode: 'insensitive' as const,}
                }
              ]
            }] : []
          ]
        },
        orderBy: {createdAt: 'desc',}
      }
    )
  }

  private readonly searchFromGroup = async ({featureId, user}: {featureId?: AppFeatureId, user?: UserSession}) => {
    return this.prisma.featureAccess.findMany({
      include: {
        groups: {select: {items: true}},
      },
      where: {
        featureId: featureId,
        groups: user ? {
          some: {
            items: {
              some: {
                OR: [
                  {drcJob: {equals: user.drcJob, mode: 'insensitive' as const,}},
                  {email: {equals: user.email, mode: 'insensitive' as const,}}
                ]
              }
            }
          }
        } : {},
      }
    })
  }

  // @ts-ignore
  readonly searchForUser: SearchByFeature = async ({featureId, user}: any) => {
    const [
      fromGroup,
      fromAccess,
    ] = await Promise.all([
      this.searchFromGroup({featureId, user}),
      this.searchFromAccess({featureId, user}),
    ])
    const tt: FeatureAccess[] = fromAccess
    const zz: FeatureAccess[] = fromGroup.flatMap(accesses => {
      return accesses.groups.flatMap(_ => _.items ?? []).map(_ => {
        const r: FeatureAccess = {
          ...accesses,
          createdAt: _.createdAt,
          level: _.level,
          drcJob: _.drcJob,
          email: _.email,
        }
        return r
      })
    })
    return [...tt, ...zz]
  }


  readonly create = (body: AccessCreateParams) => {
    return Promise.all((body.drcJob ?? [undefined]).map(drcJob =>
      this.prisma.featureAccess.create({
        data: {
          level: body.level,
          drcJob,
          drcOffice: body.drcOffice,
          email: body.email,
          featureId: body.featureId,
          params: body.params,
        },
      })
    ))
  }

  readonly update = (id: UUID, body: InferType<typeof AccessService.updateSchema>) => {
    return this.prisma.featureAccess.update({
      where: {id},
      data: {
        level: body.level,
        drcJob: body.drcJob,
        drcOffice: body.drcOffice,
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
          OR: [{
            groups: {
              some: {
                items: {
                  some: {
                    OR: [
                      {drcJob: {equals: user.drcJob, mode: 'insensitive' as const,}},
                      {email: {equals: user.email, mode: 'insensitive' as const,}}
                    ]
                  }
                }
              }
            }
          }, {
            OR: [
              {email: {equals: user.email, mode: 'insensitive' as const,}},
              {
                OR: [
                  {drcOffice: user.drcOffice},
                  {drcOffice: null},
                  {drcOffice: ''},
                ],
                drcJob: {
                  equals: user.drcJob,
                  mode: 'insensitive' as const,
                }
              }
            ]
          }]
        },
        orderBy: {createdAt: 'desc',}
      }
    )
  }
}
