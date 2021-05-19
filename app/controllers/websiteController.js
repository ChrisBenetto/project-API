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
    }

}