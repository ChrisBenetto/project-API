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
    }

}