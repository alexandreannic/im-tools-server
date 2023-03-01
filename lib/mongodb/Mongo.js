"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mongo = void 0;
const mongodb_1 = require("mongodb");
class Mongo {
}
exports.Mongo = Mongo;
_a = Mongo;
Mongo.connect = async () => {
    const uri = 'mongodb+srv://alexandreannic:sieges78@drc.e1un2uf.mongodb.net/?retryWrites=true&w=majority';
    const client = new mongodb_1.MongoClient(uri, { serverApi: mongodb_1.ServerApiVersion.v1 });
    await client.connect();
    const db = client.db('drc');
    const answers = db.collection('answers');
    return {
        client,
        db,
        answers,
    };
};
//# sourceMappingURL=Mongo.js.map