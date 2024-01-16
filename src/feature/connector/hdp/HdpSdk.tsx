import * as mssql from 'mssql'
import {AppConf} from '../../../core/conf/AppConf'
import {ConnectionPool} from 'mssql'

export class HdpSdk {

  static readonly connector = async (config: AppConf) => {
    return mssql.connect({
      password: config.dbAzureHdp.password,
      user: config.dbAzureHdp.user,
      port: config.dbAzureHdp.port,
      database: config.dbAzureHdp.schema,
      server: config.dbAzureHdp.host,
    })
  }

  constructor(connector: ConnectionPool) {
  }

}