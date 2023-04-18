"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ApiClient_1 = require("./client/ApiClient");
const KoboSdk_1 = require("./connector/kobo/KoboClient/KoboSdk");
const AppConf_1 = require("./conf/AppConf");
const Server_1 = require("./server/Server");
const Database_1 = require("./db/Database");
const Logger_1 = require("./utils/Logger");
const EcrecClient_1 = require("./connector/ecrec/EcrecClient");
const EcrecSdk_1 = require("./connector/ecrec/EcrecSdk");
const LegalaidSdk_1 = require("./connector/legalaid/LegalaidSdk");
const ServiceEcrec_1 = require("./server/services/ServiceEcrec");
const ServiceLegalAid_1 = require("./server/services/ServiceLegalAid");
const ServiceNfi_1 = require("./server/services/ServiceNfi");
const ServiceStats_1 = require("./server/services/ServiceStats");
const client_1 = require("@prisma/client");
const ActivityInfoSdk_1 = require("./connector/activity-info/ActivityInfoSdk");
const initServices = (koboClient, ecrecSdk, legalaidSdk) => {
    const ecrec = new ServiceEcrec_1.ServiceEcrec(ecrecSdk);
    const legalAid = new ServiceLegalAid_1.ServiceLegalAid(legalaidSdk);
    const nfi = new ServiceNfi_1.ServiceNfi(koboClient);
    const stats = new ServiceStats_1.ServiceStats(ecrec, legalAid, nfi);
    return {
        ecrec,
        legalAid,
        nfi,
        stats,
    };
};
(async () => {
    const conf = AppConf_1.appConf;
    const pgClient = new Database_1.Database(conf).client;
    const prisma = new client_1.PrismaClient();
    const koboSdk = new KoboSdk_1.KoboSdk(new ApiClient_1.ApiClient({
        baseUrl: conf.kobo.url + '/api',
        headers: {
            Authorization: KoboSdk_1.KoboSdk.makeAuthorizationHeader(conf.kobo.token),
        }
    }));
    const activityInfoSdk = new ActivityInfoSdk_1.ActivityInfoSdk();
    const ecrecAppSdk = new EcrecSdk_1.EcrecSdk(new EcrecClient_1.EcrecClient(AppConf_1.appConf.ecrecApp));
    const legalAidSdk = new LegalaidSdk_1.LegalaidSdk(new ApiClient_1.ApiClient({
        baseUrl: 'https://api.lau-crm.org.ua',
        headers: {
            'x-auth-token': AppConf_1.appConf.legalAid.apiToken,
        }
    }));
    const services = initServices(koboSdk, ecrecAppSdk, legalAidSdk);
    // logger.info(`Connecting to ${conf.db.database}...`)
    // await pgClient.connect()
    // logger.info(`Applying evolutions...`)
    // await new EvolutionManager(pgClient).run()
    new Server_1.Server(conf, prisma, koboSdk, ecrecAppSdk, legalAidSdk, services, Logger_1.logger).start();
})();
//# sourceMappingURL=index.js.map