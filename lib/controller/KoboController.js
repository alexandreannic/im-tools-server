"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KoboController = void 0;
class KoboController {
    constructor(pgClient, koboClient) {
        this.pgClient = pgClient;
        this.koboClient = koboClient;
        this.importAnswers = async (req, res, next) => {
            const answers = await this.koboClient.getAnswers('a5bMNqnRbitCHuM9j4Kbd3')
                .then(_ => _.results);
            res.status(200).json(answers);
        };
    }
}
exports.KoboController = KoboController;
//# sourceMappingURL=KoboController.js.map