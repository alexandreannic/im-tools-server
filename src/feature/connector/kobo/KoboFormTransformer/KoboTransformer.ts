import {MappedColumn, pipe, renameObjectProperties} from '../../../../utils/Common'
import {KoboSdk} from '../KoboClient/KoboSdk'
import {KoboAnswer, KoboAnswerMetaData, KoboAnswerParams} from '../KoboClient/type/KoboAnswer'
import {ApiPaginate} from '../../../../core/Type'

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
    version: 'version',
    submissionTime: 'submissionTime',
    validationStatus: 'validationStatus',
    id: 'id',
  }

  readonly transformMetaProperties = (_: MappedColumn<F, any>): F => {
    return ({
      ..._,
      start: new Date(_.start as string),
      end: new Date(_.end as string),
      submissionTime: new Date(_.submissionTime as string),
      // id: _.id as string,
      // validationStatus: _.validationStatus as string,
    }) as F
  }
}

export class KoboTransformClient {

  constructor(
    private api: KoboSdk
  ) {
  }

  readonly getAnswers = <T extends KoboAnswerMetaData>(parser: KoboTransformer<T>, params?: KoboAnswerParams): Promise<ApiPaginate<T>> => {
    return this.api.getAnswers(parser.formId, params).then(_ => ({
      ..._,
      data: _.data.map(parser.transform)
    }))
  }
}
