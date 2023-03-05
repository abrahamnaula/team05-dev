import db from './db';
async function getUserById(userId: number){
    try {
        //NOTE: use of backticks ` ` for MySQL query
        const query = `SELECT * FROM Users WHERE id = :userId`;
        const results = await db.query(query, {userId});
        return results.records[0];
    }catch (err) {
        console.log('MySQL error for getUserById: ', err);
        return null;
    }
}
export default getUserById;