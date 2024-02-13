"use client"

import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";

type signupData = {
    userName: string,
    email: string,
    password: string,
}

export default function SignupForm() {
    const [ userData, setUserData ] = useState<signupData>({
        userName: '',
        email: '',
        password: ''
    });

    const [shortPassword, setShortPassword] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

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
                setShortPassword(true)
            } else {
                setShortPassword(false);
                console.log(userData)
            }

            setIsLoading(true)
            const response = await axios.post('https://devapi.omacart.com/signupapi/signup', userData);

            console.log(response);
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <section className="md:w-[40%] px-[10px] flex flex-col md:justify-center ">
            <div className="mb-[50px] md:max-w-[360px] mx-auto w-full">
                <h2 className="text-[#101828] text-[30px] font-[600] ">Sign up</h2>
            </div>

            <form onSubmit={handleFormSubmit} className="md:max-w-[360px] md:mx-auto md:w-full " >
                <div className="flex flex-col mb-[25px] gap-[5px] ">
                    <label htmlFor="userName" className="text-[#344054] text-[14px] font-[500] ">Name&#42;</label>
                    <input 
                        type="text" 
                        name="userName" 
                        value={userData.userName}
                        onChange={handleFormChange}
                        id="userName"
                        placeholder="Enter your name"
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
                    <button className="bg-[#27779B] py-[10px] px-[18px] w-full text-[#fff] text-[16px] font-[600] rounded-[8px] ">Get Started</button>
                </div>

                <div className="flex gap-[10px] justify-center text-[14px] ">
                    <p>Already have an account?</p>
                    <Link href={'/login'} className="text-[#27779B] font-[600] ">Log in</Link>
                </div>
            </form>
        </section>
    )
}