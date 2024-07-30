"use client";

import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp";
import axios from 'axios';
import { useParams, useRouter } from 'next/navigation'; // Import useParams from next/navigation
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

function Page() { // Rename the function to start with an uppercase letter
    const [value, setValue] = useState("");
    const param = useParams();
    const Router = useRouter();
    const userId = param.user;
    let userMail: string;
    if (typeof userId === 'string') {
        userMail = userId.replace("%40", "@");
    } else if (Array.isArray(userId)) {
        userMail = userId.join('').replace("%40", "@");
    } else {
        throw new Error('Invalid userId type');
    }

    async function verifyOTP() {
        try {
            const response = await axios.post("/api/auth/verify", {
                email: userMail,
                otp: parseInt(value),
            });

            if (response) {
                toast.success("Verify Done");
                Router.push(`/userprofile/${userMail}`);
            }
        } catch (error: any) {
            if (error.response.data.message == "wrong otp") {
                toast.error("Wrong OTP")
            }
        }
    }

    return (
        <div className='flex flex-col h-[100vh] items-center justify-center px-10  bg-[#A580C0]'>
            <Toaster />
            <div className='flex flex-col lg:flex-row items-center justify-center gap-16 bg-[#8A59AE]/50 p-10 rounded-lg'>
                <div>
                    <img className='h-[20rem]' src="https://img.freepik.com/free-vector/verified-concept-illustration_114360-5167.jpg?t=st=1722336647~exp=1722340247~hmac=a6e30fe483eaf5bad7ee2ef97113f63465bd7e09c331b06809bf665832c0d388&w=740" alt="" />
                </div>
                <div>
                    <h1 className='text-2xl lg:text-4xl text-center pb-2'><span className='font-bold '>OTP Code </span>Verification</h1>
                    <p className='text-center'>We have sent an OTP code to your Email Id {userMail} <br />Enter the OTP code below to verify  </p>
                    <div className='flex flex-col items-center justify-center'>
                    <div className="space-y-2">
                        <InputOTP
                            maxLength={6}
                            value={value}
                            onChange={(value) => setValue(value)}
                            >
                            <InputOTPGroup>
                                <InputOTPSlot index={0} />
                                <InputOTPSlot index={1} />
                                <InputOTPSlot index={2} />
                                <InputOTPSlot index={3} />
                            </InputOTPGroup>
                        </InputOTP>
                    </div>
                    <div>
                        <button
                            onClick={verifyOTP}
                            type="button"
                            className="rounded-md mt-4 bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            >
                            Verify OTP
                        </button>
                    </div>
        </div>
                </div>
            </div>
        </div>
    );
}

export default Page; 
