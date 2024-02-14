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
import Image from "next/image";

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

  const userFirstName = storedUser?.firstName || '';
  const userEmail = storedUser?.email || '';


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
        className="lg:text-[#0A0A0A] lg:text-[18px] lg:h-[100vh] lg:font-[400] hidden lg:flex "
      >
        <VStack
          position="sticky"
          top={0}
          left={0}
          right={0}
          spacing={15}
          align="stretch"
          height="100%"
          display={{ base: "flex", md: "none" }}
          className="flex flex-col text-[#0A0A0A] text-left bg-[#27779B] px-[20px] pb-[30px] pt-[50px] text-[18px] w-[300px] "
        >
            <Box className="relative w-[90%] mx-auto ">
              <Image 
                src="/images/search.png" 
                alt="Search Icon" 
                className="absolute top-[50%] left-[7px] transform translate-y-[-50%] w-[20px] h-[20px] " 
                width={20} 
                height={20} 
              />

              <input type="text" placeholder="Search" className="bg-[#475467] py-[8px] pl-[35px] placeholder:text-[#fff] placeholder:text-[16px] rounded-[6px] outline-0 text-[#fff] w-full " />
            </Box>

          <Link onClick={onToggle} href="/dashboard">
            <Box className={`flex items-center ${pathname === '/dashboard' && 'bg-[#344054] rounded-[6px]'} py-[8px] px-[12px] text-[#fff] gap-[10px] text-[16px] font-[600] `}>
              <Image 
                src="/images/home-line.png" 
                alt="Home Icon"  
                width={24} 
                height={24} 
              />
              <p>Home</p>
            </Box>
          </Link>

          <Link onClick={onToggle} href="/dashboard/courses">
            <Box className={`flex items-center ${pathname === '/dashboard/courses' && 'bg-[#344054]'} rounded-[6px] py-[8px] px-[12px] text-[#fff] gap-[10px] text-[16px] font-[600] `}>
              <Image 
                src="/images/bar-chart-square-02.png" 
                alt="Courses Icon"  
                width={24} 
                height={24} 
              />
              <p>Courses</p>
            </Box>
          </Link>

          <Link onClick={onToggle} href="/dashboard/students">
            <Box className={`flex items-center ${pathname === '/dashboard/students' && 'bg-[#344054]'} rounded-[6px] py-[8px] px-[12px] text-[#fff] gap-[10px] text-[16px] font-[600] `}>
              <Image 
                src="/images/users-01.png" 
                alt="User Icon" 
                width={24} 
                height={24} 
              />
              <p>Students</p>
            </Box>
          </Link>

          <Link onClick={onToggle} href="/dashboard/wallet" className=" mb-[100px] ">
            <Box className={`flex items-center ${pathname === '/dashboard/wallet' && 'bg-[#344054]'} rounded-[6px] py-[8px] px-[12px] text-[#fff] gap-[10px] text-[16px] font-[600] `}>
              <Image 
                src="/images/layers-three-01.png" 
                alt="Wallet Icon"
                width={24} 
                height={24} 
              />
              <p>Wallet</p>
            </Box>
          </Link>

          <Link onClick={onToggle} href="/dashboard/support">
            <Box className={`flex items-center ${pathname === '/dashboard/support' && 'bg-[#344054]'} rounded-[6px] py-[8px] px-[12px] text-[#fff] gap-[10px] text-[16px] font-[600] `}>
              <Image 
                  src="/images/life-buoy-01.png" 
                  alt="Buoy Icon" 
                  width={24} 
                  height={24} 
              />
                <p>Support</p>
            </Box>
          </Link>

          <Link onClick={onToggle} href="/dashboard/setting" className=" mb-[20px] border-b-[#344054] border-b-[1px] pb-[20px] ">
            <Box className={`flex items-center ${pathname === '/dashboard/settings' && 'bg-[#344054]'} rounded-[6px] py-[8px] px-[12px] text-[#fff] gap-[10px] text-[16px] font-[600] `}>
              <Image 
                  src="/images/settings-01.png" 
                  alt="Settings Icon" 
                  width={24} 
                  height={24} 
              />
                <p>Setting</p>
            </Box>
          </Link>

          <Box className="flex items-start gap-[5px] mt-auto ">
            <div className="flex items-center gap-[10px] text-[#fff] text-[14px]">
                <div className="w-[30px] h-[30px]  ">
                  <Image 
                    src="/images/ayele.png" 
                    alt="Ayele"
                    className="w-full h-full rounded-[50%]"
                    width={30} 
                    height={30} 
                  />
                </div>

                <div>
                  <p className="text-[14px] font-[600] ">{userFirstName}</p>
                  <p>{userEmail}</p>
                </div>
            </div>
            
            <Box className=" text-[20px] font-[600] cursor-pointer ">
              <Image 
                src="/images/log-out-01.png"
                alt="Log Out Icon"
                width={25} 
                height={25} 
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
              <Image 
                src="/images/ayele.png" 
                alt="Ayele"
                className="w-full h-full rounded-[50%]" 
                width={20} 
                height={20} 
              />
            </div>

            <div>
              <p className="text-[14px] font-[600] ">{userFirstName}</p>
              <p>{userEmail}</p>
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
          className="flex lg:hidden text-[#0A0A0A] text-left bg-[#27779B] px-[20px] py-[30px] text-[18px] w-[80%] h-[100vh] "
        >
            <Box className="relative ">
                <Image 
                  src="/images/search.png" 
                  alt="Search Icon" 
                  className="absolute top-[50%] left-[7px] transform translate-y-[-50%] w-[20px] h-[20px] "
                  width={20} 
                  height={20} 
                />

                <input type="text" placeholder="Search" className="bg-[#475467] py-[8px] pl-[35px] placeholder:text-[#fff] placeholder:text-[16px] rounded-[6px] outline-0 text-[#fff] w-full " />
            </Box>

          <Link onClick={onToggle} href="/dashboard">
            <Box className={`flex items-center ${pathname === '/dashboard' && 'bg-[#344054] rounded-[6px]'} py-[8px] px-[12px] text-[#fff] gap-[10px] text-[16px] font-[600] `}>
                <Image 
                  src="/images/home-line.png" 
                  alt="Home Icon"
                  width={24} 
                  height={24} 
                />
                <p>Home</p>
            </Box>
          </Link>

          <Link onClick={onToggle} href="/dashboard/courses">
            <Box className={`flex items-center ${pathname === '/dashboard/courses' && 'bg-[#344054]'} rounded-[6px] py-[8px] px-[12px] text-[#fff] gap-[10px] text-[16px] font-[600] `}>
                <Image 
                  src="/images/bar-chart-square-02.png" 
                  alt="Courses Icon" 
                  width={24} 
                  height={24} 
                />

                <p>Courses</p>
            </Box>
          </Link>

          <Link onClick={onToggle} href="/dashboard/students">
            <Box className={`flex items-center ${pathname === '/dashboard/students' && 'bg-[#344054]'} rounded-[6px] py-[8px] px-[12px] text-[#fff] gap-[10px] text-[16px] font-[600] `}>
                <Image 
                  src="/images/users-01.png" 
                  alt="User Icon"
                  width={24} 
                  height={24} 
                />
                <p>Students</p>
            </Box>
          </Link>

          <Link onClick={onToggle} href="/dashboard/wallet" className=" mb-[30px] ">
            <Box className={`flex items-center ${pathname === '/dashboard/wallet' && 'bg-[#344054]'} rounded-[6px] py-[8px] px-[12px] text-[#fff] gap-[10px] text-[16px] font-[600] `}>
                <Image 
                  src="/images/layers-three-01.png" 
                  alt="Wallet Icon"
                  width={24} 
                  height={24} 
                />

                <p>Wallet</p>
            </Box>
          </Link>

          <Link onClick={onToggle} href="/dashboard/support">
            <Box className={`flex items-center ${pathname === '/dashboard/support' && 'bg-[#344054]'} rounded-[6px] py-[8px] px-[12px] text-[#fff] gap-[10px] text-[16px] font-[600] `}>

                <Image 
                  src="/images/life-buoy-01.png" 
                  alt="Buoy Icon" 
                  width={24} 
                  height={24} 
                />
                <p>Support</p>
            </Box>
          </Link>

          <Link onClick={onToggle} href="/dashboard/setting" className=" mb-[20px] border-b-[#344054] border-b-[1px] pb-[20px] ">
            <Box className={`flex items-center ${pathname === '/dashboard/settings' && 'bg-[#344054]'} rounded-[6px] py-[8px] px-[12px] text-[#fff] gap-[10px] text-[16px] font-[600] `}>
                <Image 
                  src="/images/settings-01.png" 
                  alt="Settings Icon" 
                  width={24} 
                  height={24} 
                />

                <p>Setting</p>
            </Box>
          </Link>

          <Link onClick={onToggle} href="" className=" ">
            <Box className="flex items-center rounded-[6px] py-[8px] px-[12px] text-[#fff] gap-[10px] text-[20px] font-[600] ">
                <Image 
                  src="/images/log-out-01.png" 
                  alt="Logout Icon"  
                  width={24} 
                  height={24} 
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
