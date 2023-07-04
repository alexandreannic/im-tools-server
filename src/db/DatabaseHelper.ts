import {PrismaClient} from '@prisma/client'
import {koboFormsId, koboServerId} from '../core/conf/KoboFormsId'
import {appConf, AppConf} from '../core/conf/AppConf'
import {ApiPaginate} from '../core/Type'
import {AppFeature, DatabaseFeatureParams} from '../feature/access/AccessType'

export class DatabaseHelper {

  constructor() {
  }

  static toPaginate = (totalSize: number) => <T>(data: T[]): ApiPaginate<T> => {
    return {
      data,
      total: totalSize,
    }
  }

  static readonly initializeDatabase = async ({
    prisma,
    conf,
  }: {
    conf: AppConf,
    prisma: PrismaClient
  }) => {
    const createServer = async () => {
      const serversCount = await prisma.koboServer.count()
      if (serversCount === 0) {
        return Promise.all([
          prisma.koboServer.create({
            data: {
              id: koboServerId.prod,
              url: 'https://kobo.humanitarianresponse.info',
              token: 'TODO',
            }
          }),
          prisma.koboServer.create({
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
      if (!await prisma.user.findFirst({where: {email: conf.ownerEmail}})) {
        await prisma.user.create({
          data: {
            email: conf.ownerEmail,
          }
        })
      }
    }

    const createAccess = async () => {
      if (await prisma.featureAccess.count() === 0) {
        await Promise.all([
          prisma.featureAccess.create({
            data: {
              email: 'romane.breton@drc.ngo',
              featureId: AppFeature.DATABASE,
              level: 'ADMIN',
              params: DatabaseFeatureParams.create({
                koboFormId: koboFormsId.prod.protectionHh_2_1,
              }),
            }
          }),
          prisma.featureAccess.create({
            data: {
              email: 'niamh.foley@drc.ngo',
              featureId: AppFeature.DATABASE,
              level: 'ADMIN',
              params: DatabaseFeatureParams.create({
                koboFormId: koboFormsId.prod.mpcaEmergencyRegistration,
                filters: {

                }
              }),
            }
          }),
          prisma.featureAccess.create({
            data: {
              email: appConf.ownerEmail,
              featureId: AppFeature.WFP_DEDUPLICATION,
              level: 'ADMIN',
              updatedAt: new Date(),
            }
          })
        ])
      }

    }

    await Promise.all([
      createOwner(),
      createServer(),
      createAccess(),
    ])
  }
}


