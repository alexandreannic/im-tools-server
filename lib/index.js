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
const ActicityInfoSdk_1 = require("./connector/acticity-info/ActicityInfoSdk");
const ActivityInfo_1 = require("./connector/acticity-info/ActivityInfo");
const ts_utils_1 = require("@alexandreannic/ts-utils");
const ActivityInfoFormBuilder_1 = require("./connector/acticity-info/ActivityInfoFormBuilder");
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
            Authorization: KoboClient_1.KoboClient.makeAuthorizationHeader(conf.kobo.token),
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
    // logger.info(`Connecting to ${conf.db.database}...`)
    // await pgClient.connect()
    // logger.info(`Applying evolutions...`)
    // await new EvolutionManager(pgClient).run()
    new Server_1.Server(conf, pgClient, koboSdk, ecrecAppSdk, legalAidSdk, services, Logger_1.logger).start();
});
(async () => {
    const x = new ActicityInfoSdk_1.ActivityInfoSdk();
    const dbId = await x.fetchDatabases().then(_ => _[0].databaseId);
    const formDesc = await x.fetchForm(ActivityInfo_1.formId.general_protection_rmm);
    const getAllElements = (f, ids) => {
        const ignoredInputs = [
            'subform',
            'section',
            'calculated',
        ];
        const elements = ids.map(_ => f[_]).flatMap(_ => {
            return _.schema.elements;
        });
        const questions = elements.filter(_ => !ignoredInputs.includes(_.type));
        const subformsIds = (0, ts_utils_1.Arr)(elements.filter(_ => _.type === 'subform').map(_ => {
            return _.typeParameters.formId;
        })).compact().get;
        return [
            ...questions,
            ...subformsIds.length > 0 ? getAllElements(f, subformsIds) : []
        ];
    };
    const getOptions = async (f, e) => {
        const optionId = e.typeParameters.range[0].formId;
        const getRandomOptions = () => {
            return (f[optionId].schema.elements.find(_ => (_.code ?? '').includes('ENG')) ?? f[optionId].schema.elements[0]).id;
        };
        const labelsId = ActivityInfoFormBuilder_1.columnsListMap[optionId]?.labelsId ?? getRandomOptions();
        const options = await x.fetchColumns(optionId, labelsId);
        return {
            formId: e.id,
            optionId,
            labelsId,
            options,
        };
    };
    const print = async () => {
        const forms = getAllElements(formDesc, [ActivityInfo_1.formId.general_protection_rmm]);
        const options = await Promise.all(forms.filter(_ => _.type === 'reference').map(f => getOptions(formDesc, f)));
        // options.find(_ => _.formId === 'c79be77ldswj831t')?.options.map(x => console.log(x, ','))
        // console.log('--------------------------------')
        // console.log('--------------------------------')
        // console.log('--------------------------------')
        // console.log('--------------------------------')
        // options.find(_ => _.formId === 'ccli5mkldt1r8lb1d')?.options.map(x => console.log(x, ','))
        // console.log(forms.map(_ => ['----', _.id, _.label, _.type]))
        return forms.reduce((acc, q) => {
            const o = options.find(_ => _.formId === q.id);
            return {
                ...acc,
                [q.label]: {
                    id: q.id,
                    ...o?.optionId ? { optionsId: o.optionId } : {},
                    ...o?.labelsId ? { labelsId: o.labelsId } : {},
                    // options: JSON.stringify(o?.options.splice(0, 5)),
                    // optionsLength: o?.options.length,
                }
            };
        }, {});
    };
    const builtForm = (0, ActivityInfoFormBuilder_1.makeForm)({
        'Plan Code': 'GP-DRC-00001',
        'Oblast': 'Cherkaska_Черкаська',
        'Raion': 'Chernihivska_Чернігівська',
        'Hromada': 'Adzhamska_UA3504001_Аджамська',
        subActivities: [
            {
                'Population Group': 'IDPs',
                'Reporting Month': '2023-02',
                'Total Individuals Reached': 200000,
                'Girls': 100000,
                'Boys': 100000,
                'Adult Women': 0,
                'Adult Men': 0,
                'Elderly Women': 0,
                'Elderly Men': 0,
                'People with disability': 0,
                'Achievement (non-individual)': 0,
            }
        ]
    });
    console.log(builtForm);
    const printed = await print();
    const fetchColumns = async (k) => {
        const value = ActivityInfoFormBuilder_1.inputs[k];
        return x.fetchColumns(value.optionsId, value.labelsId);
    };
    const cols = await fetchColumns('Plan Code').then(x => x.reduce((acc, k) => {
        return {
            ...acc,
            [k.label]: k.id
        };
    }, {}));
    // console.log(cols)
    // print()
})();
//# sourceMappingURL=index.js.map