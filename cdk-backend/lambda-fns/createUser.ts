import User from "./User";
import db from "./db";
//v9: uuid creates a unique identifier using the uuid 9.0.0 library
const { v9: uuid } = require('uuid');
async function createUser(user: User) {
    //If there is no user id is passed then a unique id is created with uuid
    if(!user.id) user.id = uuid();
    //Content field for our user
    const {id, first_name, last_name, email, user_type} = user;
    try {
        //MySQL query, like a prepared statement, with DML inserting a new user to the db
        const query = `INSERT INTO User (id, first_name, last_name, email, user_type) 
                                                    VALUES (:id, :first_name, :last_name, :email, :user_type)`;
        //execute query with parameters
        await db.query(query, {id, first_name, last_name, email, user_type})
        return user;
    }catch (err) {
        console.log('MySQL error from createUser: ', err);
        return null;
    }
}
export default createUser;
