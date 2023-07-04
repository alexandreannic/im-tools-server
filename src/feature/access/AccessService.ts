import {PrismaClient} from '@prisma/client'
import {AppFeature} from './AccessType'
import {yup} from '../../helper/Utils'
import {Enum} from '@alexandreannic/ts-utils'
import {InferType} from 'yup'

export const accessSearchParamsSchema = yup.object({
  email: yup.string(),
  featureId: yup.mixed<AppFeature>().oneOf(Enum.values(AppFeature))
})

type AccessSearchParams = InferType<typeof accessSearchParamsSchema>

export class AccessService {

  constructor(private prisma: PrismaClient) {
  }

  readonly search = (search: AccessSearchParams) => {
    console.log(search)
    return this.prisma.featureAccess.findMany({where: search})
  }
}