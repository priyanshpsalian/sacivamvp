import mongoose from "mongoose";

const userSchema  = new mongoose.Schema({
    email:{
        type:String,
        required:true 
    },
    password:{
        type:String,
        required:true 
    },
    otp:{
        type:Number,
        required:true 
    },
    verify:{
        type:Boolean,
        default:false
    }
},{timestamps:true})


export const User = mongoose.models.User || mongoose.model('User',userSchema) 