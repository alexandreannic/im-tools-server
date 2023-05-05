import {KoboSdk} from '../feature/connector/kobo/KoboClient/KoboSdk'
import {Arr, fnSwitch, lazy} from '@alexandreannic/ts-utils'
import {KoboApiForm} from '../feature/connector/kobo/KoboClient/type/KoboApiForm'
import * as fs from 'fs'
import {Logger} from '../utils/Logger'

export const generateForms = async (koboSdk: KoboSdk, outDir: string) => {
  const forms: {name: string, id: string}[] = [
    // {name: 'ProtHHS_2_1', id: 'aQDZ2xhPUnNd43XzuQucVR'},
    // {name: 'MPCA_NFI', id: 'a4Sx3PrFMDAMZEGsyzgJJg'},
    {name: 'MPCA_NFI_NAA', id: 'aBGVXW2N26DaLehmKneuyB'},
    // {name: 'MPCA_NFI_Myko', id: 'a8WAWB9Yxu2jkgk4Ei8GTk'},
    // {name: 'MPCA_NFI_Old', id: 'a3h8Ykmp2C8NFiw5DDGBLz'},
    // {name: 'ProtHHS_2_0', id: 'aRHsewShwZhXiy8jrBj9zf'},
  ]
  return Promise.all(forms.map(f => new KoboFormInterfaceGenerator(koboSdk, {
    outDir,
    formName: f.name,
    formId: f.id,
  }).generate()))
}

const ignoredQuestionTypes: KoboApiForm['content']['survey'][0]['type'][] = [
  'calculate',
  'begin_group',
  'end_group',
  'note',
  'end_repeat',
]

class KoboFormInterfaceGenerator {
  constructor(
    private sdk: KoboSdk,
    private options: {
      outDir: string,
      formName: string,
      formId: string
      // overrideOptionType: Record<string, string>
    }) {
  }

  readonly excludedQuestionNames = [
    'start',
    'end'
  ]

  readonly fixDuplicateName = (survey: KoboApiForm['content']['survey']): KoboApiForm['content']['survey'] => {
    const duplicate: Record<string, number> = {}
    return survey.map(q => {
      if (!q.name) return q
      if (duplicate[q.name] !== undefined) {
        duplicate[q.name] = duplicate[q.name] + 1
        q.name = q.name + duplicate[q.name]
      } else {
        duplicate[q.name] = 0
      }
      return q
    })
  }

  readonly generate = async () => {
    const form = await this.sdk.getForm(this.options.formId)
    const survey = this.fixDuplicateName(form.content.survey)
    const mainInterface = this.generateInterface(survey)
    const options = this.generateOptionsType(survey, form.content.choices)
    const mapping = this.generateFunctionMapping(survey)
    const location = this.options.outDir + '/' + this.options.formName
    if (!fs.existsSync(location)) {
      fs.mkdirSync(location)
    }
    fs.writeFileSync(location + '/' + this.options.formName + '.ts', mainInterface)
    fs.writeFileSync(location + '/' + this.options.formName + 'Options.ts', options)
    fs.writeFileSync(location + '/' + this.options.formName + 'Mapping.ts', mapping)
  }

  readonly extractQuestionNameFromGroupFn = `
const extractQuestionName = (_: Record<string, any>) => {
  const output: any = {}
  Object.entries(_).forEach(([k, v]) => {
    const arr = k.split('/')
    const qName = arr[arr.length - 1]
    output[qName] = v
  })
  return output
}`

