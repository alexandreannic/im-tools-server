import {KoboSdkGenerator} from '../../feature/kobo/KoboSdkGenerator'
import {PrismaClient} from '@prisma/client'
import fs from 'fs'
import {appConf} from '../../core/conf/AppConf'
import * as csvToJson from 'csvtojson'
import {PromisePool} from '@supercharge/promise-pool'
import {Enum, fnSwitch, Seq, seq} from '@alexandreannic/ts-utils'
import {ImporterGroupSessionHrk} from './ImporterGroupSessionHrk'
import {ImportPssLwo} from './ImporterPssLwo'
import {ImportPssCej} from './ImporterPssCej'
import {ImporterGroupSessionCej} from './ImporterGroupSessionCej'


(async () => {
  const config = {
    importConcurrency: 50,
    baseFilePath: '/src/script/2024-01-19-importProtectionToKobo/files/',
    fileName: {
      groupSessionCej: 'group-session-cej.csv',
      groupSessionHrk: 'group-session-hrk.csv',
      groupSessionLwo: 'group-session-lwo.csv',
      pssCej: 'pss-cej.csv',
      pssLwo: 'pss-lwo.csv',
    },
    formId: {
      groupSession: 'aMCHFcQ8TkymRqmPz2M3Do',
      pss: 'aPoqNpPkwfUy4HLaJ7Y7v9'
    },
    importComment: (i: number) => `Imported programmatically from CSV tracker. Index: ${i}`
  }

  const prisma = new PrismaClient()

  const sdk = await new KoboSdkGenerator(prisma).getV1('b90ec4b4-4426-48f3-a924-f6a1866ee698')

  const submit = async <TCsv, TCsvTransform = any>({
    formId,
    activity,
    filePath,
    transform,
  }: {
    transform?: (_: Seq<TCsv>) => TCsvTransform[]
    formId: string,
    activity: (csv: TCsvTransform, i: number) => any,
    filePath: string
  }): Promise<void> => {
    const stream = fs.createReadStream(appConf.rootProjectDir + config.baseFilePath + filePath)
    const json: TCsvTransform[] = await csvToJson.default({delimiter: ';'}).fromStream(stream).then(_ => {
      return transform ? transform(seq(_)) : seq(_)
    })
    await PromisePool.withConcurrency(config.importConcurrency).for(json).process(async (j, i) => {
      try {
        const res = await sdk.submit({
          formId,
          data: activity(j, i),
        })
        console.log(res.message ?? res.error)
      } catch (e: any) {
        console.error(e)
      }
    })
  }

  // await submit({
  //   filePath: config.fileName.pssLwo,
  //   formId: config.formId.pss,
  //   activity: (csv, i) => ImportPssLwo.map(csv, config.importComment(i)),
  // })
  // await submit({
  //   filePath: config.filePath.groupSessionLwo,
  //   formId: config.formId.groupSession,
  //   activity: (csv, i) => ImportGroupSessionLwo.map(csv, config.importComment(i)),
  // })
  // await submit<ImporterGroupSessionHrk.Csv>({
  //   filePath: config.fileName.groupSessionHrk,
  //   formId: config.formId.groupSession,
  //   activity: (csv, i) => ImporterGroupSessionHrk.map(csv, config.importComment((i))),
  // })
  await submit<ImportPssCej.Csv, ImportPssCej.GroupedRow>({
    filePath: config.fileName.pssCej,
    formId: config.formId.pss,
    transform: (data) => {
      const gb = data.groupBy(_ => _['Session No'])
      return Enum.values(gb).map((rows) => {
        return {
          ...rows[0],
          participants: rows.map(_ => ({
            hh_char_hh_det_age: +_.Age,
            hh_char_hh_det_gender: fnSwitch(_.Gender, {
              Male: 'male',
              Female: 'female',
            }),
            hh_char_hh_det_status: fnSwitch(_.Status, {
              'Conflict affected': 'unspec',
              'IDP': 'idp',
              'Refugee': 'other',
              'Host community': 'other',
              'IDP Returnee': 'returnee',
            }),
          }))
        }
      })
    },
    activity: (csv, i) => ImportPssCej.map(csv, `Imported programmatically from CSV tracker. Index: ${i}`),
  })
  // await submit<ImporterGroupSessionCej.Csv, ImporterGroupSessionCej.GroupedRow>({
  //   filePath: config.fileName.groupSessionCej,
  //   formId: config.formId.groupSession,
  //   transform: (data) => {
  //     const gb = data.groupBy(_ => _['Session No'])
  //     return Enum.values(gb).map((rows) => {
  //       return {
  //         ...rows[0],
  //         participants: rows.map(_ => ({
  //           hh_char_hh_det_age: +_.Age,
  //           hh_char_hh_det_gender: fnSwitch(_.Gender, {
  //             Male: 'male',
  //             Female: 'female',
  //           }),
  //           hh_char_hh_det_status: fnSwitch(_.Status, {
  //             'Conflict affected': 'unspec',
  //             'IDP': 'idp',
  //             'Host community': 'other',
  //           }),
  //         }))
  //       }
  //     })
  //   },
  //   activity: (csv, i) => ImporterGroupSessionCej.map(csv, `Imported programmatically from CSV tracker. Index: ${i}`),
  // })


  // const res = await sdk.submit({
  //   formId: 'aPoqNpPkwfUy4HLaJ7Y7v9',
  //   data: {
  //     'start': '2024-01-19T11:19:53.161+02:00',
  //     'end': '2024-01-19T11:20:41.495+02:00',
  //     'introduction': {
  //       'date': '2024-01-03',
  //       'staff_to_insert_their_DRC_office': 'dnipro',
  //       'staff_code': 'DNK002',
  //       'staff_code_001': null,
  //       'project': 'okf',
  //       'ben_det_oblast': 'cherkaska',
  //       'ben_det_raion': 'zolotoniskyi',
  //       'ben_det_hromada': 'chornobaivska',
  //       'ben_det_hromada_001': 'ok',
  //       'location': 'locso'
  //     },
  //     'gi': {
  //       'activity': 'mhpss',
  //       'new_ben': 'yes',
  //       'numb_part': 2,
  //       'hh_char_hh_det_count': 2,
  //       'hh_char_hh_det': [
  //         {
  //           'hh_char_hh_det_gender': 'male',
  //           'hh_char_hh_det_age': 1,
  //           'hh_char_hh_det_status': 'idp'
  //         },
  //         {
  //           'hh_char_hh_det_gender': 'female',
  //           'hh_char_hh_det_age': 2,
  //           'hh_char_hh_det_status': 'non-displaced'
  //         }
  //       ],
  //       'top_type_act': 'test',
  //       'comments': 'comment test'
  //     }
  //   }
  //   // "formhub": {
  //   //   "uuid": "b261e0851062476c84026c71cc6ee79b"
  //   // },
  //   // "__version__": "vJ64UQfuCQw5HkRpF7eyhm",
  //   // "meta": {
  //   //   "instanceID": "uuid:52f12d6e-a8fa-42a9-b0ae-4b5f4617f7d1"
  //   // }
  // })
  // console.log(res)

})()