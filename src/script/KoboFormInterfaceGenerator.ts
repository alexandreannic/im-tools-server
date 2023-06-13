import {KoboSdk} from '../feature/connector/kobo/KoboClient/KoboSdk'
import {Arr, fnSwitch, lazy} from '@alexandreannic/ts-utils'
import {KoboApiForm} from '../feature/connector/kobo/KoboClient/type/KoboApiForm'
import * as fs from 'fs'
import {Logger} from '../utils/Logger'
import {tryCach} from '../utils/Common'

interface KoboInterfaceGeneratorParams {
  outDir: string,
  formName: string,
  formId: string,
  overrideOptionsByQuestion?: Record<string, Record<string, string[]>>
  overrideAllOptions?: Record<string, string[]>
}

export const generateKoboInterface = async (koboSdk: KoboSdk, outDir: string) => {
  const forms: Omit<KoboInterfaceGeneratorParams, 'outDir'>[] = [
    // {formName: 'Shelter', formId: 'aL8oHMzJJ9soPepvK6YU9E'},
    // {formName: 'BNRE', formId: 'aKgX4MNs6gCemDQKPeXxY8'},
    {
      formName: 'ProtHHS_2_1',
      formId: 'aQDZ2xhPUnNd43XzuQucVR',
      overrideAllOptions: {
        other_specify: ['Other'],
      },
      overrideOptionsByQuestion: {
        what_are_your_main_concerns_regarding_your_accommodation: {
          'risk_of_eviction': [`Risk of eviction`],
          'accommodations_condition': [`Accommodation’s condition`],
          'overcrowded_lack_of_privacy': [`Overcrowded/Lack of privacy`],
          'lack_of_functioning_utilities': [`Lack of functioning utilities`],
          'lack_of_connectivity': [`Lack of connectivity`],
          'security_and_safety_risks': [`Security and safety risks`],
          'lack_of_financial_compensation_or_rehabilitation_for_damage_or_destruction_of_housing': [`Lack of support for damaged housing`],
        },
        what_is_the_type_of_your_household: {
          'one_person_household': [`One person household`],
          'couple_without_children': [`Couple without children`],
          'couple_with_children': [`Couple with children`],
          'mother_with_children': [`Mother with children`],
          'father_with_children': [`Father with children`],
          'extended_family': [`Extended family`],
        }
      }
    },
    // {formName: 'MPCA_NFI', formId: 'a4Sx3PrFMDAMZEGsyzgJJg'},
    // {formName: 'MPCA_NFI_NAA', formId: 'aBGVXW2N26DaLehmKneuyB'},
    // {formName: 'MPCA_NFI_Myko', formId: 'a8WAWB9Yxu2jkgk4Ei8GTk'},
    // {formName: 'MPCA_NFI_Old', formId: 'a3h8Ykmp2C8NFiw5DDGBLz'},
    // {formName: 'ProtHHS_2_0', formId: 'aRHsewShwZhXiy8jrBj9zf'},
  ]
  return Promise.all(forms.map(f => new KoboInterfaceGenerator(koboSdk, {
    outDir,
    ...f,
  }).generate()))
}

const ignoredQuestionTypes: KoboApiForm['content']['survey'][0]['type'][] = [
  'calculate',
  'begin_group',
  'end_group',
  'note',
  'end_repeat',
]

class KoboInterfaceGenerator {

  constructor(
    private sdk: KoboSdk,
    private options: KoboInterfaceGeneratorParams) {
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
      res[questionName][_.name] = (() => {
        try {
          console.log(this.options.overrideOptionsByQuestion?.[questionName][_.name][0], this.options.overrideAllOptions?.[_.name][0], _.label[0])
          return this.options.overrideOptionsByQuestion?.[questionName][_.name][0] ?? this.options.overrideAllOptions?.[_.name][0] ?? _.label[0]
        } catch (e: any) {
          return _.label[0]
        }
      })()
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