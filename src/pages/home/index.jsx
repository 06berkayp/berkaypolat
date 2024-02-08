import { FaInstagram } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { FaSpotify } from 'react-icons/fa'
import { MdKeyboardArrowDown } from 'react-icons/md'
import Container from '@/components/container'

function Home() {
    return (
        <Container as='main' className='h-full'>
            <div className='md:flex md:flex-col lg:flex lg:flex-col lg:items-center lg:justify-center lg:pt-5 xl:pt-7 xxl:pt-14'>
                <div className='m-auto size-[230px] xxs:size-[260px] xs:size-[300px] sm:size-[340px] md:size-[400px] lg:size-[360px] xl:size-[400px] xxl:size-[450px]'>
                    <img
                        className='size-[230px] border-[2px] object-cover xxs:size-[260px] xs:size-[300px] sm:size-[340px] md:size-[400px] lg:size-[360px] xl:size-[400px] xxl:size-[450px]'
                        src='/assets/images/me.jpeg'
                    />
                </div>
                <div className='mt-4 flex h-full w-full items-center justify-center gap-3 text-white md:pt-7 xl:pt-1 *:xl:size-[50px] xxl:pt-2 *:xxl:size-[60px]'>
                    <FaInstagram className='size-[34px] text-yellow-400 xxs:size-[34px] xs:size-[40px] sm:size-[45px] md:size-[50px] lg:size-[45px]' />
                    <FaXTwitter className='size-[34px] text-yellow-400 xxs:size-[34px] xs:size-[40px] sm:size-[45px] md:size-[50px] lg:size-[45px]' />
                    <FaLinkedin className='size-[34px] text-yellow-400 xxs:size-[34px] xs:size-[40px] sm:size-[45px] md:size-[50px] lg:size-[45px]' />
                    <FaSpotify className='size-[34px] text-yellow-400 xxs:size-[34px] xs:size-[40px] sm:size-[45px] md:size-[50px] lg:size-[45px]' />
                </div>
            </div>

            <div className=' relative mt-[30px] flex w-full flex-col xl:w-[60%] xl:pt-5 xxl:pt-1'>
                <h1 className='text-[60px] font-extrabold text-[#fdcd02] xs:text-[75px] sm:text-[90px] md:text-[105px] lg:text-[120px] xl:text-[130px] xxl:text-[160px]'>
                    BERKAY
                </h1>

                <h1 className='w-full content-end text-end text-[60px] font-extrabold text-[#fdcd02] xs:text-[75px] sm:text-[90px] md:text-[105px] lg:text-[120px] xl:-mt-[20px] xl:text-[130px] xxl:text-[160px]'>
                    POLAT
                </h1>

                <h1 className='absolute left-4 top-[280px] pb-[30px] text-[12px] font-bold text-[#fdcd02] xs:mt-[40px] xs:text-[16px] md:mt-[85px] lg:pt-7 lg:text-[20px] xl:mt-[90px] xl:text-[22px] xxl:pt-48 xxl:text-[30px]'>
                    5 may 2003
                </h1>
                <MdKeyboardArrowDown className=' absolute top-[170px] flex w-full items-center justify-center text-[80px] text-[#fff] xxs:mt-[18px] xs:mt-[45px] xs:text-[96px] sm:mt-[68px] sm:text-[110px] md:mt-[115px] lg:mt-[200px] lg:text-[80px] xl:mt-[215px] xl:text-[96px] xxl:mt-[380px] xxl:text-[150px]' />
                <h1 className='absolute right-4 top-[280px] pb-[30px] text-[12px] font-bold italic text-[#fdcd02] xs:mt-[40px] xs:text-[16px] md:mt-[85px] lg:pt-7 lg:text-[20px] xl:mt-[90px] xl:text-[22px] xxl:pt-48 xxl:text-[30px]'>
                    developer.
                </h1>
            </div>
        </Container>
    )
}

export default Home
