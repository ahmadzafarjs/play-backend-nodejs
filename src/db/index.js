import mongoose from "mongoose";
import { DB_NAME } from "../constants.js"

export default async function connectDB(){
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log("Database Connected", connectionInstance);
    } catch (error) {
        console.error("Error: ", error);
        process.exit(1);
    }
};