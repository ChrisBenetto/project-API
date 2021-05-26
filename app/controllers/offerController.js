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
            await offerDataMapper.deleteOne(offerId);
            res.json(`L'enregistrement à été supprimé`);
        },
    updateOneOffer : async (req,res,next) => {
        try {

            const offerId = parseInt(req.params.id,10);
            const data = req.body;
            console.log("data" , data);
            if(!data) {
                return next();
            }
            for(const property in data){
                await offerDataMapper.updateOne(property,data[property],offerId)
            }
            res.json(`L'offre à été modifiée .`);

        } catch(error) {
        
            console.error(error)
            res.status(500).json("erreur serveur");
        }
    }
}