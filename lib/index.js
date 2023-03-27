"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ApiClient_1 = require("./client/ApiClient");
const KoboClient_1 = require("./connector/kobo/KoboClient/KoboClient");
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
    const koboSdk = new KoboClient_1.KoboClient(new ApiClient_1.ApiClient({
        baseUrl: conf.kobo.url + '/api',
        headers: {
            Authorization: KoboClient_1.KoboClient.genAuthorizationHeader(conf.kobo.token),
        }
    }));
    const ecrecAppSdk = new EcrecSdk_1.EcrecSdk(new EcrecClient_1.EcrecClient(AppConf_1.appConf.ecrecApp));
    const legalAidSdk = new LegalaidSdk_1.LegalaidSdk(new ApiClient_1.ApiClient({
        baseUrl: 'https://api.lau-crm.org.ua',
        headers: {
            'x-auth-token': AppConf_1.appConf.legalAid.apiToken,
        }
    }));
    const services = initServices(koboSdk, ecrecAppSdk, legalAidSdk);
    // const res = await ecrecAppSdk.getMsd({
    //   start: new Date(2022, 11, 1),
    //   end: sub(new Date(2023, 2, 1), {days: 1}),
    //   status: [
    //     EcrecMsdStatus['Funded'],
    //     EcrecMsdStatus['Post-funding reports'],
    //     EcrecMsdStatus['Final reports submitted'],
    //     EcrecMsdStatus['Monitoring'],
    //     EcrecMsdStatus['Monitoring completed'],
    //   ]
    // })
    // const resG = await legalAidSdk.fetchBeneficiaryForAllOffice({start, end, pollType: PollType.Group})
    // console.log('ind')
    // const resI = await legalAidSdk.fetchBeneficiaryForAllOffice({start, end, pollType: PollType.Individual})
    // console.log('G', resG)
    // console.log('I', resI)
    // console.log(res.data.map(_ => [
    //   _.createdAt,
    //   _.date,
    //   msToString(_.createdAt.getTime() - _['62629f40a397c105f1cdbecb'].getTime())
    // ]).length)
    // console.log(res.data.map(_ => _.createdAt.getTime() - _['62629f40a397c105f1cdbecb'].getTime()).sort().map(msToString))
    // logger.info(`Connecting to ${conf.db.database}...`)
    // await pgClient.connect()
    // logger.info(`Applying evolutions...`)
    // await new EvolutionManager(pgClient).run()
    new Server_1.Server(conf, pgClient, koboSdk, ecrecAppSdk, legalAidSdk, services, Logger_1.logger).start();
})();
//# sourceMappingURL=index.js.map