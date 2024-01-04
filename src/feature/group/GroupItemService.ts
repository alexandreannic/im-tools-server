import {FeatureAccessLevel, PrismaClient} from '@prisma/client'
import {yup} from '../../helper/Utils'
import {Enum} from '@alexandreannic/ts-utils'
import {UUID} from '../../core/Type'
import {InferType} from 'yup'
import {AccessService} from '../access/AccessService'

export type GroupItemCreateParams = InferType<typeof GroupItemService.createSchema>
export type GroupItemUpdateParams = InferType<typeof GroupItemService.updateSchema>

export class GroupItemService {

  constructor(private prisma: PrismaClient) {
  }

  static readonly createSchema = yup.object({
    level: AccessService.levelSchema,
    drcJob: yup.array().of(AccessService.drcJobSchema),
    drcOffice: AccessService.drcOfficeSchema,
    email: yup.string(),
  })

  static readonly updateSchema = yup.object({
    level: yup.mixed<FeatureAccessLevel>().oneOf(Enum.values(FeatureAccessLevel)),
    drcJob: AccessService.drcJobSchema,
    drcOffice: AccessService.drcOfficeSchema,
  })

  readonly create = (groupId: UUID, body: GroupItemCreateParams) => {
    return Promise.all((body.drcJob ?? [undefined]).map(drcJob =>
      this.prisma.groupItem.create({
        data: {
          level: body.level,
          drcJob,
          drcOffice: body.drcOffice,
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
        drcOffice: body.drcOffice,
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