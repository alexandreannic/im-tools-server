import * as winston from 'winston';
import { Logger as WinstonLogger } from 'winston';
export type Logger = WinstonLogger;
export declare const logger: winston.Logger;
export declare const logMorganStream: {
    write: (message: any) => void;
};
