import mongoose from "mongoose";



async function initializeDatabase(){
    try {
        await mongoose.connect(process.env.db_uri,{dbName:'todo_db_discord'});
        console.log('connected to the database successfully')
    } catch (error) {
        console.error('failed connect to database')
    }
}

export default initializeDatabase