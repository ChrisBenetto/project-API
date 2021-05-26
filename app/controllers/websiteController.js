const websiteDataMapper = require('../datamappers/websiteDataMapper');

module.exports = {

    allWebsites : async (_,res) => {

        const websites = await websiteDataMapper.getAll();
        res.json({ data : {websites}});
    },

    oneWebsite : async (req,res) => {

        const websiteId = parseInt(req.params.id,10);
        const website = await websiteDataMapper.getOne(websiteId);
        res.json({data : {website}});
    },

    addOneWebsite : async (req,res)=> {

        try {
           console.log(req.body);
           const data = await websiteDataMapper.addOne(req.body);
           res.json({data});

        } catch(error){

            console.error(error)
            res.status(500).json({error : "Une erreur est survenue , merci de réessayer ultérieuremnt"})
        }
    },
    deleteOneWebsite : async (req,res) => {
        const websiteId = parseInt(req.params.id,10);
        await websiteDataMapper.deleteOne(websiteId);
        res.json(`L'enregistrement à été supprimé`);
    },
    updateOneWebsite : async (req,res,next) => {
        try {

            const websiteId = parseInt(req.params.id,10);
            const data = req.body;
            console.log("data" , data);
            if(!data) {
                return next();
            }
            for(const property in data){
                await websiteDataMapper.updateOne(property,data[property],websiteId)
            }
            res.json(`Le site source a été modifiée .`);


        } catch(error) {
        
            console.error(error)
            res.status(500).json("erreur serveur");
        }
    }

}