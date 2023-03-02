import {Collection, Db, MongoClient, ServerApiVersion} from 'mongodb'
import {KoboAnswer} from '../kobo/KoboClient/type/KoboAnswer'

interface MongoConn {
  client: MongoClient,
  db: Db,
  answers: Collection<KoboAnswer>
}

export class Mongo {

  static readonly connect = async (): Promise<MongoConn> => {
    const uri = 'mongodb+srv://alexandreannic:sieges78@drc.e1un2uf.mongodb.net/?retryWrites=true&w=majority'
    const client = new MongoClient(uri, {serverApi: ServerApiVersion.v1})
    await client.connect()
    const db = client.db('drc')
    const answers = db.collection<KoboAnswer>('answers')
    return {
      client,
      db,
      answers,
    }
  }
}

