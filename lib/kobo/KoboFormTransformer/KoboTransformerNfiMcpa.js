"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.koboTransformerNfiMcpa = exports.Status = exports.Program = void 0;
const Common_1 = require("../../utils/Common");
const KoboTransformer_1 = require("./KoboTransformer");
const KoboFormsId_1 = require("../../conf/KoboFormsId");
var Program;
(function (Program) {
    Program["MPCA"] = "MPCA";
    Program["NFI"] = "NFI";
    Program["CashForRent"] = "CashForRent";
})(Program = exports.Program || (exports.Program = {}));
var Status;
(function (Status) {
    Status["IPD"] = "IDP";
})(Status = exports.Status || (exports.Status = {}));
exports.koboTransformerNfiMcpa = new KoboTransformer_1.KoboTransformer(KoboFormsId_1.koboFormsId.prod.fcrmMpca, {
    oblast: 'module_eligibility_screening/oblast',
    program: 'group_xp17b32/Programme',
    status: 'module_eligibility_screening/status',
    houseHoldSize: 'module_eligibility_screening/group_kj9wg97/Total_Family',
    kits: {
        HKMV: 'module_eligibility_screening_001/group_un9ff13_header/HKMV_',
        HKF: 'module_eligibility_screening_001/group_un9ff13_header/HKF_',
        NFKF_NFI: 'module_eligibility_screening_001/group_un9ff13_header/NFKF_NFI_',
        KS: 'module_eligibility_screening_001/group_un9ff13_header/KS_',
        BK1: 'module_eligibility_screening_001/group_un9ff13_header/BK_Baby_Kit_',
        BK2: 'module_eligibility_screening_001/group_un9ff13_header/BK_Baby_Kit',
        BK3: 'module_eligibility_screening_001/group_un9ff13_header/BK_Baby_Kit_001',
        BK4: 'module_eligibility_screening_001/group_un9ff13_header/BK_Baby_Kit_002',
        WKB1: 'module_eligibility_screening_001/group_un9ff13_header/WKB1_1_',
        WKB2: 'module_eligibility_screening_001/group_un9ff13_header/WKB2_2_',
        WKB3: 'module_eligibility_screening_001/group_un9ff13_header/WKB3_3_',
        WKB4: 'module_eligibility_screening_001/group_un9ff13_header/WKB4_4_',
        BLN: 'module_eligibility_screening_001/group_un9ff13_header/BLN_',
        SL: 'module_eligibility_screening_001/group_un9ff13_header/BLN',
    },
    kitsTotal: {
        Kits: 'module_eligibility_screening_001/group_un9ff13_header/Total_Kits',
        BBKits: 'module_eligibility_screening_001/group_un9ff13_header/Total_BBKits',
        BBKits_Hygiene: 'module_eligibility_screening_001/group_un9ff13_header/Total_BBKits_Hygiene',
        BBKits_Winter: 'module_eligibility_screening_001/group_un9ff13_header/Total_BBKits_Winter',
    },
    kitsTotalCost: {
        HKMV: 'module_eligibility_screening_001/group_un9ff13_header/Total_Cost_HKMV',
        HKF: 'module_eligibility_screening_001/group_un9ff13_header/Total_Cost_HKF',
        NFKF: 'module_eligibility_screening_001/group_un9ff13_header/Total_Cost_NFKF',
        KS: 'module_eligibility_screening_001/group_un9ff13_header/Total_Cost_KS',
        BK: 'module_eligibility_screening_001/group_un9ff13_header/Total_Cost_BK',
        WKB1: 'module_eligibility_screening_001/group_un9ff13_header/Total_Cost_WKB1',
        WKB2: 'module_eligibility_screening_001/group_un9ff13_header/Total_Cost_WKB2',
        WKB3: 'module_eligibility_screening_001/group_un9ff13_header/Total_Cost_WKB3',
        WKB4: 'module_eligibility_screening_001/group_un9ff13_header/Total_Cost_WKB4',
        BLN: 'module_eligibility_screening_001/group_un9ff13_header/Total_Cost_BLN',
        Allkits: 'module_eligibility_screening_001/group_un9ff13_header/Total_Cost_Allkits',
    },
    kitsCheck: 'module_eligibility_screening_001/group_checks/Kits_Check'
}, _ => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30, _31, _32, _33, _34;
    return {
        ..._,
        status: {
            'status_idp': Status.IPD
        }[_.status],
        program: (0, Common_1.mapMultipleChoices)(_.program, {
            'nfi': Program.NFI,
            'mpca': Program.MPCA,
            'cash_for_rent': Program.CashForRent,
        }),
        houseHoldSize: Number((_a = _.houseHoldSize) !== null && _a !== void 0 ? _a : 0),
        kits: {
            HKMV: Number((_c = (_b = _.kits) === null || _b === void 0 ? void 0 : _b.HKMV) !== null && _c !== void 0 ? _c : 0),
            HKF: Number((_e = (_d = _.kits) === null || _d === void 0 ? void 0 : _d.HKF) !== null && _e !== void 0 ? _e : 0),
            NFKF_NFI: Number((_g = (_f = _.kits) === null || _f === void 0 ? void 0 : _f.NFKF_NFI) !== null && _g !== void 0 ? _g : 0),
            KS: Number((_j = (_h = _.kits) === null || _h === void 0 ? void 0 : _h.KS) !== null && _j !== void 0 ? _j : 0),
            BK1: Number((_l = (_k = _.kits) === null || _k === void 0 ? void 0 : _k.BK1) !== null && _l !== void 0 ? _l : 0),
            BK2: Number((_o = (_m = _.kits) === null || _m === void 0 ? void 0 : _m.BK2) !== null && _o !== void 0 ? _o : 0),
            BK3: Number((_q = (_p = _.kits) === null || _p === void 0 ? void 0 : _p.BK3) !== null && _q !== void 0 ? _q : 0),
            BK4: Number((_s = (_r = _.kits) === null || _r === void 0 ? void 0 : _r.BK4) !== null && _s !== void 0 ? _s : 0),
            WKB1: Number((_u = (_t = _.kits) === null || _t === void 0 ? void 0 : _t.WKB1) !== null && _u !== void 0 ? _u : 0),
            WKB2: Number((_w = (_v = _.kits) === null || _v === void 0 ? void 0 : _v.WKB2) !== null && _w !== void 0 ? _w : 0),
            WKB3: Number((_y = (_x = _.kits) === null || _x === void 0 ? void 0 : _x.WKB3) !== null && _y !== void 0 ? _y : 0),
            WKB4: Number((_0 = (_z = _.kits) === null || _z === void 0 ? void 0 : _z.WKB4) !== null && _0 !== void 0 ? _0 : 0),
            BLN: Number((_2 = (_1 = _.kits) === null || _1 === void 0 ? void 0 : _1.BLN) !== null && _2 !== void 0 ? _2 : 0),
            SL: Number((_4 = (_3 = _.kits) === null || _3 === void 0 ? void 0 : _3.SL) !== null && _4 !== void 0 ? _4 : 0),
        },
        kitsTotal: {
            Kits: Number((_6 = (_5 = _.kitsTotal) === null || _5 === void 0 ? void 0 : _5.Kits) !== null && _6 !== void 0 ? _6 : 0),
            BBKits: Number((_8 = (_7 = _.kitsTotal) === null || _7 === void 0 ? void 0 : _7.BBKits) !== null && _8 !== void 0 ? _8 : 0),
            BBKits_Hygiene: Number((_10 = (_9 = _.kitsTotal) === null || _9 === void 0 ? void 0 : _9.BBKits_Hygiene) !== null && _10 !== void 0 ? _10 : 0),
            BBKits_Winter: Number((_12 = (_11 = _.kitsTotal) === null || _11 === void 0 ? void 0 : _11.BBKits_Winter) !== null && _12 !== void 0 ? _12 : 0),
        },
        kitsTotalCost: {
            HKMV: Number((_14 = (_13 = _.kitsTotalCost) === null || _13 === void 0 ? void 0 : _13.HKMV) !== null && _14 !== void 0 ? _14 : 0),
            HKF: Number((_16 = (_15 = _.kitsTotalCost) === null || _15 === void 0 ? void 0 : _15.HKF) !== null && _16 !== void 0 ? _16 : 0),
            NFKF: Number((_18 = (_17 = _.kitsTotalCost) === null || _17 === void 0 ? void 0 : _17.NFKF) !== null && _18 !== void 0 ? _18 : 0),
            KS: Number((_20 = (_19 = _.kitsTotalCost) === null || _19 === void 0 ? void 0 : _19.KS) !== null && _20 !== void 0 ? _20 : 0),
            BK: Number((_22 = (_21 = _.kitsTotalCost) === null || _21 === void 0 ? void 0 : _21.BK) !== null && _22 !== void 0 ? _22 : 0),
            WKB1: Number((_24 = (_23 = _.kitsTotalCost) === null || _23 === void 0 ? void 0 : _23.WKB1) !== null && _24 !== void 0 ? _24 : 0),
            WKB2: Number((_26 = (_25 = _.kitsTotalCost) === null || _25 === void 0 ? void 0 : _25.WKB2) !== null && _26 !== void 0 ? _26 : 0),
            WKB3: Number((_28 = (_27 = _.kitsTotalCost) === null || _27 === void 0 ? void 0 : _27.WKB3) !== null && _28 !== void 0 ? _28 : 0),
            WKB4: Number((_30 = (_29 = _.kitsTotalCost) === null || _29 === void 0 ? void 0 : _29.WKB4) !== null && _30 !== void 0 ? _30 : 0),
            BLN: Number((_32 = (_31 = _.kitsTotalCost) === null || _31 === void 0 ? void 0 : _31.BLN) !== null && _32 !== void 0 ? _32 : 0),
            Allkits: Number((_34 = (_33 = _.kitsTotalCost) === null || _33 === void 0 ? void 0 : _33.Allkits) !== null && _34 !== void 0 ? _34 : 0),
        },
    };
});
//# sourceMappingURL=KoboTransformerNfiMcpa.js.map