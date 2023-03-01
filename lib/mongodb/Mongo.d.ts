import { Collection, Db, MongoClient } from 'mongodb';
import { KoboAnswer } from '../kobo/KoboClient/type/KoboAnswer';
interface MongoConn {
    client: MongoClient;
    db: Db;
    answers: Collection<KoboAnswer>;
}
export declare class Mongo {
    static readonly connect: () => Promise<MongoConn>;
}
export {};
