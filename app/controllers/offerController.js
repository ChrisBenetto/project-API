const offerDataMapper = require('../datamappers/offerDataMapper');
module.exports = {

    allOffers : async (_,res) => {

        const offers = await offerDataMapper.getAll();
        res.json({ data : {offers}});
    },

    oneOffer : async (req,res) => {

        const offerId = parseInt(req.params.id,10);
        const offer = await offerDataMapper.getOne(offerId);
        res.json({data : {offer}});
    },

    addOffer : async (req,res) => {

        try{
            
            const data = await offerDataMapper.addOne(req.body);
            console.log(data);
            res.json({data});
        } catch (error) {
            console.error
            res.status(500).json(`Erreur lors de l'insertion`);
        }
        
    },

    deleteOffer : async(req,res) => {
            const offerId = parseInt(req.params.id,10);
            await oferDataMapper.deleteOne(offerId);
            res.json(`L'enregistrement à été supprimé`);
        }
    }