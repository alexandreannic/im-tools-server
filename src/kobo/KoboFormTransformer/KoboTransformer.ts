import {mapObjectColumns, MappedColumn, pipe} from '../../utils/Common'
import {KoboClient} from '../KoboClient/KoboClient'
import {KoboAnswer, KoboAnswerParams, KoboApiList} from '../KoboClient/type/KoboAnswer'

export class KoboTransformer<F> {

  constructor(
    public formId: string,
    private columnsMap: Partial<MappedColumn<F>>,
    private transformer?: (_: MappedColumn<F, any>) => F
  ) {
  }

  readonly transform = (a: KoboAnswer): F => {
    const res = pipe(
      mapObjectColumns(this.columnsMap),
      this.transformer,
    )(a)
    // const res = mapObjectColumns(this.columnsMap)(a)
    // const x = (this.transformer ?? (_ => _))(res)
    // console.log('before', res)
    // console.log('after', x)
    return res
  }
}

export class KoboTransformClient {

  constructor(
    private api: KoboClient
  ) {
  }

  readonly getAnswers = <T>(parser: KoboTransformer<T>, params?: KoboAnswerParams): Promise<KoboApiList<T>> => {
    return this.api.getAnswers(parser.formId, params).then(_ => ({
      ..._,
      results: _.results.map(parser.transform)
    }))
  }
}
