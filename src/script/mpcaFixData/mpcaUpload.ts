import * as csvToJson from 'csvtojson'
import fs from 'fs'
import {PrismaClient} from '@prisma/client'
import {PromisePool} from '@supercharge/promise-pool'
import {KoboMappedAnswersService} from '../../feature/kobo/KoboMappedAnswersService'
import {scriptConf} from '../ScriptConf'
import {DrcProject} from '../../core/DrcUa'
import {Enum} from '@alexandreannic/ts-utils'
import {ControllerKoboAnswer} from '../../server/controller/kobo/ControllerKoboAnswer'
import {KoboService} from '../../feature/kobo/KoboService'
import { string } from 'yup'

interface NlvXlsFile {
  _ID: string
  Project: string
  'Payment Done': string
  Amount: number
  Program: string
}

interface Tag {
  projects?: DrcProject[]
  committed?: Date
}

const files = {
  NLV: scriptConf.rootDir + '/mpcaFixData/mpca-update-NLV_NN-BHA_Payments.csv',
  DNK: scriptConf.rootDir + '/mpcaFixData/DNK_PF_BHA_payments.csv',
}

const extractDrcProject = (input: string): DrcProject | undefined => {
  const code = input.replaceAll(/[^\d]/g, '')
  return Enum.keys(DrcProject).find(_ => _.includes(code)) as any
}

(async () => {
  const prismaDatabaseClient = new PrismaClient()
  const koboService = new KoboService(prismaDatabaseClient)
  const stream = fs.createReadStream(files.DNK)
  const xlsFileAsJson: NlvXlsFile[] = await csvToJson.default({delimiter: ';'}).fromStream(stream)

  await PromisePool.withConcurrency(50)
    .for(xlsFileAsJson)
    .process(async (xlsRow: NlvXlsFile) => {
      const project = extractDrcProject(xlsRow.Project)

      let commit: Date | undefined
      if(xlsRow['Payment Done'] === 'YES') {
        commit = new Date()
      } else {
        commit = undefined
      }

      const newTag: Tag = {
        committed: commit,
        projects: project ? [project] : undefined
      }

      return koboService.updateTags({
        answerIds: [xlsRow._ID],
        tags: newTag
      })
    })
})()
