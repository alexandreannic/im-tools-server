"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._1 = void 0;
exports._1 = {
    up: `
    CREATE TABLE IF NOT EXISTS "koboAnswers" (
      "start" TIMESTAMPTZ NOT NULL,
      "end" TIMESTAMPTZ NOT NULL,
      "_uuid" VARCHAR NOT NULL,
      "_id" VARCHAR NOT NULL,
      "__version__" VARCHAR NOT NULL,
      "_submission_time" TIMESTAMPTZ NOT NULL,
      "_status" VARCHAR,
      "_geolocation" VARCHAR
    )
  `,
    down: ` 
    DROP TABLE "koboAnswers"
  `
};
//# sourceMappingURL=1.js.map