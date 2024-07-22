"use client";

import React, { useState } from 'react';
import { useParams } from 'next/navigation'; // Import useParams from next/navigation
import { useRouter } from 'next/navigation'; // Import useRouter from next/navigation
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp";
import axios from 'axios';
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
                Router.push("/buffer");
            }

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <Toaster />
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
                    <div className="text-center text-sm">
                        {value === "" ? (
                            <>Enter your one-time password.</>
                        ) : (
                            <>You entered: {value}</>
                        )}
                    </div>
                </div>
                <div>
                    <button
                        onClick={verifyOTP}
                        type="button"
                        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                        Verify OTP
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Page; // Export the renamed component
