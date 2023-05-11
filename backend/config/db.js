import mongoose from "mongoose";

export const connnectDB = async()=>{
    try {

        const db_url = process.env.DB_URL;
        const {connection} = await mongoose.connect(db_url, {
            dbName: "library"
        })

        console.log(`DB is connected with host : ${connection.host}`)
        
    } catch (error) {
        console.log(error)
    }
}