-- Revert ojob:view_global from pg

BEGIN;

DROP VIEW view_global;

COMMIT;
