import {FeatureAccess, PrismaClient} from '@prisma/client'
import {koboFormsId, koboServerId} from '../core/conf/KoboFormsId'
import {appConf, AppConf} from '../core/conf/AppConf'
import {ApiPaginate} from '../core/Type'
import {AppFeature, DatabaseFeatureParams} from '../feature/access/AccessType'
import {Enum} from '@alexandreannic/ts-utils'
import {KoboId} from '../feature/connector/kobo/KoboClient/type/KoboAnswer'
import {KoboMigrateHHS2} from '../script/KoboMigrateHHS2'
import {DbHelperBNRE} from './koboForm/DbHelperBNRE'
import {DbHelperProtectionHhs2} from './koboForm/DbHelperProtectionHhs2'

export class DbInit {

  constructor(
    private conf: AppConf,
    private prisma: PrismaClient
  ) {
  }

  readonly initializeDatabase = async () => {
    await Promise.all([
      this.migrateHhs2(),
      this.fixKoboForms(),
      this.createOwner(),
      this.createServer(),
      this.createAccess(),
    ])
  }

  private readonly fixKoboForms = async () => {
    return Promise.all([
      new DbHelperBNRE(this.prisma).assignMissingSettlement(),
      new DbHelperProtectionHhs2(this.prisma).assignDonor(),
    ])
  }

  private readonly migrateHhs2 = async () => {
    if (await this.prisma.koboAnswers.count() === 0)
      await KoboMigrateHHS2({
        prisma: this.prisma,
        serverId: koboServerId.prod,
        oldFormId: koboFormsId.prod.protectionHh_2,
        newFormId: koboFormsId.prod.protectionHh_2_1,
      }).run()
  }

  private readonly createOwner = async () => {
    if (!await this.prisma.user.findFirst({where: {email: this.conf.ownerEmail}})) {
      await this.prisma.user.create({
        data: {
          email: this.conf.ownerEmail,
          admin: true
        }
      })
    }
  }

  private readonly createAccess = async () => {
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

  private readonly createServer = async () => {
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
}


