"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KoboTransformClient = exports.KoboTransformer = void 0;
const Common_1 = require("../../utils/Common");
class KoboTransformer {
    constructor(formId, columnsMap, transformer) {
        this.formId = formId;
        this.columnsMap = columnsMap;
        this.transformer = transformer;
        this.transform = (a) => {
            const res = (0, Common_1.pipe)((0, Common_1.mapObjectColumns)(this.columnsMap), this.transformer)(a);
            // const res = mapObjectColumns(this.columnsMap)(a)
            // const x = (this.transformer ?? (_ => _))(res)
            // console.log('before', res)
            // console.log('after', x)
            return res;
        };
    }
}
exports.KoboTransformer = KoboTransformer;
class KoboTransformClient {
    constructor(api) {
        this.api = api;
        this.getAnswers = (parser, params) => {
            return this.api.getAnswers(parser.formId, params).then(_ => ({
                ..._,
                results: _.results.map(parser.transform)
            }));
        };
    }
}
exports.KoboTransformClient = KoboTransformClient;
//# sourceMappingURL=KoboTransformer.js.map