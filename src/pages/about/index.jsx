import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiReactrouter } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { FaFigma } from "react-icons/fa";
import { FaYarn } from "react-icons/fa";
import { FaNpm } from "react-icons/fa";
import { SiPnpm } from "react-icons/si";
import { SiStrapi } from "react-icons/si";

function About() {
  return (
    <div className="w-[90%] h-full m-auto mt-8 mb-5 lg:flex lg:gap-6 lg:mt-[100px] xl:w-[95%] xl:gap-6 ">
      <div className="h-[220px] w-full xs:flex xs:justify-center lg:flex-1 xl:justify-start">
        {/* profile pic sec. */}
        <img
          className="h-[220px] w-full object-cover xs:h-[250px] sm:h-[350px] md:h-[450px] md:w-[80%] lg:w-[90%] "
          src="src/assets/images/baby.jpg"
        />
      </div>
      <div className="md:h-screen  lg:flex lg:flex-col lg:w-[500px] lg:gap-5 xl:w-[650px] xl:h-[500px] xl:-ml-[50px]">
        <div className="text-[48px] flex justify-center items-center h-[50px] w-full mt-3 xs:mt-10 sm:mt-36 md:mt-[250px] lg:mt-[0px] lg:justify-start">
          {/* yellow title sec. */}
          <h1 className="text-[#fdcd02] font-extrabold sm:text-[56px] md:text-[60px]">
            merhaba!
          </h1>
        </div>
        <div className="mt-4 xs:h-full">
          <p className="text-justify text-[14px] font-medium text-[#f0e6e6] italic xs:text-[16px] sm:text-[20px] md:text-[22px] lg:text-[20px] xl:w-[90%] xl:text-[21px]">
            Ben Berkay. Ankara’da doğdum ve yaşıyorum. Başkent Üniversitesi
            Yönetim Bilişim Sistemleri öğrencisiyim. Web geliştirme alanında
            kendimi sürekli geliştirerek her geçen gün dünden daha iyi olmaya
            çalışıyorum.
          </p>
          <div className="mt-4 xs:mt-6 xs:h-[230px]">
            <div className="w-[18%]">
              <h1 className="text-[#fdcd02] font-bold italic xs:text-[18px] sm:text-[20px] md:text-[22px] xl:text-[26px]">
                SKILLS
              </h1>
            </div>
            <div className="flex gap-3 flex-wrap *:text-[30px] mt-2 xs:*:text-[32px] sm:*:text-[40px] sm:gap-4 md:*:text-[45px] lg:*:text-[36px] xl:*:text-[45px]">
              <FaHtml5 className="text-[#E34F26]" />
              <FaCss3Alt className="text-[#1572B6]" />
              <IoLogoJavascript className="text-[#F7DF1E]" />
              <SiTailwindcss className="text-[#06B6D4]" />
              <FaReact className="text-[#61DAFB]" />
              <SiRedux className="text-[#764ABC]" />
              <SiReactrouter className="text-[#CA4245]" />
              <FaNodeJs className="text-[#339933]" />
              <SiStrapi className="text-[#4945FF]" />
              <IoLogoFirebase className="text-[#FFCA28]" />
              <FaFigma className="text-[#F24E1E]" />
              <FaYarn className="text-[#2C8EBB]" />
              <FaNpm className="text-[#CB3837]" />
              <SiPnpm className="text-[#F69220]" />
              <img
                className="h-[30px] w-[30px] xs:h-[32px] xs:w-[32px] sm:h-[40px] sm:w-[40px] md:h-[45xpx] md:w-[45px] lg:h-[36px] lg:w-[36px] xl:h-[40px] xl:w-[40px]"
                src="src/assets/images/photoshop.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
