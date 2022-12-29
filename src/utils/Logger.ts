import * as winston from 'winston'
import {Logger as WinstonLogger} from 'winston'

export type Logger = WinstonLogger;

export const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'YYYY-MM-DD hh:mm:ss'
    }),
    winston.format.colorize(),
    winston.format.simple(),
  ),
  transports: [
    new winston.transports.Console({
      level: (process.env.NODE_ENV === 'dev') ? 'debug' : undefined
    })
  ],
})

export const logMorganStream = {
  write: (message) => {
    logger.info(message)
  }
}
