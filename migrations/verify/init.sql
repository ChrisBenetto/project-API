-- Verify ojob:init on pg

BEGIN;

SELECT * FROM "website" WHERE false;
SELECT * FROM "company" WHERE false;
SELECT * FROM "offer" WHERE false;

ROLLBACK;
