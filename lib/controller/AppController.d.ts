import { NextFunction, Request, Response } from 'express';
import { KoboClient } from '../kobo/KoboClient/KoboClient';
import { Client } from 'pg';
import { Logger } from '../utils/Logger';
import { KoboTransformClient } from '../kobo/KoboFormTransformer/KoboTransformer';
export declare class AppController {
    private pgClient;
    private koboClient;
    private logger;
    private koboTransformClient;
    constructor(pgClient: Client, koboClient: KoboClient, logger: Logger, koboTransformClient?: KoboTransformClient);
    readonly index: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    private readonly getNfiData;
    readonly uploadAnswers: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}
