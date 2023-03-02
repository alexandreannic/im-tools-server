"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const KoboFormsId_1 = require("../conf/KoboFormsId");
const KoboTransformer_1 = require("../kobo/KoboFormTransformer/KoboTransformer");
const KoboTransformerNfiMpcaMyko_1 = require("../kobo/KoboFormTransformer/KoboTransformerNfiMpcaMyko");
const date_fns_1 = require("date-fns");
const KoboTransformerNfiMcpa_1 = require("../kobo/KoboFormTransformer/KoboTransformerNfiMcpa");
const KoboTransformerNfiMpcaNAA_1 = require("../kobo/KoboFormTransformer/KoboTransformerNfiMpcaNAA");
class AppController {
    constructor(pgClient, koboClient, logger, koboTransformClient = new KoboTransformer_1.KoboTransformClient(koboClient)) {
        this.pgClient = pgClient;
        this.koboClient = koboClient;
        this.logger = logger;
        this.koboTransformClient = koboTransformClient;
        this.index = async (req, res, next) => {
            this.logger.info(`Try...`);
            // const start = new Date(2022, 0, 1)
            // const end = new Date(2022, 11, 31)
            const start = (0, date_fns_1.sub)(new Date(), { days: 3 });
            const end = (0, date_fns_1.sub)(new Date(), { days: 2 });
            try {
                const test = await this.koboClient.getAnswers(KoboFormsId_1.koboFormsId.prod.protectionHh, { start, end });
                // const nfiMpcaData = await this.getNfiData(start, end)
                this.logger.info(`Done`);
                res.send({ test });
            }
            catch (e) {
                next(e);
            }
            // res.send({blanks, kits, counts: fcrmMpcaAnswers.length})
        };
        this.getNfiData = async (start, end) => {
            const params = { start, end };
            return Promise.all([
                this.koboTransformClient.getAnswers(KoboTransformerNfiMcpa_1.koboTransformerNfiMcpa, params)
                    .then(_ => _.results)
                    .then(res => {
                    let kits = 0;
                    let blanks = 0;
                    let mpcaAssistedPeoples = 0;
                    let cashForRent = 0;
                    res.forEach(_ => {
                        var _a, _b, _c;
                        blanks += _.kits.BLN;
                        mpcaAssistedPeoples += ((_a = _.program) === null || _a === void 0 ? void 0 : _a.includes(KoboTransformerNfiMcpa_1.Program.MPCA)) ? _.houseHoldSize : 0;
                        cashForRent += ((_b = _.program) === null || _b === void 0 ? void 0 : _b.includes(KoboTransformerNfiMcpa_1.Program.CashForRent)) ? _.houseHoldSize : 0;
                        if (_.status === KoboTransformerNfiMcpa_1.Status.IPD) {
                            kits += Object.keys((_c = _.kits) !== null && _c !== void 0 ? _c : {}).reduce((sum, key) => sum + _.kits[key], 0) - _.kits.BLN;
                        }
                    });
                    return { kits, blanks, mpcaAssistedPeoples, cashForRent };
                }),
                this.koboTransformClient.getAnswers(KoboTransformerNfiMpcaMyko_1.koboTransformerNfiMpcaMyko, params)
                    .then(_ => _.results)
                    .then(res => {
                    let kits = 0;
                    let blanks = 0;
                    res.forEach(_ => {
                        var _a;
                        blanks += _.kits.BLN;
                        kits += Object.keys((_a = _.kits) !== null && _a !== void 0 ? _a : {}).reduce((sum, key) => sum + _.kits[key], 0) - _.kits.BLN;
                    });
                    return { kits, blanks };
                }),
                this.koboTransformClient.getAnswers(KoboTransformerNfiMpcaNAA_1.koboTransformerNfiMcpaNaa, params)
                    .then(_ => _.results)
                    .then(res => {
                    let kits = 0;
                    let blanks = 0;
                    res.forEach(_ => {
                        var _a;
                        blanks += _.kits.BLN;
                        kits += Object.keys((_a = _.kits) !== null && _a !== void 0 ? _a : {}).reduce((sum, key) => sum + _.kits[key], 0) - _.kits.BLN;
                    });
                    return { kits, blanks };
                }),
            ]).then(_ => _.reduce((acc, curr) => {
                var _a, _b, _c, _d;
                return ({
                    kits: acc.kits + curr.kits,
                    blanks: acc.blanks + curr.blanks,
                    mpcaAssistedPeoples: ((_a = acc.mpcaAssistedPeoples) !== null && _a !== void 0 ? _a : 0) + ((_b = curr.mpcaAssistedPeoples) !== null && _b !== void 0 ? _b : 0),
                    cashForRent: ((_c = acc.cashForRent) !== null && _c !== void 0 ? _c : 0) + ((_d = curr.cashForRent) !== null && _d !== void 0 ? _d : 0),
                });
            }));
        };
        this.uploadAnswers = async (req, res, next) => {
            const answers = await this.koboClient.getAnswers(KoboFormsId_1.koboFormsId.prod.fcrmMpca)
                .then(_ => _.results)
                .then();
            res.send(answers);
        };
    }
}
exports.AppController = AppController;
//# sourceMappingURL=AppController.js.map