import {NextFunction, Request, Response} from 'express'
import {yup} from '../../helper/Utils'
import {PrismaClient} from '@prisma/client'
import {WfpDeduplicationService} from '../../feature/wfpDeduplication/WfpDeduplicationService'
import {WfPDeduplicationError} from '../../feature/wfpDeduplication/WfpDeduplicationError'
import {WfpDeduplicationUpload} from '../../feature/wfpDeduplication/WfpDeduplicationUpload'
import {appConf} from '../../core/conf/AppConf'

export class ControllerWfp {

  constructor(
    private prisma: PrismaClient,
    private service = new WfpDeduplicationService(prisma),
    private conf = appConf,
  ) {
  }

  readonly uploadTaxIdMapping = async (req: Request, res: Response, next: NextFunction) => {
    if (!req.file) {
      throw new WfPDeduplicationError.NoFileUploaded()
    }
    await this.service.uploadTaxId(req.file.path)
    res.send({})
  }

  readonly refresh = async (req: Request, res: Response, next: NextFunction) => {
    const upload = await WfpDeduplicationUpload.construct(this.conf, this.prisma)
    await upload.saveAll()
    res.send()
  }

  readonly search = async (req: Request, res: Response, next: NextFunction) => {
    const schema = yup.object({
      limit: yup.number().optional(),
      offset: yup.number().optional(),
      taxId: yup.array().of(yup.string().required()),
      createdAtStart: yup.date().optional(),
      createdAtEnd: yup.date().optional(),
    })
    const body = await schema.validate(req.body)
    const data = await this.service.search(body)
    res.send(data)
  }
}