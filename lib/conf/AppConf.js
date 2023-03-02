"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appConf = void 0;
const ts_utils_1 = require("@alexandreannic/ts-utils");
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const e = (0, ts_utils_1.env)(process.env);
exports.appConf = {
    port: e(ts_utils_1.int, (0, ts_utils_1.defaultValue)(80))('PORT'),
    kobo: {
        url: e((0, ts_utils_1.defaultValue)('https://kf.kobotoolbox.org'))('KOBO_URL'),
        token: e(ts_utils_1.required)('KOBO_TOKEN'),
    },
    db: {
        host: e(ts_utils_1.required)('DB_HOST'),
        user: e(ts_utils_1.required)('DB_USER'),
        database: e(ts_utils_1.required)('DB_NAME'),
        password: e(ts_utils_1.required)('DB_PASSWORD'),
        port: e(ts_utils_1.int, (0, ts_utils_1.defaultValue)(5432))('DB_PORT')
    }
};
//# sourceMappingURL=AppConf.js.map