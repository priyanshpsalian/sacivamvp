import connectionDatabase from "@/app/database/DB";
import { NextRequest,NextResponse } from "next/server";
import { User } from "@/models/User.Model";
import { otpMailer } from "@/mail/verifyMail";



connectionDatabase();
function generateOTP() {
    return Math.floor(1000 + Math.random() * 9000);
}
export async function POST(request:NextRequest) {
    try {
        const {email,password}  = await request.json();
        if(!email && !password){
            return NextResponse.json({message:"Every Field are required"},{status:500})
        }
        const findUser = await User.findOne({email:email})

        if(findUser){
            return NextResponse.json({message:"User already exist"},{status:404})
        }

        const userOTP:number = generateOTP();

        const createUser = await new User({
            email,
            password,
            otp:userOTP
        })

        const savedUser  = await createUser.save();
        if(savedUser){
            await otpMailer(userOTP);
        }
        return NextResponse.json({message:"user created"},{status:200})

    } catch (error:any) {
        return NextResponse.json({message:error},{status:500})

        
    }

    
}