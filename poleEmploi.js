const fetch = require('node-fetch');
require('dotenv').config()

module.exports = {

    /**
     * 
     * @param {Id du job} id 
     * @see https://pole-emploi.io/data/api/offres-emploi?tabgroup-api=documentation&doc-section=api-doc-section-consulter-une-offre
     */
    searchOneJobWithPE: async (id) => {

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
            let body = await response.json();
            console.log(body.intitule);
        } catch (error) {
            console.error(error);
        }
    },
    /**
     *  @param {codeMétier} "code: "62", "libelle": "Programmation, conseil et autres activités informatiques"
        
     */
    searchItJobWithPE: async (codeMetier, typeContrat , departement ) => {

        try {
            let apiUrl = `https://api.emploi-store.fr/partenaire/offresdemploi/v2/offres/search?departement=${departement}&secteurActivite=${codeMetier}&typeContrat=${typeContrat}`;
            const response = await fetch(apiUrl, {
                headers: {
                    Authorization: "Bearer " + process.env.TOKEN_API_PE
                }
            });
            if (response.status !== 200) {
                throw new Error(`Erreur de saisie`)
            }
            let body = await response.json();
            console.log(body.intitule);
        } catch (error) {
            console.error(error);
        }
    }
}
