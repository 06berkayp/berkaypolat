import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSpotify } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

function Home() {
  return (
    <div className="w-[90%] h-full m-auto mt-8 mb-5 sm:w-[75%] md:w-[65%] lg:flex lg:flex-row-reverse lg:w-[90%] lg:gap-12 lg:justify-center">
      <div className="md:flex md:flex-col lg:flex lg:flex-col lg:items-center lg:justify-center lg:mt-[50px]">
        <div className="size-[230px] m-auto xxs:size-[260px] xs:size-[300px] sm:size-[340px] md:size-[400px] lg:size-[350px] ">
          <img
            className="size-[230px] border-[2px] object-cover xxs:size-[260px] xs:size-[300px] sm:size-[340px] md:size-[400px] lg:size-[350px]"
            src="src/assets/images/me.jpeg"
          />
        </div>
        <div className="mt-4 w-full h-[40px] text-white flex gap-3 justify-center items-center md:mt-[30px]">
          <FaInstagram className="size-[34px] xxs:size-[34px] xs:size-[40px] sm:size-[45px] md:size-[50px] lg:size-[45px] text-yellow-400" />
          <FaXTwitter className="size-[34px] xxs:size-[34px] xs:size-[40px] sm:size-[45px] md:size-[50px] lg:size-[45px] text-yellow-400" />
          <FaLinkedin className="size-[34px] xxs:size-[34px] xs:size-[40px] sm:size-[45px] md:size-[50px] lg:size-[45px] text-yellow-400" />
          <FaSpotify className="size-[34px] xxs:size-[34px] xs:size-[40px] sm:size-[45px] md:size-[50px] lg:size-[45px] text-yellow-400" />
        </div>
      </div>

      <div className="flex flex-col mt-[30px] w-full relative xl:w-[60%]">
        <h1 className="text-[60px] xs:text-[75px] sm:text-[90px] md:text-[105px] xl:text-[115px] font-extrabold text-[#fdcd02] ">
          BERKAY
        </h1>

        <h1 className="text-[60px] xs:text-[75px] md:text-[105px] xl:text-[115px] font-extrabold text-[#fdcd02] sm:text-[90px] flex content-end justify-end">
          POLAT
        </h1>

        <h1 className="font-bold absolute left-4 top-[280px] text-[12px] text-[#fdcd02] xs:mt-[40px] xs:text-[16px] xl:text-[18px] md:mt-[85px] pb-[30px]">
          5 may 2003
        </h1>
        <MdKeyboardArrowDown className="text-[80px] xxs:mt-[18px] xs:mt-[45px] sm:mt-[68px] md:mt-[115px] xs:text-[96px] sm:text-[110px] flex absolute justify-center items-center w-full top-[170px] text-[#fff] lg:mt-[215px]" />
        <h1 className="font-bold italic absolute right-4 top-[280px] text-[#fdcd02] text-[12px] xs:mt-[40px] xs:text-[16px] xl:text-[18px] md:mt-[85px] pb-[30px]">
          developer.
        </h1>
      </div>
    </div>
  );
}

export default Home;
