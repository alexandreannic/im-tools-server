import {AppConf} from '../core/conf/AppConf'
import {Client} from 'pg'

export class Database {
  public client: Client
  
  constructor(private appConf: AppConf) {
    this.client = new Client({
      host: appConf.db.host,
      user: appConf.db.user,
      database: appConf.db.database,
      password: appConf.db.password,
      port: appConf.db.port,
    })
  }
  
  readonly connect = async () => {
    return this.client.connect()
  } 


}
