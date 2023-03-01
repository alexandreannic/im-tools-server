"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.koboTransformerNfiMcpaNaa = void 0;
const KoboTransformer_1 = require("./KoboTransformer");
const KoboFormsId_1 = require("../../conf/KoboFormsId");
exports.koboTransformerNfiMcpaNaa = new KoboTransformer_1.KoboTransformer(KoboFormsId_1.koboFormsId.prod.fcrmMpcaNAA, {
    kits: {
        HKMV: "module_eligibility_screening_001/group_un9ff13_header/HKMV_",
        HKF: "module_eligibility_screening_001/group_un9ff13_header/HKF_",
        BLN: "module_eligibility_screening_001/group_un9ff13_header/BLN_",
        WKB1: "module_eligibility_screening_001/group_un9ff13_header/WKB1_How_many",
        WKB2: "module_eligibility_screening_001/group_un9ff13_header/WKB2_How_many",
        WKB3: "module_eligibility_screening_001/group_un9ff13_header/WKB3_How_many",
        WKB4: "module_eligibility_screening_001/group_un9ff13_header/WKB4_How_many",
        BK1: "module_eligibility_screening_001/group_un9ff13_header/BK1_How_many",
        BK2: "module_eligibility_screening_001/group_un9ff13_header/BK2_How_many",
        BK3: "module_eligibility_screening_001/group_un9ff13_header/BK3_How_many",
        BK4: "module_eligibility_screening_001/group_un9ff13_header/BK4_How_many",
    },
    kitsTotalCost: {
        HKMV: "module_eligibility_screening_001/group_un9ff13_header/Total_Cost_HKMV",
        HKF: "module_eligibility_screening_001/group_un9ff13_header/Total_Cost_HKF",
        BLN: "module_eligibility_screening_001/group_un9ff13_header/Total_Cost_BLN",
        Allkits: "module_eligibility_screening_001/group_un9ff13_header/Total_Cost_Allkits",
    },
}, _ => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
    return {
        kits: {
            HKMV: Number((_a = _.kits.HKMV) !== null && _a !== void 0 ? _a : 0),
            HKF: Number((_b = _.kits.HKF) !== null && _b !== void 0 ? _b : 0),
            BLN: Number((_c = _.kits.BLN) !== null && _c !== void 0 ? _c : 0),
            WKB1: Number((_d = _.kits.WKB1) !== null && _d !== void 0 ? _d : 0),
            WKB2: Number((_e = _.kits.WKB2) !== null && _e !== void 0 ? _e : 0),
            WKB3: Number((_f = _.kits.WKB3) !== null && _f !== void 0 ? _f : 0),
            WKB4: Number((_g = _.kits.WKB4) !== null && _g !== void 0 ? _g : 0),
            BK1: Number((_h = _.kits.BK1) !== null && _h !== void 0 ? _h : 0),
            BK2: Number((_j = _.kits.BK2) !== null && _j !== void 0 ? _j : 0),
            BK3: Number((_k = _.kits.BK3) !== null && _k !== void 0 ? _k : 0),
            BK4: Number((_l = _.kits.BK4) !== null && _l !== void 0 ? _l : 0),
        },
        kitsTotalCost: {
            HKMV: Number((_m = _.kitsTotalCost.HKMV) !== null && _m !== void 0 ? _m : 0),
            HKF: Number((_o = _.kitsTotalCost.HKF) !== null && _o !== void 0 ? _o : 0),
            BLN: Number((_p = _.kitsTotalCost.BLN) !== null && _p !== void 0 ? _p : 0),
            Allkits: Number((_q = _.kitsTotalCost.Allkits) !== null && _q !== void 0 ? _q : 0),
        }
    };
});
//# sourceMappingURL=KoboTransformerNfiMpcaNAA.js.map