import {defaultValue, env, int} from '@alexandreannic/ts-utils'
import * as dotenv from 'dotenv'

dotenv.config()

const e = env(process.env)

export const appConf = {
  port: e(int, defaultValue(80))('PORT'),
  kobo: {
    url: e(defaultValue('https://kf.kobotoolbox.org'))('KOBO_URL'),
    token: e(defaultValue('Token 8eafb975ac74bc2c8cfe57fb6879ea362368089c'))('KOBO_TOKEN'),
  }
}

export type AppConf = typeof appConf
