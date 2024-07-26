import { NextRequest, NextResponse } from "next/server";
import { Profile } from "@/models/UserProfile.Model";

export async function POST(request: NextRequest) {

    try {
        const { email, name, gender, age, image, university, major, language, country } = await request.json();

        if (!email && !name && !gender && !age && !image && !university && !major && !language && !country) {
            return NextResponse.json({ message: "All Fields are required" }, { status: 404 })
        }

        const findUser = await Profile.findOne({ email: email });
        if (findUser) {
            return NextResponse.json({ message: "User already exist" }, { status: 404 })
        }

        const Userprofile = await new Profile({
            email,
            name,
            gender,
            age,
            image,
            university,
            major,
            language,
            country
        });

        await Userprofile.save();

        return NextResponse.json({ message: "User profile creatd" }, { status: 200 })

    } catch (error: any) {
        return NextResponse.json({ message: error }, { status: 500 })
    }

}