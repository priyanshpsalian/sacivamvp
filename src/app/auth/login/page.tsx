"use client";

import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const Router = useRouter();

    async function signInUser() {
        try {
            setLoading(true);
            const response = await axios.post("https://sacivaauthservice.onrender.com/api/v1/signin", {
                email,
                password,
            });
            if (response.status === 200) {
                Router.push("/buffer");
            }
        } catch (error: any) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <section className="flex items-center justify-center min-h-screen px-4 sm:px-0">
            <div className="bg-gradient-to-r from-indigo-500 via-purple-600 to-blue-700 w-full max-w-md h-auto sm:h-[434px] rounded-[24px] opacity-100">
                <div className="flex flex-col items-center justify-center h-full gap-5 p-8">
                    <h2 className="text-xl sm:text-2xl font-bold text-white text-center">
                        Sign In to Your Account
                    </h2>
                    <div className="w-full">
                        <label htmlFor="email" className="text-base font-medium text-white">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
                                type="email"
                                placeholder="Email"
                                id="email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="w-full">
                        <label htmlFor="password" className="text-base font-medium text-white">
                            Password
                        </label>
                        <div className="mt-2">
                            <input
                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
                                type="password"
                                placeholder="Password"
                                id="password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="w-full">
                        <button
                            onClick={signInUser}
                            className="inline-flex w-full items-center justify-center rounded-md bg-royal-purple px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-lavender"
                            disabled={loading}
                        >
                            {loading ? "Processing..." : "Login"}
                        </button>
                    </div>
                    <div className="flex justify-between w-full mt-4 text-sm">
                        <Link href="/auth/signup" passHref className="text-white hover:underline">
                            Create a new account
                        </Link>
                        <Link href="#" className="text-white hover:underline">
                            Forgot password
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
