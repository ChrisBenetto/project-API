-- Deploy ojob:init to pg

BEGIN;

CREATE TABLE IF NOT EXISTS "website" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS "company" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL UNIQUE,
    "structure" TEXT NOT NULL,
    "department" INT NOT NULL 
);

CREATE TABLE IF NOT EXISTS "offer" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "employment" TEXT NOT NULL UNIQUE,
    "postulation_date" timestamptz DEFAULT now(),
    "notes" TEXT,
    "contact" TEXT,
    "relaunch_date" timestamptz,
    "offer_url" TEXT NOT NULL UNIQUE,
    "website_id" INT REFERENCES "website"("id"),
    "company_id" INT REFERENCES "company"("id")
);

COMMIT;
