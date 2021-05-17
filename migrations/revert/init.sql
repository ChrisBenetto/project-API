-- Revert ojob:init from pg

BEGIN;

DROP TABLE "website" , "company" ,  "offer";

COMMIT;
