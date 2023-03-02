import { KoboClient } from './kobo/KoboClient/KoboClient';
import { Client } from 'pg';
import { Logger } from './utils/Logger';
export declare const getRoutes: (pgClient: Client, koboClient: KoboClient, logger: Logger) => import("express-serve-static-core").Router;
