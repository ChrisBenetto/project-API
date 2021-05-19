const companyDataMapper = require('../datamappers/companyDataMapper');
module.exports = {
    allCompanies : async (_,res) => {
        const companies = await companyDataMapper.getAll();
        res.json({ data : {companies}});
    },
    oneCompany : async (req,res) => {
        const companyId = parseInt(req.params.id,10);
        const company = await companyDataMapper.getOne(companyId);
        res.json({data : {company}});
    }

}