import { Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-1 lg:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <div className="relative w-[130px] h-[40px] lg:w-[190px] lg:h-[50px]">
          <Link href="/">
            <Image
              src="/arachnet_main_logo.png"
              alt="logo"
              width={230}
              height={50}
              className="cursor-pointer hover:animate-slowspin"
            />
          </Link>
        </div>

        <div className="h-full flex flex-row items-center justify-between">
          <div className="flex gap-2 items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] px-[20px] py-[10px] rounded-full text-gray-200 text-sm lg:text-base">
            <a href="#about-me" className="cursor-pointer">
              About
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>

        {/* <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
