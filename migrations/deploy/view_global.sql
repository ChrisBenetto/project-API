-- Deploy ojob:view_global to pg

BEGIN;

CREATE VIEW "view_global" AS 
SELECT
"offer"."employment" AS "Offre",
"offer"."notes" AS "Mémo",
"offer"."contact" AS "Contact",
"offer"."offer_url" AS "Lien de l'offre",
"website"."name" AS "Site d'emploi",
"company"."name" AS "Nom de l'entreprise"
FROM "offer"
JOIN "website"
ON "website"."id" = "offer"."website_id"
JOIN "company"
ON "company"."id" = "offer"."company_id";

COMMIT;
