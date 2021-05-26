const client = require('./client');
module.exports = {
     getAll : async () => {
        const result = await client.query(`SELECT * FROM "company"`);
        return result.rows;
    },
    getOne : async (id) => {
        const result = await client.query(`SELECT * FROM "company" WHERE id = $1`, [id]);
        return result.rows[0];
    },
    addOne : async (post) => {
        const result = await client.query(`INSERT INTO "company" ("name","structure","department") VALUES ($1,$2,$3) RETURNING *`, [post.name , post.structure, post.department]);
        return result.rows[0];
    },
    deleteOne : async (id) => {
        const result = await client.query('DELETE FROM "company" WHERE "id" = $1' , [id]);
        return result.rows[0];
    },
    updateOne : async (field,value,id) => {
        const result = await client.query(`UPDATE "company" SET ${field} = $1 WHERE "id" = $2 RETURNING *`,[value,id]);
        return result.rows[0];
        }
    }