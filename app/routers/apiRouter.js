const express = require('express');
const companyController = require('../controllers/companyController');
const websiteController = require('../controllers/websiteController');
const offerController = require('../controllers/offerController');
const router = express.Router();

/* Routes companies */

router.get('/companies' , companyController.allCompanies);
router.get('/company/:id' , companyController.oneCompany);

router.get('/websites' , websiteController.allWebsites);
router.get('/website/:id' , websiteController.oneWebsite);

router.get('/offers' , offerController.allOffers);
router.get('/offer/:id' , offerController.oneOffer);



module.exports = router;