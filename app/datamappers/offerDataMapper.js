const client = require('./client');
module.exports = {
    getAll : async () => {
        const result = await client.query(`SELECT * FROM "offer"`);
        return result.rows;
    },
    getOne : async(id) => {
        const result = await client.query(`SELECT * FROM "offer" WHERE id = $1`, [id]);
        return result.rows[0];
    },
    addOne : async(post) => {
        const result = await client.query(`INSERT INTO "offer" ("employment" , "notes" ,"contact","offer_url","website_id","company_id") VALUES ($1,$2,$3) RETURNING *`, [post.name , post.structure, post.department]);
        return result.rows[0];
    },
    deleteOne : async(id) => {
        const result = await client.query('DELETE FROM "offer" WHERE "id" = $1' , [id]);
        return result.rows[0];
    }
}