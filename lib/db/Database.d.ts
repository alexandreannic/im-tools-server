import { AppConf } from '../core/conf/AppConf';
import { Client } from 'pg';
export declare class Database {
    private appConf;
    client: Client;
    constructor(appConf: AppConf);
    readonly connect: () => Promise<void>;
}
