"use client"

import axios from 'axios';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import toast, { Toaster } from "react-hot-toast";

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const Router = useRouter();

    useEffect(() => {
        if (password.length > 10) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [password]);

    async function signupUsers() {
        try {
            if (email.includes('.com')) {
                if (password === confirmpassword) {
                    setLoading(true);
                    const response = await axios.post("https://sacivaauthservice.onrender.com/api/v1/signup", {
                        email,
                        password
                    });
                    if (response) {
                        setEmail('');
                        setPassword('');
                        setConfirmPassword('');
                    }
                    Router.push(`/auth/verify/${email}`);
                } else {
                    toast.error('Password and Confirm Password should be the same');
                }
            } else {
                toast.error("Use .edu domain");
            }
        } catch (error: any) {
            console.log(error);
        }
    }

    return (
        <section className='ml-[-1.2rem] mr-[-1.2rem] mt-[-1.2rem] mb-[-1.2rem]'>
            <Toaster position="top-center" reverseOrder={false} />
            <div className="flex items-center justify-center bg-[#D2BFE0]">
                <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md" style={{ backgroundColor: '#D2BFE0', borderRadius: '0.5rem', padding: '2rem' }}>
                    <h2 className="text-center text-2xl font-bold leading-tight text-indigoCustom">
                        Sign up to create account
                    </h2>
                    <p className="mt-2 text-center text-base text-indigoCustom">
                        Already have an account?{' '}
                        <a
                            href="#"
                            title=""
                            className="font-medium text-indigoCustom transition-all duration-200 hover:underline"
                        >
                            Sign In
                        </a>
                    </p>
                    <form action="#" method="POST" className="mt-8">
                        <div className="space-y-5">
                            <div>
                                <label htmlFor="email" className="text-base font-medium text-indigoCustom">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        type="email"
                                        placeholder="Email"
                                        id="email"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="text-base font-medium text-indigoCustom">
                                        Password
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <input
                                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        type="password"
                                        placeholder="Password"
                                        id="password"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="confirmpassword" className="text-base font-medium text-indigoCustom">
                                        Confirm Password
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <input
                                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        type="password"
                                        placeholder="Confirm Password"
                                        id="confirmpassword"
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div>
                                {loading ? <button
                                    disabled={true}
                                    type="button"
                                    className="inline-flex w-full items-center justify-center rounded-md bg-royal-purple px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-lavender"
                                >
                                    Processing...
                                </button> : <button
                                    onClick={signupUsers}
                                    type="button"
                                    className="inline-flex w-full items-center justify-center rounded-md bg-royal-purple px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-lavender"
                                // disabled={disabled || loading}
                                >
                                    Create Account <ArrowRight className="ml-2" size={16} />
                                </button>}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

