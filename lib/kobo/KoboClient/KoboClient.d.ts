import { Id } from '../../type/Common';
import { ApiClient } from '../../client/ApiClient';
import { KoboAnswer, KoboAnswerParams, KoboApiList } from './type/KoboAnswer';
export declare class KoboClient {
    private api;
    constructor(api: ApiClient);
    static readonly parseDate: (_: Date) => string;
    static readonly genAuthorizationHeader: (token: string) => string;
    readonly getAnswers: (formId: Id, params?: KoboAnswerParams) => Promise<KoboApiList<KoboAnswer>>;
}
