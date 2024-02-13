"use client"

import Navbar from "@/components/dashboard-component/Navbar";
import Statistics from "@/components/dashboard-component/Statistics";
import AvailableCourses from "@/components/dashboard-component/AvailableCourses";
import Activities from "@/components/dashboard-component/Activities";

export default function Dashboard() {
    return (
        <main className="lg:flex lg:items-start">
            <Navbar />

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