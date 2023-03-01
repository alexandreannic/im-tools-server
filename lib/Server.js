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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const bodyParser = __importStar(require("body-parser"));
const Routes_1 = require("./Routes");
const Common_1 = require("./utils/Common");
class Server {
    constructor(conf, pgClient, koboClient, logger) {
        this.conf = conf;
        this.pgClient = pgClient;
        this.koboClient = koboClient;
        this.logger = logger;
        this.errorHandler = (err, req, res, next) => {
            const errorId = (0, Common_1.genUUID)();
            this.logger.error(`[${errorId}] Error ${err.code}: ${err.message}\n${err.stack}`);
            console.error(err.error);
            res.status(err.code).json({
                data: err.code === 500 ? 'Something went wrong.' : err.message,
                errorId
            });
        };
        this.start = () => {
            const app = (0, express_1.default)();
            app.use(Server.corsHeader);
            app.use(bodyParser.json());
            app.use(bodyParser.urlencoded({ extended: false }));
            app.use((0, Routes_1.getRoutes)(this.pgClient, this.koboClient, this.logger));
            app.use(this.errorHandler);
            app.listen(this.conf.port, () => {
                this.logger.info(`server start listening on port ${this.conf.port}`);
            });
        };
    }
}
exports.Server = Server;
Server.corsHeader = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
};
//# sourceMappingURL=Server.js.map