"use client"

import { useLayoutEffect, useContext } from "react";
import { redirect } from "next/navigation";
import Navbar from "@/components/dashboard-component/Navbar";
import Statistics from "@/components/dashboard-component/Statistics";
import AvailableCourses from "@/components/dashboard-component/AvailableCourses";
import Activities from "@/components/dashboard-component/Activities";
import { AuthContext } from '@/context/AuthContext';


export default function Dashboard() {
    const storedUserString = localStorage.getItem('loggedInUser');
    const storedUser = storedUserString ? JSON.parse(storedUserString) : null;
    const { isAuth } = useContext(AuthContext);

    useLayoutEffect(()=> {
        const isAuthenticated = isAuth;
        if(!isAuthenticated) {
            redirect('/login');
        }
    }, [])
    
    return (
        <main className="lg:flex lg:items-start">
            <Navbar storedUser={storedUser.response} />

            <div className="lg:bg-[#27779B] w-full ">
                <section className="px-[20px] lg:px-[30px] bg-[#fff] lg:rounded-l-[40px] py-[30px] w-full h-full ">
                    
                    <Statistics />

                    <div className="flex flex-col lg:flex-row lg:gap-[30px]">
                        <AvailableCourses />
                        <Activities />
                    </div>
                </section>
            </div>
        </main>
    )
}