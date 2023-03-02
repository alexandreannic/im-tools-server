import {defaultValue, env, int, required} from '@alexandreannic/ts-utils'
import * as dotenv from 'dotenv'

dotenv.config()

const e = env(process.env)

export const appConf = {
  port: e(int, defaultValue(80))('PORT'),
  kobo: {
    url: e(defaultValue('https://kf.kobotoolbox.org'))('KOBO_URL'),
    token: e(required)('KOBO_TOKEN'),
  },
  db: {
    host: e(required)('DB_HOST'),
    user: e(required)('DB_USER'),
    database: e(required)('DB_NAME'),
    password: e(required)('DB_PASSWORD'),
    port: e(int, defaultValue(5432))('DB_PORT')
  },
  ecrecApp: {
    login: e(required)('ECRECAPP_LOGIN'),
    password: e(required)('ECRECAPP_PASSWORD'),
  }
}

// console.log(appConf)

export type AppConf = typeof appConf
