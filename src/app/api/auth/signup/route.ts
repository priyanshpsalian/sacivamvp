import connectionDatabase from "@/app/database/DB";
import { NextRequest, NextResponse } from "next/server";
import { User } from "@/models/User.Model";
import { otpMailer } from "@/mail/verifyMail";
import { createHmac } from "node:crypto";



connectionDatabase();
function generateOTP() {
    return Math.floor(1000 + Math.random() * 9000);
}
export async function POST(request: NextRequest) {
    try {
        const { email, password } = await request.json();
        const salt = process.env.SECERT!;
        if (!email && !password) {
            return NextResponse.json({ message: "Every Field are required" }, { status: 500 })
        }
        const findUser = await User.findOne({ email: email })

        if (findUser) {
            return NextResponse.json({ message: "User already exist" }, { status: 404 })
        }

        const userOTP: number = generateOTP();
        const hashPassword = createHmac('sha256',salt).update(password).digest('hex');

        const createUser = await new User({
            email,
            password:hashPassword,
            otp: userOTP
        })

        const savedUser = await createUser.save();
        if (savedUser) {
            await otpMailer(userOTP, email);
        }
        return NextResponse.json({ message: "user created" }, { status: 200 })

    } catch (error: any) {
        return NextResponse.json({ message: error }, { status: 500 })
    }


}