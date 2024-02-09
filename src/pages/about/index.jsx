import { FaHtml5 } from 'react-icons/fa'
import { FaCss3Alt } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io5'
import { SiTailwindcss } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'
import { SiRedux } from 'react-icons/si'
import { SiReactrouter } from 'react-icons/si'
import { FaNodeJs } from 'react-icons/fa'
import { IoLogoFirebase } from 'react-icons/io5'
import { FaFigma } from 'react-icons/fa'
import { FaYarn } from 'react-icons/fa'
import { FaNpm } from 'react-icons/fa'
import { SiPnpm } from 'react-icons/si'
import { SiStrapi } from 'react-icons/si'
import Container from '@/components/container'

function About() {
    return (
        <Container as='main' className='h-full lg:flex lg:flex-row lg:pt-7 xxl:pt-11'>
            <div className='h-[220px] w-full xs:flex xs:justify-center lg:flex-1 xl:justify-start xl:pt-4 xxl:h-[524px]'>
                <img
                    alt='baby'
                    className='h-[220px] w-full object-cover xs:h-[250px] sm:h-[350px] md:h-[450px] md:w-full lg:w-full xxl:h-[524px]'
                    src='/assets/images/baby.jpg'
                />
            </div>
            <div className='lg:flex lg:w-[500px] lg:flex-col lg:gap-5 xl:-ml-[50px] xl:h-[500px] xl:w-1/2'>
                <div className='mt-3 flex w-full items-center justify-center text-5xl xs:mt-10 sm:mt-36 md:mt-[250px] lg:mt-[0px] lg:justify-start'>
                    <h1 className='my-4 font-extrabold text-[#fdcd02] sm:text-7xl md:text-[60px] xl:pt-2 xxl:text-8xl'>
                        merhaba!
                    </h1>
                </div>
                <div className='mt-1'>
                    <p className='text-justify text-sm font-medium italic text-[#f0e6e6] xs:text-base sm:text-xl md:text-2xl lg:text-xl xl:w-[90%] xl:text-xl xxl:text-2xl'>
                        Ben Berkay. Ankara’da doğdum ve yaşıyorum. Başkent Üniversitesi Yönetim Bilişim Sistemleri
                        öğrencisiyim. Web geliştirme alanında kendimi sürekli geliştirerek her geçen gün dünden daha iyi
                        olmaya çalışıyorum.
                    </p>
                    <div className='mt-4 xs:mt-6'>
                        <div className='w-[18%]'>
                            <h1 className='font-bold italic text-[#fdcd02] xs:text-[18px] sm:text-[20px] md:text-[22px] xl:text-[26px]'>
                                SKILLS
                            </h1>
                        </div>
                        <div className='mt-2 flex flex-wrap gap-3 pb-8 *:text-3xl xs:*:text-[32px] sm:gap-4 sm:*:text-[40px] md:*:text-[45px] lg:*:text-4xl xl:*:text-[40px] xxl:*:text-5xl'>
                            <FaHtml5 className='text-[#E34F26]' />
                            <FaCss3Alt className='text-[#1572B6]' />
                            <IoLogoJavascript className='text-[#F7DF1E]' />
                            <SiTailwindcss className='text-[#06B6D4]' />
                            <FaReact className='text-[#61DAFB]' />
                            <SiRedux className='text-[#764ABC]' />
                            <SiReactrouter className='text-[#CA4245]' />
                            <FaNodeJs className='text-[#339933]' />
                            <SiStrapi className='text-[#4945FF]' />
                            <IoLogoFirebase className='text-[#FFCA28]' />
                            <FaFigma className='text-[#F24E1E]' />
                            <FaYarn className='text-[#2C8EBB]' />
                            <FaNpm className='text-[#CB3837]' />
                            <SiPnpm className='text-[#F69220]' />
                            <img
                                className='h-[30px] w-[30px] xs:h-[32px] xs:w-[32px] sm:h-[40px] sm:w-[40px] md:h-[45xpx] md:w-[45px] lg:h-[36px] lg:w-[36px] xl:h-[40px] xl:w-[40px]'
                                src='/assets/images/photoshop.png'
                                alt='photoshop'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default About
