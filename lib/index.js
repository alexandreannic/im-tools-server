"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ApiClient_1 = require("./core/client/ApiClient");
const KoboSdk_1 = require("./feature/connector/kobo/KoboClient/KoboSdk");
const AppConf_1 = require("./core/conf/AppConf");
const Server_1 = require("./server/Server");
const Database_1 = require("./db/Database");
const Logger_1 = require("./utils/Logger");
const EcrecClient_1 = require("./feature/connector/ecrec/EcrecClient");
const EcrecSdk_1 = require("./feature/connector/ecrec/EcrecSdk");
const LegalaidSdk_1 = require("./feature/connector/legalaid/LegalaidSdk");
const ServiceEcrec_1 = require("./server/services/ServiceEcrec");
const ServiceLegalAid_1 = require("./server/services/ServiceLegalAid");
const ServiceNfi_1 = require("./server/services/ServiceNfi");
const ServiceStats_1 = require("./server/services/ServiceStats");
const client_1 = require("@prisma/client");
const ActivityInfoSdk_1 = require("./feature/connector/activity-info/ActivityInfoSdk");
const KoboApiService_1 = require("./feature/kobo/KoboApiService");
const ProtHHS_2_1_fields_1 = require("./feature/kobo/formInterface/ProtHHS_2_1_fields");
const ProtHHS_2_1Options_1 = require("./feature/kobo/formInterface/ProtHHS_2_1Options");
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
const startApp = async () => {
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
    const koboSync = new KoboApiService_1.KoboApiService(prisma);
    // logger.info(`Connecting to ${conf.db.database}...`)
    // await pgClient.connect()
    // logger.info(`Applying evolutions...`)
    // await new EvolutionManager(pgClient).run()
    new Server_1.Server(conf, prisma, koboSdk, ecrecAppSdk, legalAidSdk, services, Logger_1.logger).start();
};
// startApp()
(async () => {
    const conf = AppConf_1.appConf;
    const koboSdk = new KoboSdk_1.KoboSdk(new ApiClient_1.ApiClient({
        baseUrl: conf.kobo.url + '/api',
        headers: {
            Authorization: KoboSdk_1.KoboSdk.makeAuthorizationHeader(conf.kobo.token),
        }
    }));
    await koboSdk.getVersions('aRHsewShwZhXiy8jrBj9zf');
    const res = await koboSdk.getAnswers('aRHsewShwZhXiy8jrBj9zf');
    const unhandledQuestionName = new Set();
    const unhandledOptions = {};
    const checkOptions = (questionName, values) => {
        const options = ProtHHS_2_1Options_1.ProtHHS_2_1Options[questionName];
        const value = values.split(' ');
        if (!options)
            return;
        const possibleValues = Object.keys(options);
        value.forEach(v => {
            if (possibleValues && !possibleValues.includes(v)) {
                unhandledOptions[questionName] = v;
            }
        });
    };
    const fixOptions = (values) => {
        const optionsMapping = {
            wg_using_your_usual_language_have_difficulty_communicating_: 'wg_using_your_usual_language_have_difficulty_communicating',
            host_community_member: 'non_displaced',
            conflict_affected_person: 'non_displaced',
            'host_communitys_local_authorities_supported_evacuation': 'government_supported_evacuation',
            '_4_very_good': '_5_very_good',
            '_3_good': '_4_good',
            'collective_centre': 'urban_area',
            'village_settlement': 'rural_area',
            'private_housing': 'rural_area',
            'borrowing_money_': 'borrowing_money',
            'accommodations_condition_': 'accommodations_condition',
            'fear_of_property_being_damaged_or_destroyed_by_armed_violence': 'fear_of_property_being_damaged_or_destroyedby_armed_violence',
            'partially_damaged_': 'partially_damaged',
            'accommodation_with_host_family_': 'accommodation_with_host_family',
            'livelihood_support_vocational_training': 'livelihood_support vocational_training',
            'collective_shelter_': 'collective_shelter',
            'repaired_housing_compensation_for_destroyed_or_damaged_property': 'repaired_housing_compensation_for_destroyedor_damaged_property',
        };
        return values.split(' ').map(_ => optionsMapping[_] ?? _).join(' ');
    };
    const newData = res.data.map(row => {
        const answersArr = Object.entries(row.answers).map(([questionName, value]) => [questionName.split('/')[1], value]);
        const answers = {};
        answersArr.forEach(([questionName, value], index) => {
            value = fixOptions(value);
            if (/^where_is_your_[a-z]+$/.test(questionName) && value === 'stayed_to_keep_the_jobs') {
                value = value.replace('stayed_to_keep_the_jobs', 'remained_behind_in_the_area_of_origin');
            }
            if (questionName === 'type_of_site' && value === 'other_specify') {
                value = '';
            }
            if (ProtHHS_2_1_fields_1.ProtHHS_2_1_fields.find(_ => _ === questionName)) {
                answers[questionName] = value;
            }
            else if (/^please_specify[a-z0-9_]{5}$/.test(questionName)) {
                const previousQuestionName = answersArr[index - 1][0];
                answers['please_specify' + previousQuestionName] = value;
            }
            else if (/^what_type_of_incidents_took_place[a-z0-9_]{5}$/.test(questionName) ||
                /^when_did_the_incidents_occur[a-z0-9_]{5}$/.test(questionName) ||
                /^who_were_the_perpetrators_of_the_incident[a-z0-9_]{5}$/.test(questionName)) {
                let relatedParent;
                for (let i = index - 1; i === 0 || !relatedParent; i--) {
                    console.log('==>', questionName, i, answersArr[i]);
                    relatedParent = answersArr[i][0].match(/^(has_any_.*?)[a-z0-9_]{5}$/)?.[1];
                }
                answers[questionName.substring(0, questionName.length - 5) + relatedParent] = value;
            }
            else if (questionName === 'how_many_individuals_including_the_respondent_are_in_the_household') {
                answers.how_many_ind = value;
            }
            else if (/^where_are_you_current_living_oblast/.test(questionName)) {
                answers.where_are_you_current_living_oblast = value;
            }
            else if (/^where_are_you_current_living_raion/.test(questionName)) {
                answers.where_are_you_current_living_raion = value;
            }
            else if (/^where_are_you_current_living_hromada/.test(questionName)) {
                answers.where_are_you_current_living_hromada = value;
            }
            else if (/^what_is_your_area_of_origin_oblast/.test(questionName)) {
                answers.what_is_your_area_of_origin_oblast = value;
            }
            else if (/^what_is_your_area_of_origin_raion/.test(questionName)) {
                answers.what_is_your_area_of_origin_raion = value;
            }
            else if (/^what_is_your_area_of_origin_hromada/.test(questionName)) {
                answers.what_is_your_area_of_origin_hromada = value;
            }
            else if (questionName === 'why_dont_they_have_stauts') {
                answers.why_dont_they_have_status = value;
            }
            else if (questionName === 'has_any_member_of_your_household_experienced_any_protectionright_violation_incident') {
                answers.has_any_other_member_experienced_violence = value;
            }
            else if (questionName === 'has_any_adult_female_member_of_your_household_experienced_any_protectionright_violation_incident') {
                answers.has_any_adult_female_member_experienced_violence = value;
            }
            else if (questionName === 'has_any_adult_male_member_of_your_household_experienced_any_form_of_violence_within_the_last_6_months') {
                answers.has_any_adult_male_member_experienced_violence = value;
            }
            else if (questionName === 'has_any_girl_member_of_your_household_experienced_any_protectionright_violation_incident') {
                answers.has_any_girl_member_experienced_violence = value;
            }
            else if (questionName === 'how_many_household_members_lack_personal_documentation') {
                for (let i = 0; i < 12; i++) {
                    if (value >= i) {
                        answers[`does_${i}_lack_doc`] === 'other_specify';
                    }
                }
            }
            else if (questionName.startsWith('hh_unregistered_sex_')) {
                const hhIndex = questionName.match(/hh_unregistered_sex_(\d+)/)?.[1];
                if (hhIndex && +hhIndex <= 12) {
                    answers[`is_member_${hhIndex}_registered`] = 'no';
                }
            }
            else {
                unhandledQuestionName.add(questionName);
            }
        });
        Object.entries(answers).forEach(([questionName, answer]) => {
            checkOptions(questionName, answer);
        });
        return { ...row, answers2: answers };
    });
    console.error(unhandledOptions);
    console.warn(unhandledQuestionName);
    console.log(newData);
    // console.log(await koboSdk.getFormByVersion('aRHsewShwZhXiy8jrBj9zf', 'vDdYQZoNTT3wpZQa3L2T2f').then(_ => _.content.survey.map(_ => _.name)))
    // await koboSdk.getForm('aRHsewShwZhXiy8jrBj9zf').then(console.log)
})();
//# sourceMappingURL=index.js.map