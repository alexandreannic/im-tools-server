import { NextFunction, Request, Response } from 'express';
import { Logger } from './utils/Logger';
import { HttpError } from './utils/Error';
import { AppConf } from './conf/AppConf';
import { KoboClient } from './kobo/KoboClient/KoboClient';
import { Client } from 'pg';
export declare class Server {
    private conf;
    private pgClient;
    private koboClient;
    private logger;
    constructor(conf: AppConf, pgClient: Client, koboClient: KoboClient, logger: Logger);
    readonly errorHandler: (err: HttpError, req: Request, res: Response, next: (err?: any) => void) => void;
    static readonly corsHeader: (req: Request, res: Response, next: NextFunction) => void;
    readonly start: () => void;
}
