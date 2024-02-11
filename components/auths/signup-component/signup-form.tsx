import Link from "next/link";

export default function SignupForm() {
    return (
        <section className="md:w-[40%] px-[10px] flex flex-col md:justify-center ">
            <div className="mb-[50px] md:max-w-[360px] mx-auto w-full">
                <h2 className="text-[#101828] text-[30px] font-[600] ">Sign up</h2>
            </div>

            <form className="md:max-w-[360px] md:mx-auto md:w-full " >
                <div className="flex flex-col mb-[25px] gap-[5px] ">
                    <label htmlFor="userName" className="text-[#344054] text-[14px] font-[500] ">Name*</label>
                    <input 
                        type="text" 
                        name="userName" 
                        id="userName"
                        placeholder="Enter your name"
                        required
                        className="border-[
                            #D0D5DD] border-[1px] py-[10px] px-[14px] rounded-[8px] outline-0 "
                    />
                </div>

                <div className="flex flex-col mb-[25px] gap-[5px] ">
                    <label htmlFor="email" className="text-[#344054] text-[14px] font-[500] ">Email*</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email"
                        required
                        placeholder="Enter your email"
                        className="border-[
                            #D0D5DD] border-[1px] py-[10px] px-[14px] rounded-[8px] outline-0 "
                    />
                </div>

                <div className="flex flex-col mb-[8px] gap-[5px] ">
                    <label htmlFor="password" className="text-[#344054] text-[14px] font-[500] ">Password*</label>
                    <input 
                        type="password" 
                        name="password" 
                        id="password"
                        required
                        placeholder="Create a password"
                        className="border-[
                            #D0D5DD] border-[1px] py-[10px] px-[14px] rounded-[8px] outline-0 "
                    />
                </div>
                    
                <p className="text-[14px] font-[400] mb-[50px] ">Must be at least 8 characters</p>

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