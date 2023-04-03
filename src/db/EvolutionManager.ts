import {Client} from 'pg'
import {evolutions} from './evolutions'

export class EvolutionManager {
  constructor(private pgClient: Client) {
  }

  readonly run = async () => {
    await this.pgClient.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`)
    await this.createEvolutionsTable()
    const lastPassedEvolutions = await this.pgClient.query(`
      -- SELECT MAX(id) FILTER (WHERE "lastProblem" IS NULL),
      -- MAX(id) FILTER (WHERE "lastProblem" IS NOT NULL)
      -- FROM evolutions
      SELECT MAX(id) FROM evolutions WHERE "lastProblem" IS NULL
      `
    ).then(_ => _.rows[0].max + 1 ?? 1)

    for (let [i, val] of Object.values(evolutions).entries()) {
      try {
        if (i > lastPassedEvolutions) {
          await this.pgClient.query(val.up)
          await this.pgClient.query(`
              INSERT INTO evolutions
              VALUES ()
          `)
        }
      } catch (e) {

      }
    }
  }

  private readonly createEvolutionsTable = async (): Promise<any> => {
    return this.pgClient.query(`
        CREATE TABLE IF NOT EXISTS evolutions
        (
            "id"           INTEGER PRIMARY KEY,
            "applyAt"      TIMESTAMPTZ NOT NULL,
            "applyScript"  VARCHAR     NOT NULL,
            "revertScript" VARCHAR     NOT NULL,
            "state"        VARCHAR     NOT NULL,
            "lastProblem"  VARCHAR
        )
    `)//.then(_ => true).catch(_ => false)
  }
}

