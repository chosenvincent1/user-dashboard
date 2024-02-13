"use client"

import axios from "axios";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';

type signupData = {
    firstname: string,
    lastname: string,
    email: string,
    password: string,
}

export default function SignupForm() {
    const [ userData, setUserData ] = useState<signupData>({
        firstname: '',
        lastname: '',
        email: '',
        password: ''
    });

    const [shortPassword, setShortPassword] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>("");

    const router = useRouter();


    const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>)=> {
        const { name, value } = event.target;
        setUserData(prevData => {
            return {
                ...prevData,
                [name]: value,
            }
        })
    }

    const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>)=> {
        event.preventDefault();
        try {
            if(userData.password.length < 8) {
                setShortPassword(true);
                return;
            }

            setShortPassword(false);
            setIsLoading(true);


            const response = await axios.post('https://devapi.omacart.com/signup', userData);

            if(response.data.statusCode === 200) {
                router.push('/login');
                setUserData({
                    firstname: '',
                    lastname: '',
                    email: '',
                    password: ''
                });

                return;
            }

        } catch (error) {
            console.error(error)
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <section className="md:w-[40%] px-[10px] flex flex-col md:justify-center ">
            <div className="mb-[50px] md:max-w-[360px] mx-auto w-full">
                <h2 className="text-[#101828] text-[30px] font-[600] ">Sign up</h2>
            </div>

            <form onSubmit={handleFormSubmit} className="md:max-w-[360px] md:mx-auto md:w-full " >
                <div className="flex flex-col mb-[25px] gap-[5px] ">
                    <label htmlFor="firstname" className="text-[#344054] text-[14px] font-[500] ">First Name&#42;</label>
                    <input 
                        type="text" 
                        name="firstname" 
                        value={userData.firstname}
                        onChange={handleFormChange}
                        id="firstname"
                        placeholder="Enter your firstname"
                        required
                        className="border-[
                            #D0D5DD] border-[1px] py-[10px] px-[14px] rounded-[8px] outline-0 "
                    />
                </div>

                <div className="flex flex-col mb-[25px] gap-[5px] ">
                    <label htmlFor="lastname" className="text-[#344054] text-[14px] font-[500] ">Last Name&#42;</label>
                    <input 
                        type="text" 
                        name="lastname" 
                        value={userData.lastname}
                        onChange={handleFormChange}
                        id="lastname"
                        placeholder="Enter your lastname"
                        required
                        className="border-[
                            #D0D5DD] border-[1px] py-[10px] px-[14px] rounded-[8px] outline-0 "
                    />
                </div>

                <div className="flex flex-col mb-[25px] gap-[5px] ">
                    <label htmlFor="email" className="text-[#344054] text-[14px] font-[500] ">Email&#42;</label>
                    <input 
                        type="email" 
                        name="email"
                        value={userData.email}
                        onChange={handleFormChange}
                        id="email"
                        required
                        placeholder="Enter your email"
                        className="border-[
                            #D0D5DD] border-[1px] py-[10px] px-[14px] rounded-[8px] outline-0 "
                    />
                </div>

                <div className="flex flex-col mb-[8px] gap-[5px] ">
                    <label htmlFor="password" className="text-[#344054] text-[14px] font-[500] ">Password&#42;</label>
                    <input 
                        type="password" 
                        name="password"
                        value={userData.password}
                        onChange={handleFormChange}
                        id="password"
                        required
                        placeholder="Create a password"
                        className="border-[#D0D5DD] border-[1px] py-[10px] px-[14px] rounded-[8px] outline-0 "
                    />
                </div>
                    
                <p className={`text-[14px] font-[400] mb-[50px] ${shortPassword && 'text-[red]'} `}>Must be at least 8 characters</p>

                <div className="mb-[50px] ">
                    {isLoading ? 
                    <button className="bg-[#27779B] py-[10px] px-[18px] w-full text-[#fff] text-[16px] font-[600] rounded-[8px] ">Loading...</button>
                    :
                    <button className="bg-[#27779B] py-[10px] px-[18px] w-full text-[#fff] text-[16px] font-[600] rounded-[8px] ">Get Started</button>
                    }
                </div>

                <div className="flex gap-[10px] justify-center text-[14px] ">
                    <p>Already have an account?</p>
                    <Link href={'/login'} className="text-[#27779B] font-[600] ">Log in</Link>
                </div>
            </form>
        </section>
    )
}