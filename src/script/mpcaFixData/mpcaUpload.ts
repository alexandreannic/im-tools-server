import * as csvToJson from 'csvtojson'
import fs from 'fs'
import {PrismaClient} from '@prisma/client'
import {scriptConf} from '../ScriptConf'
import {DrcProject} from '../../core/DrcUa'
import {Enum} from '@alexandreannic/ts-utils'
import {KoboService} from '../../feature/kobo/KoboService'

interface XlsFile {
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
  CEJ: 'CEJ Info all payments 2022-2023 MPCA.csv',
  CWC: 'CWC_BHA_Payments.csv',
  DNK: 'DNK_PF_BHA_payments.csv',
  NLV: 'mpca-update-NLV_NN-BHA_Payments.csv',
  HRK: 'HRK Info all payments 2022-2023 MPCA.csv',
}

const extractDrcProject = (input: string): DrcProject | undefined => {
  const code = input.replaceAll(/[^\d]/g, '')
  return Enum.keys(DrcProject).find(_ => _.includes(code)) as any
}

(async () => {
  const prismaDatabaseClient = new PrismaClient()
  const koboService = new KoboService(prismaDatabaseClient)
  const xlsFileAsJson: XlsFile[][] = await Promise.all(
    Enum.values(files).map(_ => csvToJson.default({delimiter: ';'}).fromStream(fs.createReadStream(scriptConf.rootDir + '/mpcaFixData/' + _)))
  )

  let no = 0
  let yes = 0
  let total = 0
  let notFound = 0
  console.log(xlsFileAsJson.flat().length)
  for (const xlsRow of xlsFileAsJson.flat()) {
    // await PromisePool.withConcurrency(20)
    // .for(xlsFileAsJson.flat())
    // .process(async (xlsRow: XlsFile) => {
    const project = extractDrcProject(xlsRow.Project)

    total++
    let commit: Date | undefined
    if (xlsRow['Payment Done'].toLowerCase() === 'YES'.toLowerCase()) {
      commit = new Date()
      yes++
    } else {
      no++
      commit = undefined
    }

    const newTag: Tag = {
      committed: commit,
      projects: project ? [project] : undefined
    }
    const res = await koboService.updateTags({
      answerIds: [xlsRow._ID],
      tags: newTag
    })
    if (res === 0) {
      notFound++
      console.log(xlsRow._ID + '')
    }
  }
  console.log(yes, no, total, notFound)
})()
