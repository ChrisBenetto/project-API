const express = require('express');
const companyController = require('../controllers/companyController');
const websiteController = require('../controllers/websiteController');
const offerController = require('../controllers/offerController');
const router = express.Router();
    /**
     * Vue d'ensemble
     * @route GET /global
     * @returns { viewGlobal } 200 - Vue d'ensemble
     * @returns {Error} 500 - Une erreur serveur
     */
router.get('/global' , offerController.getGlobalView);

router.route('/companies')
    /**
     * Liste des structures
     * @route GET /companies
     * @returns {Companies} 200 - La liste des structures
     * @returns {Error} 500 - Une erreur serveur
     */
    .get(companyController.allCompanies)
    /**
     * Ajouter une structure
     * @route POST /companies
     * @param {company} company.body.required - Un objet contenant les informations d'une structure
     * @returns {Company} 200 - La structure crée
     * @returns {Error} 500 - Structure déja présente
     */
    .post(companyController.addOneCompany);

router.route('/company/:id')
    .get(companyController.oneCompany)
    .patch(companyController.updateOneCompany)
    .delete(companyController.deleteOneCompany);

router.route('/websites')
    .get(websiteController.allWebsites)
    .post(websiteController.addOneWebsite);
router.route('/website/:id')
    .get(websiteController.oneWebsite)
    .patch(websiteController.updateOneWebsite)
    .delete(websiteController.deleteOneWebsite);

router.route('/offers')
    .get(offerController.allOffers)
    .post(offerController.addOffer);

router.route('/offer/:id')
    .get(offerController.oneOffer)
    .patch(offerController.updateOneOffer)
    .delete(offerController.deleteOffer)






module.exports = router;