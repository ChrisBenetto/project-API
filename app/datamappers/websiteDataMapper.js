const client = require('./client');
module.exports = {
    getAll : async () => {
        const result = await client.query(`SELECT * FROM "website"`);
        return result.rows;
    },
    getOne : async(id) => {
        const result = await client.query(`SELECT * FROM "website" WHERE id = $1`, [id]);
        return result.rows[0];
    }

}