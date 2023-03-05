import db from './db';
async function deleteUser(userId: number){
    try {
        const query = `DELETE FROM User WHERE id = :userId`;
        const result = await db.query(query, {userId});
        //if there is an item that has been deleted we'll return the userId, so we can do some validation
        if(result.numberOfRecordsUpdated === 1) return userId;
        return null;
    }catch (err){
        console.log('MySQL error from deleteUser', err);
        return null;
    }
}
export default deleteUser;