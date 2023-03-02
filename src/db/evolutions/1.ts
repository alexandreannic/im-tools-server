export const _1 = {
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
}
