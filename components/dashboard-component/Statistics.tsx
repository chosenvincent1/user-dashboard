import { FaEllipsisV } from 'react-icons/fa';

export default function Statistics() {
    return (
        <>
            <div className="mb-[30px] ">
                <h2 className="text-[30px] font-[600] text-[#000] ">Welcome Back</h2>
                <p className="text-[#475467] text-[16px] font-[400] ">Track, manage and view your students and courses available.</p>
            </div>

            <div className="text-[#000] grid grid-cols-1 gap-4 lg:grid-cols-3 mb-[35px] ">
                <div className="border-[1px] border-[#EAECF0] p-[20px] rounded-[12px] shadow "> 
                    <p className="text-[16px] font-[500] mb-[15px] ">Total Students</p>
                    <p className="text-[36px] font-[600] ">0</p>
                </div>

                <div className="border-[1px] border-[#EAECF0] p-[20px] rounded-[12px] shadow flex items-start justify-between ">
                    <div>
                        <p className="text-[16px] font-[500] mb-[15px] ">Courses</p>
                        <p className="text-[36px] font-[600] ">0</p>
                    </div>

                    <div className="cursor-pointer ">
                        <FaEllipsisV />
                    </div>
                </div>

                <div className="border-[1px] border-[#EAECF0] p-[20px] rounded-[12px] shadow flex items-start justify-between ">
                    <div>
                        <p className="text-[16px] font-[500] mb-[15px] ">Wallet Balance</p>
                        <p className="text-[36px] font-[600] ">0</p>
                    </div> 

                    <div className=" cursor-pointer ">
                        <FaEllipsisV />
                    </div>
                </div>
            </div>
        </>
    )
}