"use client"

import { useSearchParams } from "next/navigation";

import Navbar from "@/components/dashboard-component/Navbar";
import Statistics from "@/components/dashboard-component/Statistics";
import AvailableCourses from "@/components/dashboard-component/AvailableCourses";
import Activities from "@/components/dashboard-component/Activities";

export default function Dashboard() {
    const storedUserString = localStorage.getItem('loggedInUser');
    const storedUser = storedUserString ? JSON.parse(storedUserString) : null;

    // console.log(storedUser)
    // console.log('hey')
    
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