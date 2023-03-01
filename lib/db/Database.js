"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
const pg_1 = require("pg");
class Database {
    constructor(appConf) {
        this.appConf = appConf;
        this.connect = async () => {
            return this.client.connect();
        };
        this.client = new pg_1.Client({
            host: appConf.db.host,
            user: appConf.db.user,
            database: appConf.db.database,
            password: appConf.db.password,
            port: appConf.db.port,
        });
    }
}
exports.Database = Database;
//# sourceMappingURL=Database.js.map