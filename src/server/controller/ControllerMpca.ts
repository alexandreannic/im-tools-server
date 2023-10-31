import {PrismaClient} from '@prisma/client'
import {MpcaDbService} from '../../feature/mpca/db/MpcaDbService'
import {NextFunction, Request, Response} from 'express'
import * as yup from 'yup'
import {MpcaCachedDb} from '../../feature/mpca/db/MpcaCachedDb'

export class ControllerMpca {

  constructor(
    private prisma: PrismaClient,
    private cache: MpcaCachedDb = MpcaCachedDb.constructSingleton(prisma),
    private service: MpcaDbService = new MpcaDbService(prisma),
  ) {
  }

  readonly refresh = async (req: Request, res: Response, next: NextFunction) => {
    await this.service.refreshNonArchivedForms()
    await this.cache.refresh()
    res.send()
  }

  readonly search = async (req: Request, res: Response, next: NextFunction) => {
    const body = await yup.object({
      filters: yup.object({
        start: yup.date(),
        end: yup.date(),
      })
    }).validate(req.body)
    const data = await this.cache.search(body.filters)
    res.send(data)
  }
}