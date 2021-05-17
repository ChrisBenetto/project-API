--Seeding
INSERT INTO "website" ("name") VALUES ('LinkedIn');
INSERT INTO "website" ("name")VALUES ('Indeed');

INSERT INTO "company" ("name","structure","department") VALUES ('company_test' , 'SARL' , '71');
INSERT INTO "company" ("name","structure","department") VALUES ('structure_test' , 'SAS' , '75');

INSERT INTO "offer" ("employment" , "notes" ,"contact","offer_url","website_id","company_id")
VALUES('Développeur Front-End','Prise de contact par mail','Mr Dupont','jobs@company.fr',2,1);

INSERT INTO "offer" ("employment" , "notes" ,"contact","offer_url","website_id","company_id")
VALUES('Développeur Back-End','Candidature spontanée par courrier','Mr Tech','www.structure-test.fr',1,2);