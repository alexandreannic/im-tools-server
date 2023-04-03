import {AIID, FormDesc, FormDescs} from './ActivityInfo'
import {Arr} from '@alexandreannic/ts-utils'
import {AiProtectionHhs} from './activity/AiProtectionHhs'
import {ActivityInfoSdk} from './ActivityInfoSdk'

export class ActivityInfoApiSniffer {
  constructor(
    private f: FormDescs,
    private sdk: ActivityInfoSdk,
  ) {
  }

  readonly getAllElements = (ids: AIID[]): FormDesc['schema']['elements'] => {
    const ignoredInputs = [
      'subform',
      'section',
      'calculated',
    ]
    const elements = ids.map(_ => this.f[_]).flatMap(_ => {
      return _.schema.elements
    })
    const questions = elements.filter(_ => !ignoredInputs.includes(_.type))
    const subformsIds = Arr(elements.filter(_ => _.type === 'subform').map(_ => {
      return _.typeParameters.formId
    })).compact().get
    return [
      ...questions,
      ...subformsIds.length > 0 ? this.getAllElements(subformsIds) : []
    ]
  }

  readonly getOptions = async (e: FormDesc['schema']['elements'][0]): Promise<{
    formId: AIID,
    optionId: AIID,
    labelsId: AIID,
    options: any[]
  }> => {
    const optionId = e.typeParameters.range![0].formId
    const getRandomOptions = () => {
      return (this.f[optionId].schema.elements.find(_ => (_.code ?? '').includes('ENG')) ?? this.f[optionId].schema.elements[0]).id
    }
    const labelsId = AiProtectionHhs.columnsListMap[optionId]?.labelsId ?? getRandomOptions()
    const options = await this.sdk.fetchColumns(optionId, labelsId)
    return {
      formId: e.id,
      optionId,
      labelsId,
      options,
    }
  }

  readonly print = async (formId: AIID) => {
    const forms = this.getAllElements([formId])
    const options = await Promise.all(forms.filter(_ => _.type === 'reference').map(f => this.getOptions(f)))
    // options.find(_ => _.formId === 'c79be77ldswj831t')?.options.map(x => console.log(x, ','))
    // console.log('--------------------------------')
    // console.log('--------------------------------')
    // console.log('--------------------------------')
    // console.log('--------------------------------')
    // options.find(_ => _.formId === 'ccli5mkldt1r8lb1d')?.options.map(x => console.log(x, ','))
    // console.log(forms.map(_ => ['----', _.id, _.label, _.type]))
    return forms.reduce((acc, q) => {
      const o = options.find(_ => _.formId === q.id)
      return {
        ...acc,
        [q.label]: {
          id: q.id,
          ...o?.optionId ? {optionsId: o.optionId} : {},
          ...o?.labelsId ? {labelsId: o.labelsId} : {},
          // options: JSON.stringify(o?.options.splice(0, 5)),
          // optionsLength: o?.options.length,
        }
      }
    }, {})
  }

  readonly fetchColumns = async (k: keyof typeof AiProtectionHhs.inputs) => {
    const value: typeof AiProtectionHhs.inputs['Partner Organization'] = AiProtectionHhs.inputs[k] as any
    const cols = await this.sdk.fetchColumns(value.optionsId, value.labelsId)
    return await cols.reduce((acc, k) => {
      return {
        ...acc,
        [k.label]: k.id
      }
    }, {})
  }
}
