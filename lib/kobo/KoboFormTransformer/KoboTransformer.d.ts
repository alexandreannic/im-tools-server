import { MappedColumn } from '../../utils/Common';
import { KoboClient } from '../KoboClient/KoboClient';
import { KoboAnswer, KoboAnswerParams, KoboApiList } from '../KoboClient/type/KoboAnswer';
export declare class KoboTransformer<F> {
    formId: string;
    private columnsMap;
    private transformer?;
    constructor(formId: string, columnsMap: Partial<MappedColumn<F>>, transformer?: ((_: MappedColumn<F, any>) => F) | undefined);
    readonly transform: (a: KoboAnswer) => F;
}
export declare class KoboTransformClient {
    private api;
    constructor(api: KoboClient);
    readonly getAnswers: <T>(parser: KoboTransformer<T>, params?: KoboAnswerParams) => Promise<KoboApiList<T>>;
}
