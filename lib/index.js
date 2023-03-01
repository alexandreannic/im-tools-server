"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ApiClient_1 = require("./client/ApiClient");
const KoboClient_1 = require("./kobo/KoboClient/KoboClient");
const AppConf_1 = require("./conf/AppConf");
const Server_1 = require("./Server");
const Database_1 = require("./db/Database");
const Logger_1 = require("./utils/Logger");
const fetch_1 = require("./fetch");
const R = fetch_1.Fetch;
// const R = Axios
const run = async () => {
    const tokens = await R.getTokenAndSession();
    const logins = await R.login(tokens);
    const res = await R.getData(R.extractTokens(logins));
    console.log(await res.text());
};
(async () => {
    await run();
    process.exit(0);
    const conf = AppConf_1.appConf;
    const http = new ApiClient_1.ApiClient({
        baseUrl: conf.kobo.url + '/api',
        headers: {
            Authorization: KoboClient_1.KoboClient.genAuthorizationHeader(conf.kobo.token),
        }
    });
    const pgClient = new Database_1.Database(conf).client;
    const koboClient = new KoboClient_1.KoboClient(http);
    Logger_1.logger.info(`Connecting to ${conf.db.database}...`);
    await pgClient.connect();
    // logger.info(`Applying evolutions...`)
    // await new EvolutionManager(pgClient).run()
    new Server_1.Server(conf, pgClient, koboClient, Logger_1.logger).start();
})();
//# sourceMappingURL=index.js.map