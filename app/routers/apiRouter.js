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
    /**
     * Recupérer une structure
     * @route GET /company/{id}
     * @param {number} id - Identifiant de la structure
     * @returns {Structure} 200 - La structure
     * @returns {Error} 500 - Une erreur serveur
     */
    .get(companyController.oneCompany)
      /**
     * Mise à jour d'une structure
     * @route PATCH /company/{id}
     * @param {number} id - Identifiant de la structure
     * @returns {Structure} 200 - La structure
     * @returns {Error} 500 - Une erreur serveur
     */
    .patch(companyController.updateOneCompany)
     /**
     * Supprimer une structure
     * @route DELETE /company/{id}
     * @param {number} id - Identifiant de l'auteur
     * @returns {Structure} 204 - <empty content>
     * @returns {Error} 500 - Une erreur serveur
     */
    .delete(companyController.deleteOneCompany);

router.route('/websites')
    /**
     * Liste des sites web
     * @route GET /website
     * @returns {Companies} 200 - La liste des site web
     * @returns {Error} 500 - Une erreur serveur
     */
    .get(websiteController.allWebsites)
     /**
     * Ajouter un site web
     * @route POST /website
     * @param {company} website.body.required - Un objet contenant les informations d'un site web
     * @returns {Company} 200 - Le site web crée
     * @returns {Error} 500 - Site web déja présent
     */
    .post(websiteController.addOneWebsite);
router.route('/website/:id')
    /**
     * Recupérer un site web
     * @route GET /website/{id}
     * @param {number} id - Identifiant du site web
     * @returns {Website} 200 - Le site Web
     * @returns {Error} 500 - Une erreur serveur
     */
    .get(websiteController.oneWebsite)
     /**
     * Mise à jour d'un site web
     * @route PATCH /website/{id}
     * @param {number} id - Identifiant du site web
     * @returns {Website} 200 - Le site Web
     * @returns {Error} 500 - Une erreur serveur
     */
    .patch(websiteController.updateOneWebsite)
     /**
     * Supprimer un site
     * @route DELETE /website/{id}
     * @param {number} id - Identifiant du site web
     * @returns {Website} 204 - <empty content>
     * @returns {Error} 500 - Une erreur serveur
     */
    .delete(websiteController.deleteOneWebsite);

router.route('/offers')
    /**
     * Liste des offres
     * @route GET /offers
     * @returns {offers} 200 - La liste des offres
     * @returns {Error} 500 - Une erreur serveur
     */
    .get(offerController.allOffers)
      /**
     * Ajouter une offre
     * @route POST /offers
     * @param {Offer} offer.body.required - Un objet contenant les informations d'une offre
     * @returns {Offer} 200 - L'offre crée
     * @returns {Error} 500 - Offre déja présente
     */
    .post(offerController.addOffer);

router.route('/offer/:id')
    /**
     * Recupérer une offre
     * @route GET /offer/{id}
     * @param {number} id - Identifiant de l'offre
     * @returns {Offer} 200 - L'offre
     * @returns {Error} 500 - Une erreur serveur
     */
    .get(offerController.oneOffer)
       /**
     * Mise à jour d'une offre
     * @route PATCH /offer/{id}
     * @param {number} id - Identifiant de l'offre
     * @returns {Offer} 200 - L'offre
     * @returns {Error} 500 - Une erreur serveur
     */
    .patch(offerController.updateOneOffer)
    /**
     * Supprimer une offre
     * @route DELETE /offer/{id}
     * @param {number} id - Identifiant de l'offre
     * @returns {Offer} 204 - <empty content>
     * @returns {Error} 500 - Une erreur serveur
     */
    .delete(offerController.deleteOffer)






module.exports = router;