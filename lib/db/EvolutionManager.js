"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvolutionManager = void 0;
class EvolutionManager {
    constructor(pgClient) {
        this.pgClient = pgClient;
        this.run = async () => {
            await this.createEvolutionsTable();
            const lastPassedEvolutions = await this.pgClient.query(`
--      SELECT MAX(id) FILTER (WHERE "lastProblem" IS NULL),
       -- MAX(id) FILTER (WHERE "lastProblem" IS NOT NULL)
      -- FROM evolutions
      SELECT MAX(id) FROM evolutions WHERE "lastProblem" IS NULL
      `).then(_ => { var _a; return (_a = _.rows[0].max + 1) !== null && _a !== void 0 ? _a : 1; });
            // const evolutionFileNames = await fs.promises.readdir(__dirname + '/evolutions')
        };
        this.createEvolutionsTable = async () => {
            return this.pgClient.query(`
      CREATE TABLE IF NOT EXISTS evolutions (
        "id" INTEGER PRIMARY KEY,
        "applyAt" TIMESTAMPTZ NOT NULL,
        "applyScript" VARCHAR NOT NULL,
        "revertScript" VARCHAR NOT NULL,
        "state" VARCHAR NOT NULL,
        "lastProblem" VARCHAR
      )
    `); //.then(_ => true).catch(_ => false)
        };
    }
}
exports.EvolutionManager = EvolutionManager;
//# sourceMappingURL=EvolutionManager.js.map