const client = require('./client');
module.exports = {
    getAll : async () => {
        const result = await client.query(`SELECT * FROM "website"`);
        return result.rows;
    },
    getOne : async(id) => {
        const result = await client.query(`SELECT * FROM "website" WHERE id = $1`, [id]);
        return result.rows[0];
    },
    addOne : async(post) => {
        const result = await client.query(`INSERT INTO "website" ("name") VALUES ($1) RETURNING *`, [post.name]);
        return result.rows[0];
    },
    deleteOne : async(id) => {
        const result = await client.query('DELETE FROM "website" WHERE "id" = $1' , [id]);
        return result.rows[0];
    }

}