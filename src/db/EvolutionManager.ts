import {Client} from 'pg'

export class EvolutionManager {
  constructor(private pgClient: Client) {
  }

  readonly run = async () => {
    await this.createEvolutionsTable()
    const lastPassedEvolutions = await this.pgClient.query(`
--      SELECT MAX(id) FILTER (WHERE "lastProblem" IS NULL),
       -- MAX(id) FILTER (WHERE "lastProblem" IS NOT NULL)
      -- FROM evolutions
      SELECT MAX(id) FROM evolutions WHERE "lastProblem" IS NULL
      `
    ).then(_ => _.rows[0].max + 1 ?? 1)
    
    // const evolutionFileNames = await fs.promises.readdir(__dirname + '/evolutions')
  }

  private readonly createEvolutionsTable = async (): Promise<any> => {
    return this.pgClient.query(`
      CREATE TABLE IF NOT EXISTS evolutions (
        "id" INTEGER PRIMARY KEY,
        "applyAt" TIMESTAMPTZ NOT NULL,
        "applyScript" VARCHAR NOT NULL,
        "revertScript" VARCHAR NOT NULL,
        "state" VARCHAR NOT NULL,
        "lastProblem" VARCHAR
      )
    `)//.then(_ => true).catch(_ => false)
  }
}

