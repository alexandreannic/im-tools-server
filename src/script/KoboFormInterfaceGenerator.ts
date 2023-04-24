import {KoboSdk} from '../feature/connector/kobo/KoboClient/KoboSdk'
import {Arr, fnSwitch} from '@alexandreannic/ts-utils'
import {KoboApiForm} from '../feature/connector/kobo/KoboClient/type/KoboApiForm'
import * as fs from 'fs'

export const generateForms = async (koboSdk: KoboSdk, outDir: string) => {
  const forms: {name: string, id: string}[] = [
    {name: 'ProtHHS_2_1', id: 'aQDZ2xhPUnNd43XzuQucVR'},
    // {name: 'ProtHHS_2_0', id: 'aRHsewShwZhXiy8jrBj9zf'},
  ]
  return Promise.all(forms.map(f => new KoboFormInterfaceGenerator(koboSdk, {
    outDir,
    formName: f.name,
    formId: f.id,
  }).generateInterface()))
}

const ignoredQuestionTypes: KoboApiForm['content']['survey'][0]['type'][] = [
  'calculate',
  'begin_group',
  'end_group',
  'note',
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

  readonly generateInterface = async () => {
    const form = await this.sdk.getForm(this.options.formId)
    form.content.survey.filter(_ => !ignoredQuestionTypes.includes(_.type)).map(x => {
      const type = fnSwitch(x.type, {
        'select_one': `GetType<'${x.name}'>`,
        'select_multiple': `GetType<'${x.name}'>[]`,
        'integer': 'number',
        'text': 'string',
      }, () => 'string')
      return `${x.name}: ${type} | undefined,`
    })

    const mainInterface = this.generateMainInterface(form.content.survey)
    const options = this.generateOptionsType(form.content)
    await fs.writeFileSync(this.options.outDir + '/' + this.options.formName + '.ts', mainInterface)
    await fs.writeFileSync(this.options.outDir + '/' + this.options.formName + 'Options.ts', options)
  }

  readonly generateMainInterface = (survey: KoboApiForm['content']['survey']) => {
    const indexOptionId = Arr(survey).groupBy(_ => _.select_from_list_name)
    const properties = survey.filter(_ => !ignoredQuestionTypes.includes(_.type)).map(x => {
      const lastQuestionNameHavingOptionId = Arr(indexOptionId[x.select_from_list_name ?? '']).last?.name
      const type = fnSwitch(x.type, {
        'select_one': `Opt<'${lastQuestionNameHavingOptionId}'>`,
        'select_multiple': `Opt<'${lastQuestionNameHavingOptionId}'>`,
        'integer': 'number',
        'text': 'string',
      }, () => 'string')
      return `${x.name}: ${type} | undefined,`
    })
    return `import {${this.options.formName}Options} from './${this.options.formName}Options'\n\n`
      + `type Opt<T extends keyof typeof ${this.options.formName}Options> = keyof (typeof ${this.options.formName}Options)[T]\n\n`
      + `interface ${this.options.formName} {\n${properties.join('\n\t')}\n}`
  }

  readonly generateOptionsType = (content: KoboApiForm['content']) => {
    const indexOptionId = Arr(content.survey).reduceObject<Record<string, string>>(_ => [_.select_from_list_name ?? '', _.name])
    const res: Record<string, Record<string, string>> = {}
    content.choices.forEach(_ => {
      const questionName = indexOptionId[_.list_name]
      if (!res[questionName]) {
        res[questionName] = {}
      }
      res[questionName][_.name] = _.label[0]

    })
    return `export const ${this.options.formName}Options = {\n`
      + Object.entries(res).map(([k, v]) => `${k}: {\n` +
        Object.keys(v)
          .map(sk => `\t${sk}: \`${v[sk]}\``)
          .join(',\n')
      ).join('\n},\n')
      + '\n}}'
  }
}