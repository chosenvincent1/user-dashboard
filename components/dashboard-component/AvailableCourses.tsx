import Link from "next/link";
import Image from "next/image";

export default function() {
    return (
        <div className="lg:w-[70%] mb-[50px] lg:mb-0 ">
            <div className="flex items-center justify-between gap-[10px] mb-[20px] text-[#000] ">
                <h3 className="text-[18px] md:text-[25px] font-[700] ">Courses available on platform</h3>

                <Link className="text-[16px] font-[500] " href={'/dashboard/courses'}>View All</Link>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 ">
                <div className="shadow rounded-t-[12px] pb-[30px] ">
                    <Image
                        src="/images/laptop.png" 
                        alt="Laptop" 
                        className="w-full h-auto mb-[10px] "
                        width={50}
                        height={50}
                    />


                    <div className="px-[15px] flex flex-col gap-[15px] ">
                        <h3 className="text-[18px] font-[600] text-[#101828] ">Web Development</h3>

                        <p className="text-[16px] text-[500] font-[#475467] ">Dive into the world of coding and design as we explore the fundamentals of web developmen</p>

                        <Link href={""} className="px-[27px] py-[5px] rounded-[8px] bg-[#27779B] text-[#fff] text-[14px] font-[700] w-[100px] h-[38px] flex items-center justify-center ">View</Link>
                    </div>
                </div>

                <div className="shadow rounded-t-[12px] pb-[30px] ">
                    <Image
                        src="/images/laptop.png" 
                        alt="Laptop" 
                        className="w-full h-auto mb-[10px] "
                        width={50}
                        height={50}
                    />

                    <div className="px-[15px] flex flex-col gap-[15px] ">
                        <h3 className="text-[18px] font-[600] text-[#101828] ">Mobile Development</h3>

                        <p className="text-[16px] text-[500] font-[#475467] ">Dive into the world of coding and design as we explore the fundamentals of web developmen</p>

                        <Link href={""} className="px-[27px] py-[5px] rounded-[8px] bg-[#27779B] text-[#fff] text-[14px] font-[700] w-[100px] h-[38px] flex items-center justify-center ">View</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}