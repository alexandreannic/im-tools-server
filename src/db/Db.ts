import {PrismaClient} from '@prisma/client'
import {koboServerId} from '../core/conf/KoboFormsId'
import {AppConf} from '../core/conf/AppConf'

export const initializeDatabase = async ({
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
    if (!await prisma.user.findFirst({where: {email: conf.owner}})) {
      await prisma.user.create({
        data: {
          email: conf.owner,
        }
      })
    }
  }

  await Promise.all([
    createOwner(),
    createServer()
  ])
}

