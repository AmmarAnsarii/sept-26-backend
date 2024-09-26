import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MONGODB CONNECTED, WRITTEN IN INDEX.JS IN DB FOLDER: ${connectionInstance.connection.host}`);
        
    } catch (error) {
        console.log("MONGODB CONNECION ERROR, THIS WAS WRITTEN IN INDEX.JS IN DB FOLDER",error);
        process.exit(1)
    }
}

export default connectDB()