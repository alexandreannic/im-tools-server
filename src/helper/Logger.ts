import * as winston from 'winston'
import {format, Logger as WinstonLogger} from 'winston'

export type Logger = WinstonLogger;

export const logger = (label?: string) => winston.createLogger({
  format: winston.format.combine(
    format.label({label}),
    winston.format.timestamp({
      format: 'YYYY-MM-DD hh:mm:ss'
    }),
    winston.format.colorize(),
    winston.format.simple(),
    format.printf((props) => `${props.timestamp} [${props.label}] ${props.level}: ${props.message}`)
  ),
  transports: [
    new winston.transports.Console({
      level: (process.env.NODE_ENV === 'dev') ? 'debug' : undefined
    })
  ],
})
