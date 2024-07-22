import { NextRequest, NextResponse } from "next/server";
import connectionDatabase from "@/app/database/DB";
import { User } from "@/models/User.Model";

connectionDatabase();
export async function POST(request: NextRequest) {
    try {
        const { email, otp } = await request.json();
        if (!email && !otp) {
            return NextResponse.json({ message: "Something went wrong" }, { status: 404 })
        }
        const finduser = await User.findOne({ email: email });
        if (!finduser) {
            return NextResponse.json({ message: "user not found" }, { status: 404 })
        }
        const verifyOTP: number = finduser?.otp;
        if (verifyOTP === otp) {
            const updateUser = await User.findOneAndUpdate({ email: email }, { verify: true });
        }
        else {
            return NextResponse.json({ message: "wrong otp" }, { status: 404 })
        }
        return NextResponse.json({ message: "user is verified" }, { status: 200 })

    } catch (error: any) {
        return NextResponse.json({ message: JSON.stringify(error) }, { status: 404 })

    }

}