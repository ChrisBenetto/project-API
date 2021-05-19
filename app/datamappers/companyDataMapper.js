const client = require('./client');
module.exports = {
    getAll : async () => {
        const result = await client.query(`SELECT * FROM "company"`);
        return result.rows;
    },
    getOne : async(id) => {
        const result = await client.query(`SELECT * FROM "company" WHERE id = $1`, [id]);
        return result.rows[0];
    }

}