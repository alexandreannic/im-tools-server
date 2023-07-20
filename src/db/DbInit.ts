import {FeatureAccessLevel, Prisma, PrismaClient} from '@prisma/client'
import {koboFormsId, koboServerId} from '../core/conf/KoboFormsId'
import {appConf, AppConf} from '../core/conf/AppConf'
import {AppFeature, KoboDatabaseFeatureParams} from '../feature/access/AccessType'
import {KoboMigrateHHS2} from '../script/KoboMigrateHHS2'

const createdBySystem = 'SYSTEM'

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
      this.createAdmins(),
      this.createServer(),
      this.createAccess(),
    ])
  }

  private readonly fixKoboForms = async () => {
    return Promise.all([
      // new DbHelperBNRE(this.prisma).assignMissingSettlement(),
      // new DbHelperProtectionHhs2(this.prisma).assignDonor(),
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

  private readonly createAdmins = async () => {
    const adminsEmail = [
      'romane.breton@drc.ngo',
      'isabel.pearson@drc.ngo',
    ]
    return this.upsertUsers(adminsEmail.map(email => ({
      email,
      createdBy: createdBySystem,
      admin: true
    })))
  }

  private readonly createOwner = async () => {
    return this.upsertUsers([
      {
        email: this.conf.ownerEmail,
        admin: true
      }
    ])
  }

  private readonly upsertUsers = async (users: Prisma.UserCreateInput[]) => {
    await Promise.all(users.map(_ =>
      this.prisma.user.upsert({
        update: _,
        create: _,
        where: {email: _.email},
      })
    ))
  }

  private readonly createAccess = async () => {
    await this.prisma.featureAccess.deleteMany({where: {createdBy: createdBySystem}})
    const access: Prisma.FeatureAccessCreateInput[] = [
      {
        createdBy: createdBySystem,
        email: 'romane.breton@drc.ngo',
        featureId: AppFeature.kobo_database,
        level: FeatureAccessLevel.Admin,
        params: KoboDatabaseFeatureParams.create({
          koboFormId: koboFormsId.prod.protectionHh_2_1,
        }),
      },
      {
        createdBy: createdBySystem,
        level: FeatureAccessLevel.Write,
        featureId: AppFeature.kobo_database,
        params: KoboDatabaseFeatureParams.create({
          koboFormId: koboFormsId.prod.mpcaEmergencyRegistration,
          filters: {}
        }),
      },
      {
        createdBy: createdBySystem,
        email: 'niamh.foley@drc.ngo',
        featureId: AppFeature.kobo_database,
        level: FeatureAccessLevel.Admin,
        params: KoboDatabaseFeatureParams.create({
          koboFormId: koboFormsId.prod.mpcaEmergencyRegistration,
          filters: {}
        }),
      },
      {
        createdBy: createdBySystem,
        email: appConf.ownerEmail,
        level: FeatureAccessLevel.Admin,
      }
    ]
    await Promise.all(access.map(_ => this.prisma.featureAccess.create({
      data: _
    })))
  }

  private readonly createServer = async () => {
    const serversCount = await this.prisma.koboServer.count()
    if (serversCount === 0) {
      return Promise.all([
        this.prisma.koboServer.create({
          data: {
            id: koboServerId.prod,
            url: 'https://kobo.humanitarianresponse.info',
            token: appConf.kobo.token,
          }
        }),
        // this.prisma.koboServer.create({
        //   data: {
        //     id: koboServerId.dev,
        //     url: 'https://kf.kobotoolbox.org',
        //     token: 'TODO',
        //   }
        // })
      ])
    }
  }
}


