"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._1 = void 0;
exports._1 = {
    up: `
    CREATE TABLE IF NOT EXISTS "koboAnswers" (
      "koboId" VARCHAR NOT NULL,
      "version" VARCHAR NOT NULL,
      "start" TIMESTAMPTZ NOT NULL,
      "end" TIMESTAMPTZ NOT NULL,
      "submission" TIMESTAMPTZ NOT NULL,
      "status" VARCHAR,
      "submittedBy" VARCHAR,
    )
  `,
    down: ` 
    DROP TABLE "koboAnswers"
  `
};
//# sourceMappingURL=1.js.map