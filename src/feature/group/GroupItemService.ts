import {FeatureAccessLevel, PrismaClient} from '@prisma/client'
import {yup} from '../../helper/Utils'
import {Enum} from '@alexandreannic/ts-utils'
import {UUID} from '../../core/Type'
import {InferType} from 'yup'

export type GroupItemCreateParams = InferType<typeof GroupItemService.createSchema>
export type GroupItemUpdateParams = InferType<typeof GroupItemService.updateSchema>

export class GroupItemService {

  constructor(private prisma: PrismaClient) {
  }

  static readonly createSchema = yup.object({
    level: yup.mixed<FeatureAccessLevel>().oneOf(Enum.values(FeatureAccessLevel)).required(),
    drcJob: yup.array().of(yup.string().required()),//yup.mixed<DrcJob>().oneOf(Enum.values(DrcJob)),
    email: yup.string(),
  })

  static readonly updateSchema = yup.object({
    level: yup.mixed<FeatureAccessLevel>().oneOf(Enum.values(FeatureAccessLevel)),
    drcJob: yup.string(),//yup.mixed<DrcJob>().oneOf(Enum.values(DrcJob)),
  })

  readonly create = (groupId: UUID, body: GroupItemCreateParams) => {
    return Promise.all((body.drcJob ?? [undefined]).map(drcJob =>
      this.prisma.groupItem.create({
        data: {
          level: body.level,
          drcJob,
          email: body.email,
          groupId,
        },
      })
    ))
  }

  readonly update = (id: UUID, body: GroupItemUpdateParams) => {
    return this.prisma.groupItem.update({
      where: {id},
      data: {
        level: body.level,
        drcJob: body.drcJob,
      },
    })
  }

  readonly remove = (id: UUID) => {
    return this.prisma.groupItem.delete({
      where: {
        id
      },
    })
  }

  readonly getAll = ({groupId}: {groupId: UUID}) => {
    return this.prisma.groupItem.findMany({
      where: {
        groupId,
      }
    })
  }
}