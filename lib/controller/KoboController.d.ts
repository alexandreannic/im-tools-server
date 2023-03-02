import { NextFunction, Request, Response } from 'express';
import { KoboClient } from '../kobo/KoboClient/KoboClient';
import { Client } from 'pg';
export declare class KoboController {
    private pgClient;
    private koboClient;
    constructor(pgClient: Client, koboClient: KoboClient);
    readonly importAnswers: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}
