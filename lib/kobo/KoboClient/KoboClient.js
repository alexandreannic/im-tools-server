"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KoboClient = void 0;
const Common_1 = require("../../utils/Common");
class KoboClient {
    constructor(api) {
        this.api = api;
        this.getAnswers = (formId, params) => {
            let query = {};
            if ((params === null || params === void 0 ? void 0 : params.start) && params.end) {
                query = {
                    '$and': [
                        // {_submission_time: {'$gt': KoboClient.parseDate(params.start)}},
                        // {_submission_time: {'$lt': KoboClient.parseDate(params.end)}},
                        { _submission_time: { '$gt': KoboClient.parseDate(params.start) } },
                        { _submission_time: { '$lt': KoboClient.parseDate(params.end) } },
                    ]
                };
            }
            else if (params === null || params === void 0 ? void 0 : params.start) {
                query = { _submission_time: { '$gt': KoboClient.parseDate(params.start) } };
            }
            else if (params === null || params === void 0 ? void 0 : params.end) {
                query = { _submission_time: { '$lt': KoboClient.parseDate(params.end) } };
            }
            // const query = JSON.stringify({
            //   ...(params?.start || params?.end) && {
            //     _submission_time: {
            //       ...params?.start && {'$gt': KoboClient.parseDate(params.start)},
            //       ...params?.end && {'lt': KoboClient.parseDate(params.end)},
            //     },
            //   },
            // })
            return this.api.get(`/v2/assets/${formId}/data.json`, { qs: { query: JSON.stringify(query) } })
                .then(res => {
                const results = res.results.map(_ => ({
                    ..._,
                    start: new Date(_.start),
                    end: new Date(_.end),
                    _submission_time: new Date(_._submission_time),
                }));
                return {
                    ...res,
                    results
                };
            });
        };
    }
}
exports.KoboClient = KoboClient;
KoboClient.parseDate = Common_1.toYYYYMMDD;
KoboClient.genAuthorizationHeader = (token) => `Token ${token}`;
//# sourceMappingURL=KoboClient.js.map