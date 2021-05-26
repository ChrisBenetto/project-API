const express = require('express');
const companyController = require('../controllers/companyController');
const websiteController = require('../controllers/websiteController');
const offerController = require('../controllers/offerController');
const router = express.Router();

/* Routes companies */

router.get('/companies' , companyController.allCompanies);
router.post('/companies', companyController.addOneCompany);
router.get('/company/:id' , companyController.oneCompany);
router.delete('/company/:id', companyController.deleteOneCompany);
router.patch('/company/:id', companyController.updateOneCompany);


router.get('/websites' , websiteController.allWebsites);
router.post('/websites', websiteController.addOneWebsite);
router.get('/website/:id' , websiteController.oneWebsite);
router.delete('/website/:id', websiteController.deleteOneWebsite);
router.patch('/website/:id', websiteController.updateOneWebsite);


router.get('/offers' , offerController.allOffers);
router.post('/offers' , offerController.addOffer);
router.get('/offer/:id' , offerController.oneOffer);
router.delete('/offer/:id' , offerController.deleteOffer);
router.patch('/offer/:id', offerController.updateOneOffer);

router.get('/global' , offerController.getGlobalView);



module.exports = router;