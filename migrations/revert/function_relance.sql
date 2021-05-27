-- Revert ojob:function_relance from pg

BEGIN;

DROP FUNCTION relance;

COMMIT;
