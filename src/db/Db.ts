import {PrismaClient} from '@prisma/client'
import {koboServerId} from '../core/conf/KoboFormsId'

export const initializeDatabase = async (prisma: PrismaClient) => {
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