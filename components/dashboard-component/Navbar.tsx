"use client";
import {
  Box,
  Flex,
  IconButton,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { HamburgerIcon } from "@chakra-ui/icons";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { UserDataType } from "../auths/login-component/login-form";

interface NavbarProps {
  storedUser: UserDataType;
}

export default function Navbar({storedUser}: NavbarProps) {
  const { isOpen, onToggle } = useDisclosure();
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <Flex
      as="nav"
      position="sticky"
      top="0"
      left="0"
      right="0"
    >

      <Flex
        display={{ base: "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        className="lg:text-[#0A0A0A] lg:text-[18px] lg:font-[400] hidden lg:flex "
      >
        <VStack
          position="sticky"
          top={0}
          left={0}
          right={0}
          spacing={15}
          align="stretch"
          display={{ base: "flex", md: "none" }}
          className="flex flex-col text-[#0A0A0A] text-left bg-[#27779B] px-[20px] pb-[30px] pt-[100px] text-[18px] w-[280px] "
        >
            <Box className="relative w-[90%] mx-auto ">
                <img 
                    src="/images/search.png" 
                    alt="Search Icon" 
                    className="absolute top-[50%] left-[7px] transform translate-y-[-50%] w-[20px] h-[20px] "
                />

                <input type="text" placeholder="Search" className="bg-[#475467] py-[8px] pl-[35px] placeholder:text-[#fff] placeholder:text-[16px] rounded-[6px] outline-0 text-[#fff] w-full " />
            </Box>

          <Link onClick={onToggle} href="/dashboard">
            <Box className={`flex items-center ${pathname === '/dashboard' && 'bg-[#344054] rounded-[6px]'} py-[8px] px-[12px] text-[#fff] gap-[10px] text-[16px] font-[600] `}>
                <img 
                    src="/images/home-line.png" 
                    alt="Home Icon" 
                    className="h-[24px] w-[24px] "
                />
                <p>Home</p>
            </Box>
          </Link>

          <Link onClick={onToggle} href="/dashboard/courses">
            <Box className={`flex items-center ${pathname === '/dashboard/courses' && 'bg-[#344054]'} rounded-[6px] py-[8px] px-[12px] text-[#fff] gap-[10px] text-[16px] font-[600] `}>
                <img 
                    src="/images/bar-chart-square-02.png" 
                    alt="Courses Icon" 
                    className="h-[24px] w-[24px] "
                />
                <p>Courses</p>
            </Box>
          </Link>

          <Link onClick={onToggle} href="/dashboard/students">
            <Box className={`flex items-center ${pathname === '/dashboard/students' && 'bg-[#344054]'} rounded-[6px] py-[8px] px-[12px] text-[#fff] gap-[10px] text-[16px] font-[600] `}>
                <img 
                    src="/images/users-01.png" 
                    alt="User Icon" 
                    className="h-[24px] w-[24px] "
                />
                <p>Students</p>
            </Box>
          </Link>

          <Link onClick={onToggle} href="/dashboard/wallet" className=" mb-[100px] ">
            <Box className={`flex items-center ${pathname === '/dashboard/wallet' && 'bg-[#344054]'} rounded-[6px] py-[8px] px-[12px] text-[#fff] gap-[10px] text-[16px] font-[600] `}>
                <img 
                    src="/images/layers-three-01.png" 
                    alt="Wallet Icon" 
                    className="h-[24px] w-[24px] "
                />
                <p>Wallet</p>
            </Box>
          </Link>

          <Link onClick={onToggle} href="/dashboard/support">
            <Box className={`flex items-center ${pathname === '/dashboard/support' && 'bg-[#344054]'} rounded-[6px] py-[8px] px-[12px] text-[#fff] gap-[10px] text-[16px] font-[600] `}>
                <img 
                    src="/images/life-buoy-01.png" 
                    alt="Home Icon" 
                    className="h-[24px] w-[24px] "
                />
                <p>Support</p>
            </Box>
          </Link>

          <Link onClick={onToggle} href="/dashboard/setting" className=" mb-[20px] border-b-[#344054] border-b-[1px] pb-[20px] ">
            <Box className={`flex items-center ${pathname === '/dashboard/settings' && 'bg-[#344054]'} rounded-[6px] py-[8px] px-[12px] text-[#fff] gap-[10px] text-[16px] font-[600] `}>
                <img 
                    src="/images/settings-01.png" 
                    alt="Home Icon" 
                    className="h-[23px] w-[24px] "
                />
                <p>Setting</p>
            </Box>
          </Link>

          <Box className="flex items-center gap-[5px] ">
            <div className="flex items-center gap-[10px] text-[#fff] text-[14px]">
                <div className="w-[30px] h-[30px]  ">
                    <img 
                        src="/images/Ayele.png" 
                        alt="Ayele"
                        className="w-full h-full rounded-[50%]" 
                    />
                </div>

                <div>
                  <p className="text-[14px] font-[600] ">{storedUser.firstName}</p>
                  <p>{storedUser.email}</p>
                </div>
            </div>
            
            <Box className=" py-[8px] px-[12px] text-[20px] font-[600] ">
                <img 
                    src="/images/log-out-01.png" 
                    alt="Home Icon" 
                    className="h-[25px] w-[25px] "
                />
            </Box>

          </Box>
        </VStack>
      </Flex>



      {/* MOBILE VIEW */}
      <Box
        className="px-[20px] py-[25px] items-center mb-[20px] z-50 w-[100%] flex justify-between bg-[#27779B] lg:hidden" 
      >
        <Box className="lg:hidden flex items-center gap-[10px] text-[#fff] text-[14px]  ">
            <div className="w-[30px] h-[30px]  ">
              <img 
                  src="/images/Ayele.png" 
                  alt="Ayele"
                  className="w-full h-full rounded-[50%]" 
              />
            </div>

            <div>
              <p className="text-[14px] font-[600] ">{storedUser.firstName}</p>
              <p>{storedUser.email}</p>
            </div>
        </Box>

      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onToggle}
        icon={<HamburgerIcon />}
        variant="ghost"
        color="#f5f5f5"
        className="bg-[#40779B] text-[30px] text-[white] flex lg:hidden  "
        aria-label="Toggle mobile menu"
      />
      {isOpen && (
        <VStack
          position="absolute"
          top={80}
          left={0}
          right={0}
          spacing={15}
          align="stretch"
          display={{ base: "flex", md: "none" }}
          className="flex lg:hidden text-[#0A0A0A] text-left bg-[#27779B] px-[20px] py-[30px] text-[18px] w-[80%] h-auto "
        >
            <Box className="relative ">
                <img 
                    src="/images/search.png" 
                    alt="Search Icon" 
                    className="absolute top-[50%] left-[7px] transform translate-y-[-50%] w-[20px] h-[20px] "
                />

                <input type="text" placeholder="Search" className="bg-[#475467] py-[8px] pl-[35px] placeholder:text-[#fff] placeholder:text-[16px] rounded-[6px] outline-0 text-[#fff] w-full " />
            </Box>

          <Link onClick={onToggle} href="/dashboard">
            <Box className={`flex items-center ${pathname === '/dashboard' && 'bg-[#344054] rounded-[6px]'} py-[8px] px-[12px] text-[#fff] gap-[10px] text-[16px] font-[600] `}>
                <img 
                    src="/images/home-line.png" 
                    alt="Home Icon" 
                    className="h-[24px] w-[24px] "
                />
                <p>Home</p>
            </Box>
          </Link>

          <Link onClick={onToggle} href="/dashboard/courses">
            <Box className={`flex items-center ${pathname === '/dashboard/courses' && 'bg-[#344054]'} rounded-[6px] py-[8px] px-[12px] text-[#fff] gap-[10px] text-[16px] font-[600] `}>
                <img 
                    src="/images/bar-chart-square-02.png" 
                    alt="Courses Icon" 
                    className="h-[24px] w-[24px] "
                />
                <p>Courses</p>
            </Box>
          </Link>

          <Link onClick={onToggle} href="/dashboard/students">
            <Box className={`flex items-center ${pathname === '/dashboard/students' && 'bg-[#344054]'} rounded-[6px] py-[8px] px-[12px] text-[#fff] gap-[10px] text-[16px] font-[600] `}>
                <img 
                    src="/images/users-01.png" 
                    alt="User Icon" 
                    className="h-[24px] w-[24px] "
                />
                <p>Students</p>
            </Box>
          </Link>

          <Link onClick={onToggle} href="/dashboard/wallet" className=" mb-[30px] ">
            <Box className={`flex items-center ${pathname === '/dashboard/wallet' && 'bg-[#344054]'} rounded-[6px] py-[8px] px-[12px] text-[#fff] gap-[10px] text-[16px] font-[600] `}>
                <img 
                    src="/images/layers-three-01.png" 
                    alt="Wallet Icon" 
                    className="h-[24px] w-[24px] "
                />
                <p>Wallet</p>
            </Box>
          </Link>

          <Link onClick={onToggle} href="/dashboard/support">
            <Box className={`flex items-center ${pathname === '/dashboard/support' && 'bg-[#344054]'} rounded-[6px] py-[8px] px-[12px] text-[#fff] gap-[10px] text-[16px] font-[600] `}>
                <img 
                    src="/images/life-buoy-01.png" 
                    alt="Home Icon" 
                    className="h-[24px] w-[24px] "
                />
                <p>Support</p>
            </Box>
          </Link>

          <Link onClick={onToggle} href="/dashboard/setting" className=" mb-[20px] border-b-[#344054] border-b-[1px] pb-[20px] ">
            <Box className={`flex items-center ${pathname === '/dashboard/settings' && 'bg-[#344054]'} rounded-[6px] py-[8px] px-[12px] text-[#fff] gap-[10px] text-[16px] font-[600] `}>
                <img 
                    src="/images/settings-01.png" 
                    alt="Home Icon" 
                    className="h-[23px] w-[24px] "
                />
                <p>Setting</p>
            </Box>
          </Link>

          <Link onClick={onToggle} href="" className=" ">
            <Box className="flex items-center rounded-[6px] py-[8px] px-[12px] text-[#fff] gap-[10px] text-[20px] font-[600] ">
                <img 
                    src="/images/log-out-01.png" 
                    alt="Home Icon" 
                    className="h-[25px] w-[25px] "
                />
                <p>Log Out</p>
            </Box>
          </Link>
        </VStack>
        )}
      </Box>
    </Flex>
  );
}
