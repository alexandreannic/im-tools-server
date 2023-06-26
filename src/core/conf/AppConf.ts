import {defaultValue, env, int, required} from '@alexandreannic/ts-utils'
import * as dotenv from 'dotenv'

dotenv.config()

const e = env(process.env)

export const appConf = {
  port: e(int, defaultValue(80))('PORT'),
  owner: e(defaultValue('alexandre.annic@drc.ngo'))('OWNER_NAME'),
  buildingBlockWfp: {
    otpURL: e(required)('BUILDINGBLOCK_WFP_OTP_URL'),
    login: e(required)('BUILDINGBLOCK_WFP_LOGIN'),
    password: e(required)('BUILDINGBLOCK_WFP_PASSWORD'),
  },
  db: {
    url: e(required)('DATABASE_URL')
  },
  //   host: e(required)('DB_HOST'),
  //   user: e(required)('DB_USER'),
  //   database: e(required)('DB_NAME'),
  //   password: e(required)('DB_PASSWORD'),
  //   port: e(int, defaultValue(5432))('DB_PORT')
  // },
  kobo: {
    url: e(defaultValue('https://kf.kobotoolbox.org'))('KOBO_URL'),
    token: e(required)('KOBO_TOKEN'),
  },
  ecrecApp: {
    login: e(required)('ECRECAPP_LOGIN'),
    password: e(required)('ECRECAPP_PASSWORD'),
  },
  legalAid: {
    apiToken: e(required)('LEGALAID_API_TOKEN')
  },
  activityInfo: {
    apiToken: e(required)('ACTIVITY_INFO_API_TOKEN')
  }
}

export type AppConf = typeof appConf