  readonly generateFunctionMapping = (survey: KoboApiForm['content']['survey']) => {
    const repeatsGroup = this.getBeginRepeatQuestion(survey)
    const fnMappings = survey
      .filter(this.skipQuestionInBeginRepeat(survey))
      .map(x => {
        const name = x.name ?? x.$autoname
        return [
          name,
          fnSwitch(x.type, {
            integer: `_.${name} ? +_.${name} : undefined`,
            date: `_.${name} ? new Date(_.${name}) : undefined`,
            select_multiple: `_.${name}?.split(' ')`,
            begin_repeat: `_.${name}.map(extractQuestionName)`
          }, _ => undefined)
        ]
      })
      .filter(_ => _[1] !== undefined)
    return `import {${this.options.formName}} from './${this.options.formName}'\n\n`
      + this.extractQuestionNameFromGroupFn + '\n\n'
      + `export const map${this.options.formName} = (_: Record<keyof ${this.options.formName}, any>): ${this.options.formName} => ({\n`
      + `\t..._,\n`
      + `${fnMappings.map(([questionName, fn]) => `\t${questionName}: ${fn},`).join('\n')}\n`
      + `}) as ${this.options.formName}`
  }

  readonly skipQuestionInBeginRepeat = (survey: KoboApiForm['content']['survey']) => (_: KoboApiForm['content']['survey'][0]) => {
    const repeatsGroup = this.getBeginRepeatQuestion(survey)
    return _ => _.type === 'begin_repeat' || repeatsGroup.every(r => !_.$qpath.includes(r.name))
  }

  readonly getBeginRepeatQuestion = lazy((survey: KoboApiForm['content']['survey']) => {
    return survey.filter(_ => _.type === 'begin_repeat')
  })

  readonly generateInterface = (survey: KoboApiForm['content']['survey']) => {
    const indexOptionId = Arr(survey).groupBy(_ => _.select_from_list_name)
    // const repeatsGroup = survey.filter(_ => _.type === 'begin_repeat')
    const properties = survey
      .filter(_ => !ignoredQuestionTypes.includes(_.type))
      .filter(this.skipQuestionInBeginRepeat(survey))
      .map(x => {
        const lastQuestionNameHavingOptionId = Arr(indexOptionId[x.select_from_list_name ?? '']).last?.name
        const basicQuestionTypeMapping = {
          'select_one': `Opt<'${lastQuestionNameHavingOptionId}'>`,
          'select_multiple': `Opt<'${lastQuestionNameHavingOptionId}'>[]`,
          'integer': 'number | undefined',
          'text': 'string | undefined',
          'date': 'Date | undefined',
        }
        const type = fnSwitch(x.type, {
          ...basicQuestionTypeMapping,
          'begin_repeat': (() => {
            const groupedQuestions = survey.filter(_ => _.name !== x.name && _.$qpath?.includes(x.name))
            const sType = fnSwitch(x.type, basicQuestionTypeMapping, _ => 'string')
            return '{' + groupedQuestions.map(_ => `${_.$autoname}: ${sType} | undefined`).join(',') + '}[]'
          })()
        }, () => 'string')
        return (x.label ? `  // ${x.label[0]}\n` : '')
          + `  ${x.name ?? x.$autoname}: ${type},`
      })
    return `import {${this.options.formName}Options} from './${this.options.formName}Options'\n\n`
      + `type Opt<T extends keyof typeof ${this.options.formName}Options> = keyof (typeof ${this.options.formName}Options)[T]\n\n`
      + `export interface ${this.options.formName} {\n${properties.join('\n')}\n}`
  }

  readonly generateOptionsType = (survey: KoboApiForm['content']['survey'], choices: KoboApiForm['content']['choices']) => {
    const indexOptionId = Arr(survey).reduceObject<Record<string, string>>(_ => [_.select_from_list_name ?? '', _.name])
    const res: Record<string, Record<string, string>> = {}
    choices.forEach(_ => {
      const questionName = indexOptionId[_.list_name]
      if (!res[questionName]) {
        res[questionName] = {}
      }
      res[questionName][_.name] = _.label[0]

    })
    return `export const ${this.options.formName}Options = {\n`
      + Object.entries(res).map(([k, v]) => `${k}: {\n` +
        Object.keys(v)
          .map(sk => `\t'${sk}': \`${v[sk]}\``)
          .join(',\n')
      ).join('\n},\n')
      + '\n}}'
  }
}