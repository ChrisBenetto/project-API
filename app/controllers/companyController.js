const companyDataMapper = require('../datamappers/companyDataMapper');
module.exports = {
    allCompanies : async (_,res) => {
        const companies = await companyDataMapper.getAll();
        res.json({ companies });
    },
    oneCompany : async (req,res) => {
        const companyId = parseInt(req.params.id,10);
        const company = await companyDataMapper.getOne(companyId);
        res.json({data : {company}});
    },
    addOneCompany : async (req,res)=> {

        try {
           console.log(req.body);
           const data = await companyDataMapper.addOne(req.body);
           res.json({data});

        } catch(error){

            console.error(error)
            res.status(500).json({error : "Une erreur est survenue , merci de réessayer ultérieuremnt"})
        }
    },
    deleteOneCompany : async (req,res) => {
        const companyId = parseInt(req.params.id,10);
        await companyDataMapper.deleteOne(companyId);
        res.json(`L'enregistrement à été supprimé`);
    },
    updateOneCompany : async (req,res,next) => {
        try {

            const companyId = parseInt(req.params.id,10);
            const data = req.body;
            console.log("data" , data);
            if(!data) {
                return next();
            }
            for(const property in data){
                await companyDataMapper.updateOne(property,data[property],companyId)
            }
            res.json(`L'entreprise à été modifiée .`);


        } catch(error) {
        
            console.error(error)
            res.status(500).json("erreur serveur");
        }
    }

}