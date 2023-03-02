"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRoutes = void 0;
const express_1 = __importDefault(require("express"));
const AppController_1 = require("./controller/AppController");
const KoboController_1 = require("./controller/KoboController");
const getRoutes = (pgClient, koboClient, logger) => {
    const router = express_1.default.Router();
    const app = new AppController_1.AppController(pgClient, koboClient, logger);
    const kobo = new KoboController_1.KoboController(pgClient, koboClient);
    router.get('/', app.index);
    router.get('/kobo/import', kobo.importAnswers);
    return router;
};
exports.getRoutes = getRoutes;
//# sourceMappingURL=Routes.js.map