
export default function Activities() {
    return (
        <div className="lg:w-[30%] ">
            <h3 className="text-[18px] font-[600] mb-[20px] ">Activities</h3>

            <div className="flex flex-col gap-[10px] ">
                <div className="flex items-center gap-[5px] ">
                    <div className="w-[30px] h-[30px]  ">
                        <img 
                            src="/images/demi.png" 
                            alt="Demi"
                            className="w-full h-full rounded-[50%]" 
                        />
                    </div>

                    <div className="text-[#344054]">
                        <p className="text-[14px] font-[500] ">Demi Wikinson</p>
                        <p className="text-[14px] font-[400] ">made payment for <span className="text-[#6941C6]">Product design 101</span></p>
                    </div>
                </div>

                <div className="flex items-center gap-[5px] ">
                    <div className="w-[30px] h-[30px]  ">
                        <img 
                            src="/images/aliah.png" 
                            alt="Aliah"
                            className="w-full h-full rounded-[50%]" 
                        />
                    </div>

                    <div className="text-[#344054]">
                        <p className="text-[14px] font-[500] ">Aliah Lane</p>
                        <p className="text-[14px] font-[400] ">Purchased <span className="text-[#6941C6]">Digital design course</span></p>
                    </div>
                      
                </div>

                <div className="flex items-center gap-[5px] ">
                    <div className="w-[30px] h-[30px]  ">
                        <img 
                            src="/images/lana.png" 
                            alt="Lana"
                            className="w-full h-full rounded-[50%]" 
                        />
                    </div>

                    <div className="text-[#344054]">
                        <p className="text-[14px] font-[500] ">Lana Steiner</p>
                        <p className="text-[14px] font-[400] ">Purchased <span className="text-[#6941C6]">Figma Mockups</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}