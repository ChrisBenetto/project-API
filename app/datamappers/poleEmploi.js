const fetch = require('node-fetch');
require('dotenv').config()

module.exports = {

    /**
     * 
     * @param {Id du job} id 
     * @see https://pole-emploi.io/data/api/offres-emploi?tabgroup-api=documentation&doc-section=api-doc-section-consulter-une-offre
     */
    searchOneJobInPE: async (id) => {

        try {

            let apiUrl = `https://api.emploi-store.fr/partenaire/offresdemploi/v2/offres/${id}`;
            const response = await fetch(apiUrl, {
                headers: {
                    Authorization: "Bearer " + process.env.TOKEN_API_PE
                }
            });
            if (response.status !== 200) {
                throw new Error(`Erreur de saisie`)
            }
            return await response.json();

        } catch (error) {
            console.error(error);
        }
    },
    /**
     *  @param {codeMétier} "EX : code: "62", "libelle": "Programmation, conseil et autres activités informatiques"
     *  @param {typeContrat} "EX : CDI"
     *  @param {departement} "EX : 71"
     *  @returns {Jobs} 
        
     */
    searchJobsWithFilerInPE: async (codeMetier, typeContrat , departement ) => {

        try {
            let apiUrl = `https://api.emploi-store.fr/partenaire/offresdemploi/v2/offres/search?departement=${departement}&secteurActivite=${codeMetier}&typeContrat=${typeContrat}`;
            const response = await fetch(apiUrl, {
                headers: {
                    Authorization: "Bearer " + process.env.TOKEN_API_PE
                }
            });
            if (response.status !== 200) {
                throw new Error(`Erreur de saisie`);
            }
            return await response.json();

        } catch (error) {
            console.error(error);
        }
    },
    /**
     * Génération d'un token d'accès à l'API PE
     * @params {variables d'environnement}
     */
    generateToken : async () => {
        try {
            let apiUrl =`https://entreprise.pole-emploi.fr/
            connexion/oauth2/access_token?
            realm=/partenaire
            &client_id=${process.env.ID_API_PE}
            &client_secret=${process.env.SECRET_KEY_API_PE}
            &scope=${process.env.SCOPE_API_PE}`;
            const response = await fetch(apiUrl , {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }});
            if (response.status !== 403) {
                throw new Error(`Accès refusé`)
            }
            if (response.status !== 200) {
                throw new Error(`Erreur de saisie`)
            }
            return await response.json(); 
            
        } catch (error) {
            console.error(error)
        }
    }
}
