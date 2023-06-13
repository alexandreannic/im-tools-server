import {PrismaClient} from '@prisma/client'
import {ApiPaginate, ApiPagination, defaultPagination, toApiPaginate} from '../../core/Type'
import {KoboAnswersFilters} from '../../server/controller/ControllerKobo'
import {DBKoboAnswer, KoboAnswerMetaData, KoboId} from '../connector/kobo/KoboClient/type/KoboAnswer'
import {koboFormsId} from '../../core/conf/KoboFormsId'
import XlsxPopulate from 'xlsx-populate'
import {KoboSdkGenerator} from './KoboSdkGenerator'
import {filterKoboQuestionType, KoboApiQuestion} from '../connector/kobo/KoboClient/type/KoboApiForm'
import {Arr, Enum, fnSwitch} from '@alexandreannic/ts-utils'
import {format} from 'date-fns'
import {ProtHHS_2_1Options} from '../../db/koboInterface/ProtHHS_2_1/ProtHHS_2_1Options'
import {convertNumberIndexToLetter} from '../../utils/Common'

export interface Period {
  start: Date
  end: Date
}

export class KoboService {

  constructor(
    private prisma: PrismaClient,
    private sdkGenerator: KoboSdkGenerator = new KoboSdkGenerator(prisma)
  ) {

  }

  readonly fetchForms = async () => {
    const z = this.prisma.koboAnswers.findMany({
      distinct: 'formId'
    })
  }

  readonly fetchAnswers = (
    formId: string,
    filters: KoboAnswersFilters,
    paginate: ApiPagination = defaultPagination
  ): Promise<ApiPaginate<DBKoboAnswer>> => {
    return this.prisma.koboAnswers.findMany({
      take: paginate.limit,
      skip: paginate.offset,
      where: {
        deletedAt: null,
        end: {
          gte: filters.start,
          lt: filters.end,
        },
        formId,
        ...filters.filterBy?.reduce((acc, curr) => ({
          answers: {
            path: [curr.column],
            string_contains: curr.value
          }
        }), {})
        // end: {
        //   gte: filters.start,
        //   lte: filters.end,
        // }
      }
    }).then(_ => _.map(d => ({
      start: d.start,
      end: d.end,
      version: d.version,
      attachments: d.attachments,
      geolocation: d.geolocation,
      submissionTime: d.submissionTime,
      id: d.id,
      validationStatus: d.validationStatus as any,
      validatedBy: d.validatedBy ?? undefined,
      lastValidatedTimestamp: d.lastValidatedTimestamp ?? undefined,
      answers: d.answers as any,
      formId: d.formId
    }))).then(toApiPaginate)
  }

  readonly generateXLSForHHS = async ({start, end}: {start?: Date, end?: Date}) => {
    console.log('generate')
    const filePattern = (oblast: string) => `drc.ua.prot.hh2.${start ? format(start, 'yyyy-MM') + '.' : ''}${oblast}`
    const oblasts: (keyof typeof ProtHHS_2_1Options.staff_to_insert_their_DRC_office)[] = [
      'chernihiv',
      'lviv',
      'kharkiv',
      'mykolaiv',
      'dnipro',
    ]
    const requests = oblasts.map(oblast => this.fetchAnswers(koboFormsId.prod.protectionHh_2_1, {
      start: start,
      end: end,
      filterBy: [{
        column: 'staff_to_insert_their_DRC_office',
        value: oblast
      }]
    }))
    const requestAll = this.fetchAnswers(koboFormsId.prod.protectionHh_2_1, {
      start: start,
      end: end,
    })
    await Promise.all([requestAll, ...requests]).then(_ => _.map(_ => _.data)).then(([
      all,
      chernihiv,
      lviv,
      kharkiv,
      mykolaiv,
      dnipro,
    ]) => {
      return [
        this.generateXLSFromAnswers({
          fileName: filePattern('all'),
          formId: koboFormsId.prod.protectionHh_2_1,
          langIndex: 0,
          data: all,
        }),
        this.generateXLSFromAnswers({
          fileName: filePattern('chernihivska'),
          formId: koboFormsId.prod.protectionHh_2_1,
          langIndex: 0,
          data: chernihiv,
          password: 'HHDataCEJ$!', //113
        }),
        this.generateXLSFromAnswers({
          fileName: filePattern('lvivska'),
          formId: koboFormsId.prod.protectionHh_2_1,
          langIndex: 0,
          data: lviv,
          password: 'YW!(78', // 143
        }),
        this.generateXLSFromAnswers({
          fileName: filePattern('kharkivska'),
          formId: koboFormsId.prod.protectionHh_2_1,
          langIndex: 0,
          data: kharkiv,
          password: 'ZK38^&', // 59
        }),
        this.generateXLSFromAnswers({
          fileName: filePattern('mykolaivska'),
          formId: koboFormsId.prod.protectionHh_2_1,
          langIndex: 0,
          data: mykolaiv,
          password: 'b53d', // 104
        }),
        this.generateXLSFromAnswers({
          fileName: filePattern('dnipropetrovska'),
          formId: koboFormsId.prod.protectionHh_2_1,
          langIndex: 0,
          data: dnipro,
          password: 'PL09!@', // 47
        }),
      ]
    })
  }

