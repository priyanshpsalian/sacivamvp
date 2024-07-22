import { connectionString } from "@/env";
import mongoose from "mongoose";


async function connectionDatabase() {
    try {
        
        const DBURL = connectionString();
        const connection = await mongoose.connect(DBURL!)
        if(connection){
            console.log("database connected")
        }
    } catch (error:any) {
        console.error(error)   
    }
}


export default connectionDatabase;