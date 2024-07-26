import {Schema,model,models} from "mongoose";

const userProfileSchema = new Schema({
    email:{
        type:String,
        requried:true
    },
    name:{
        type:String,
        required:true 
    },
    gender:{
        type:String,
        required:true 
    },
    age:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true 
    },
    university:{
        type:String,
        required:true 
    },
    major:{
        type:String,
        required:true 
    },
    language:{
        type:String,
        required:true 
    },
    country:{
        type:String,
        required:true 
    }


},{timestamps:true})



export const Profile = models.Profile || model("Profile",userProfileSchema);



