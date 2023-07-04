import {FeatureAccess, PrismaClient} from '@prisma/client'
import {koboFormsId, koboServerId} from '../core/conf/KoboFormsId'
import {appConf, AppConf} from '../core/conf/AppConf'
import {ApiPaginate} from '../core/Type'
import {AppFeature, DatabaseFeatureParams} from '../feature/access/AccessType'
import {Enum} from '@alexandreannic/ts-utils'
import {KoboId} from '../feature/connector/kobo/KoboClient/type/KoboAnswer'

export class DatabaseHelper {

  constructor(
    private conf: AppConf,
    private prisma: PrismaClient
  ) {
  }

  static toPaginate = (totalSize: number) => <T>(data: T[]): ApiPaginate<T> => {
    return {
      data,
      total: totalSize,
    }
  }

  readonly initializeDatabase = async () => {
    const createServer = async () => {
      const serversCount = await this.prisma.koboServer.count()
      if (serversCount === 0) {
        return Promise.all([
          this.prisma.koboServer.create({
            data: {
              id: koboServerId.prod,
              url: 'https://kobo.humanitarianresponse.info',
              token: 'TODO',
            }
          }),
          this.prisma.koboServer.create({
            data: {
              id: koboServerId.dev,
              url: 'https://kf.kobotoolbox.org',
              token: 'TODO',
            }
          })
        ])
      }
    }

    const createOwner = async () => {
      if (!await this.prisma.user.findFirst({where: {email: this.conf.ownerEmail}})) {
        await this.prisma.user.create({
          data: {
            email: this.conf.ownerEmail,
          }
        })
      }
    }

    const createAccess = async () => {
      const createdBySystem = 'system'
      await this.prisma.featureAccess.deleteMany({where: {createdBy: createdBySystem}})
      await Promise.all([
        this.prisma.featureAccess.create({
          data: {
            createdBy: createdBySystem,
            email: 'romane.breton@drc.ngo',
            featureId: AppFeature.database,
            level: 'ADMIN',
            params: DatabaseFeatureParams.create({
              koboFormId: koboFormsId.prod.protectionHh_2_1,
            }),
          }
        }),
        this.prisma.featureAccess.create({
          data: {
            createdBy: createdBySystem,
            email: 'niamh.foley@drc.ngo',
            featureId: AppFeature.database,
            level: 'ADMIN',
            params: DatabaseFeatureParams.create({
              koboFormId: koboFormsId.prod.mpcaEmergencyRegistration,
              filters: {}
            }),
          }
        }),
        ...Enum.values(AppFeature).map(featureId =>
          this.prisma.featureAccess.create({
            data: {
              createdBy: createdBySystem,
              email: appConf.ownerEmail,
              featureId,
              level: 'ADMIN',
            }
          })
        )
      ])
    }

    await Promise.all([
      createOwner(),
      createServer(),
      createAccess(),
    ])
  }
}