  readonly getFormDetails = async (formId: KoboId) => {
    const dbForm = await this.prisma.koboForm.findFirstOrThrow({where: {id: formId}})
    const sdk = await this.sdkGenerator.construct(dbForm.serverId)
    return await sdk.getForm(dbForm.id)
  }

  readonly translateForm = async ({
    formId,
    langIndex,
    data,
  }: {
    formId: KoboId,
    langIndex: number,
    data: DBKoboAnswer[],
  }) => {
    const flatAnswers = data.map(({answers, ...meta}) => ({...meta, ...answers}))
    const koboFormDetails = await this.getFormDetails(formId)
    const indexLabel = Arr(koboFormDetails.content.survey).filter(filterKoboQuestionType).reduceObject<Record<string, KoboApiQuestion>>(_ => [_.name, _])
    const indexOptionsLabels = Arr(koboFormDetails.content.choices).reduceObject<Record<string, undefined | string>>(_ => [_.name, _.label?.[langIndex]])
    return flatAnswers.map(d => {
      const translated = {} as DBKoboAnswer
      Enum.keys(d).forEach(k => {
        const translatedKey = indexLabel[k]?.label?.[langIndex] ?? k
        const translatedValue = (() => {
          if (k === 'submissionTime') {
            return format(d[k], 'yyyy-MM-dd')
          }
          return fnSwitch(indexLabel[k]?.type, {
            'select_multiple': () => d[k]?.split(' ').map(_ => indexOptionsLabels[_]).join('|'),
            'start': () => format(d[k], 'yyyy-MM-dd'),
            'end': () => format(d[k], 'yyyy-MM-dd'),
          }, _ => indexOptionsLabels[d[k]] ?? d[k])
        })()
        translated[translatedKey.replace(/(<([^>]+)>)/gi, '')] = translatedValue
      })
      return translated
    })
  }

  readonly generateXLSFromAnswers = async ({
    fileName,
    formId,
    data,
    langIndex,
    password,
  }: {
    fileName: string
    formId: KoboId,
    data: DBKoboAnswer[],
    langIndex?: number
    password?: string
  }) => {
    const koboFormDetails = await this.getFormDetails(formId)
    const translated = langIndex !== undefined ? await this.translateForm({formId, langIndex, data}) : data
    const flatTranslated = translated.map(({answers, ...meta}) => ({...meta, ...answers}))
    const columns = (() => {
      const metaColumns: (keyof KoboAnswerMetaData)[] = ['id', 'submissionTime', 'version']
      const schemaColumns = koboFormDetails.content.survey.filter(filterKoboQuestionType)
        .map(_ => langIndex !== undefined && _.label
          ? _.label[langIndex]?.replace(/(<([^>]+)>)/gi, '') ?? _.name
          : _.name)
      return [...metaColumns, ...schemaColumns]
    })()
    const workbook = await XlsxPopulate.fromBlankAsync()
    const sheet = workbook.sheet('Sheet1')
    sheet.cell('A1').value([columns] as any)
    sheet.cell('A2').value(flatTranslated.map(a =>
      columns.map(_ => a[_])
    ) as any)

    const findColumnByName = (name: string) => convertNumberIndexToLetter(Object.keys(columns).indexOf(name))

    sheet.freezePanes(2, 1)
    // const ['start', 'end', 'su']
    sheet.column('A').width(11)
    sheet.column('B').width(11)
    sheet.row(1).style({
      'bold': true,
      'fill': 'f2f2f2',
      'fontColor': '6e7781',
    })

    workbook.toFileAsync(`/Users/alexandreac/Workspace/_humanitarian/im-tools-server/${fileName}.xlsx`, {password})
  }
}

// IPTHELP
// all - 113
// chernihivska - 143
// lvivska - 59
// kharkivska - 104
// mykolaivska - 47
// = 466

// myko - 265
// lviv - 397
// khv - 158
// dni - 95
// chv - 276
// 265 + 397 + 158 + 95 + 276 = 1191

//V2.1  461 / 834
//V2    22 / 51
//      483 / 885