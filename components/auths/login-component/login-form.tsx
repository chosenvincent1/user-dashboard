"use client"

import React, { FormEvent, useState } from 'react';

import Link from "next/link";

type loginDataType = {
    email: string,
    password: string,
}

export default function LoginForm() {
    const [inputValues, setInputValues] = useState<loginDataType>({
        email: '',
        password: ''
    })

    const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>)=> {
        const { name, value } = event.target;
        setInputValues(prevData => {
            return {
                ...prevData,
                [name]: value,
            }
        })
    }

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>)=> {
        event.preventDefault();
        console.log(inputValues);
    }

    return (
        <section className="md:w-[50%] flex flex-col md:justify-center ">
            <div className="text-center mb-[50px] md:max-w-[360px] md:mx-auto ">
                <h2 className="text-[#101828] text-[30px] font-[600] ">Welcome Back!</h2>
                <p className="text-[#667085] text-[16px] font-[400] ">Welcome back! Please enter your details.</p>
            </div>

            <form onSubmit={handleFormSubmit} className="md:max-w-[360px] md:mx-auto " >
                <div className="flex flex-col mb-[25px] gap-[5px] ">
                    <label htmlFor="email" className="text-[#344054] text-[14px] font-[500] ">Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        value={inputValues.email}
                        onChange={handleFormChange}
                        id="email"
                        placeholder="Enter your email"
                        className="border-[
                            #D0D5DD] border-[1px] py-[10px] px-[14px] rounded-[8px] outline-0 "
                    />
                </div>

                <div className="flex flex-col mb-[25px] gap-[5px] ">
                    <label htmlFor="password" className="text-[#344054] text-[14px] font-[500] ">Password</label>
                    <input 
                        type="password" 
                        name="password"
                        value={inputValues.password}
                        onChange={handleFormChange} 
                        id="password"
                        placeholder="Enter your password"
                        className="border-[
                            #D0D5DD] border-[1px] py-[10px] px-[14px] rounded-[8px] outline-0 "
                    />
                </div>

                <div className="mb-[20px] flex justify-between gap-[20px] ">
                    <div className="flex items-center gap-[10px] ">
                        <input 
                            type="checkbox" 
                            name="" 
                            id="" 
                        />
                        <label htmlFor="" className="text-[14px] font-[500] ">Remember for 30 days</label>
                    </div>

                    <a href="" className="text-[14px] text-[#6941C6] font-[600] ">Forgot Password?</a>
                </div>

                <div className="mb-[50px] ">
                    <button className="bg-[#27779B] py-[10px] px-[18px] w-full text-[#fff] text-[16px] font-[600] rounded-[8px] ">Log In</button>
                </div>

                <div className="flex gap-[10px] justify-center text-[14px] ">
                    <p>Don&apos;t have an account?</p>
                    <Link href={'/signup'} className="text-[#27779B] font-[600] ">Sign Up</Link>
                </div>
            </form>
        </section>
    )
}