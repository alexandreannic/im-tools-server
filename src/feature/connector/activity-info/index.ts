import {AiProtectionHhs} from './activity/AiProtectionHhs'
import {ActivityInfoSdk} from './ActivityInfoSdk'
import {AIID, FormDesc, FormDescs, activityInfoForms} from './ActivityInfo'
import {Arr} from '@alexandreannic/ts-utils'
import columnsListMap = AiProtectionHhs.columnsListMap

export const runAi = {
  washAPM2: () => runAI({
    formId: activityInfoForms.washRMM,
    excludedQuestionPatternOptionsBecauseToLongOrIrrelevant: [
      /Sub-Implementing Partner /,
    ],
    filterSpecificOptions: {
      'Sub-Implementing Partner': _ => {
        return _.includes('Danish Refugee Council')
      }
    }
  })
}

const runAI = async ({
  formId,
  excludedQuestionPatternOptionsBecauseToLongOrIrrelevant = [],
  filterSpecificOptions = {}
}: {
  formId: string,
  excludedQuestionPatternOptionsBecauseToLongOrIrrelevant?: RegExp[],
  filterSpecificOptions?: Record<string, (label: string) => boolean>
}) => {
  const x = new ActivityInfoSdk()
  const dbId = await x.fetchDatabases().then(_ => _[0].databaseId)
  const formDesc = await x.fetchForm(formId)
  console.log(formDesc)

  const getAllElements = (f: FormDescs, ids: AIID[]): FormDesc['schema']['elements'] => {
    const ignoredInputs = [
      'subform',
      'section',
      'calculated',
    ]
    const elements = ids.map(_ => f[_]).flatMap(_ => {
      return _.schema.elements
    })
    const questions = elements.filter(_ => !ignoredInputs.includes(_.type))
    const subformsIds = Arr(elements.filter(_ => _.type === 'subform').map(_ => {
      return _.typeParameters.formId
    })).compact().get
    return [
      ...questions,
      ...subformsIds.length > 0 ? getAllElements(f, subformsIds) : []
    ]
  }

  const getOptions = async (
    f: FormDescs,
    e: FormDesc['schema']['elements'][0],
    filter?: (_: string) => boolean
  ): Promise<{
    formId: AIID,
    optionId: AIID,
    optionDefId: AIID,
    options: any[]
  }> => {
    const optionId = e.typeParameters.range![0].formId
    const getRandomOptions = () => {
      return (f[optionId].schema.elements.find(_ => (_.code ?? '').includes('ENG')) ?? f[optionId].schema.elements[0]).id
    }
    const optionDefId = columnsListMap[optionId]?.listId ?? getRandomOptions()
    const options = await x.fetchColumns(optionId, optionDefId)
    return {
      formId: e.id,
      optionId,
      optionDefId: optionDefId,
      options: filter ? options.filter(_ => filter(_.label)) : options.splice(0, 20),
    }
  }

  const print = async () => {
    const forms = getAllElements(formDesc, [formId])
    const options = await Promise.all(forms
      .filter(_ => _.type === 'reference')
      .map(_ => getOptions(formDesc, _, filterSpecificOptions[_.label]))
    )
    options.find(_ => _.formId === 'c19j8p9ldsv4qa3o')?.options.map(x => console.log(x, ','))
    // console.log(forms.map(_ => ['----', _.id, _.label, _.type]))
    return forms.map(q => {
      const o = options.find(_ => _.formId === q.id)
      return {
        id: q.id,
        type: q.type,
        optionsId: o?.optionDefId,
        label: q.label,
        options: o?.options ?? (q.type === 'enumerated' ? q.typeParameters.values : undefined),
        optionsLength: o?.options.length,
      }
    })
  }

  console.error(await print())
}
