-- Deploy ojob:function_relance to pg

BEGIN;

CREATE OR REPLACE FUNCTION relance(begin TIMESTAMPTZ) RETURNS timestamptz AS $$

SELECT(begin + '7 days'::interval);

$$ LANGUAGE SQL;

ALTER TABLE "offer"
    ALTER COLUMN "relaunch_date" SET DEFAULT relance(NOW());

COMMIT;
