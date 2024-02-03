import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSpotify } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

function Home() {
  return (
    <div className="w-[90%] h-full m-auto mt-8 mb-5 ">
      <div className="size-[200px] m-auto xxs:size-[260px] xs:size-[300px] sm:size-[350px]">
        <img
          className="size-[200px] border-[2px] object-cover xxs:size-[260px] xs:size-[300px] sm:size-[350px]"
          src="../src/assets/images/me.jpeg"
        />
      </div>
      <div className="mt-4 w-full h-[40px] text-white flex gap-3 justify-center items-center">
        <FaInstagram className="size-[30px] xxs:size-[34px] xs:size-[40px] text-yellow-400" />
        <FaXTwitter className="size-[30px] xxs:size-[34px] xs:size-[40px] text-yellow-400" />
        <FaLinkedin className="size-[30px] xxs:size-[34px] xs:size-[40px] text-yellow-400" />
        <FaSpotify className="size-[30px] xxs:size-[34px] xs:size-[40px] text-yellow-400" />
      </div>
      <div className="mt-[30px] w-full relative">
        <div className="flex flex-col">
          <h1 className="text-[60px] xs:text-[75px] font-extrabold text-[#fdcd02]">
            BERKAY
          </h1>
          <div className="flex content-end justify-end">
            <h1 className="text-[60px] xs:text-[75px] font-extrabold text-[#fdcd02]">
              POLAT
            </h1>
          </div>
          <h1 className="font-bold absolute left-4 top-[280px] text-[12px] text-[#fdcd02] xs:mt-[40px] xs:text-[16px] pb-[30px]">
            5 may 2003
          </h1>
          <MdKeyboardArrowDown className="text-[80px] xxs:mt-[18px] xs:mt-[45px] xs:text-[96px] flex absolute justify-center items-center w-full top-[170px] text-[#fff]" />
          <h1 className="font-bold italic absolute right-4 top-[280px] text-[#fdcd02] text-[12px] xs:mt-[40px] xs:text-[16px] pb-[30px]">
            developer.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
