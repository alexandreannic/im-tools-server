import {MappedColumn, pipe, renameObjectProperties} from '../../../utils/Common'
import {KoboClient} from '../KoboClient/KoboClient'
import {KoboAnswer, KoboAnswerMetaData, KoboAnswerParams, KoboApiList} from '../KoboClient/type/KoboAnswer'

type Transformer<F> = (_: MappedColumn<F, any>) => F

export class KoboTransformer<F extends KoboAnswerMetaData> {

  constructor(
    public formId: string,
    private columnsMap: Partial<MappedColumn<F>>,
    private transformer?: Transformer<F>
  ) {
  }

  readonly transform = (a: KoboAnswer): F => {
    const allColumns: Partial<MappedColumn<F>> = {
      ...this.mapMetaProperties,
      ...this.columnsMap,
    }
    const res = pipe(
      renameObjectProperties(allColumns),
      this.transformMetaProperties,
      this.transformer,
    )(a)
    return res
  }

  readonly mapMetaProperties: MappedColumn<KoboAnswerMetaData> = {
    start: 'start',
    end: 'end',
    _submission_time: '_submission_time',
    _uuid: '_uuid',
  }

  readonly transformMetaProperties = (_: MappedColumn<F, any>): F => {
    return ({
      ..._,
      start: new Date(_.start as string),
      end: new Date(_.end as string),
      _submission_time: new Date(_._submission_time as string),
      _uuid: _._uuid as string,
    }) as F
  }
}

export class KoboTransformClient {

  constructor(
    private api: KoboClient
  ) {
  }

  readonly getAnswers = <T extends KoboAnswerMetaData>(parser: KoboTransformer<T>, params?: KoboAnswerParams): Promise<KoboApiList<T>> => {
    return this.api.getAnswers(parser.formId, params).then(_ => ({
      ..._,
      results: _.results.map(parser.transform)
    }))
  }
}
