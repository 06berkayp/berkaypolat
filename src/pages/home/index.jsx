import { FaInstagram } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { FaSpotify } from 'react-icons/fa'
import { MdKeyboardArrowDown } from 'react-icons/md'
import Container from '@/components/container'

function Home() {
    return (
        <Container as='main'>
            <div className='md:flex md:flex-col lg:mt-[50px] lg:flex lg:flex-col lg:items-center lg:justify-center xl:mt-[30px]'>
                <div className='m-auto size-[230px] xxs:size-[260px] xs:size-[300px] sm:size-[340px] md:size-[400px] lg:size-[370px] xl:size-[430px]'>
                    <img
                        className='size-[230px] border-[2px] object-cover xxs:size-[260px] xs:size-[300px] sm:size-[340px] md:size-[400px] lg:size-[370px] xl:size-[430px]'
                        src='/assets/images/me.jpeg'
                    />
                </div>
                <div className='mt-4 flex h-[40px] w-full items-center justify-center gap-3 text-white md:mt-[30px]'>
                    <FaInstagram className='size-[34px] text-yellow-400 xxs:size-[34px] xs:size-[40px] sm:size-[45px] md:size-[50px] lg:size-[45px]' />
                    <FaXTwitter className='size-[34px] text-yellow-400 xxs:size-[34px] xs:size-[40px] sm:size-[45px] md:size-[50px] lg:size-[45px]' />
                    <FaLinkedin className='size-[34px] text-yellow-400 xxs:size-[34px] xs:size-[40px] sm:size-[45px] md:size-[50px] lg:size-[45px]' />
                    <FaSpotify className='size-[34px] text-yellow-400 xxs:size-[34px] xs:size-[40px] sm:size-[45px] md:size-[50px] lg:size-[45px]' />
                </div>
            </div>

            <div className='relative mt-[30px] flex w-full flex-col xl:w-[60%]'>
                <h1 className='text-[60px] font-extrabold text-[#fdcd02] xs:text-[75px] sm:text-[90px] md:text-[105px] lg:text-[120px] xl:text-[140px] '>
                    BERKAY
                </h1>

                <h1 className='flex content-end justify-end text-[60px] font-extrabold text-[#fdcd02] xs:text-[75px] sm:text-[90px] md:text-[105px] lg:text-[120px] xl:-mt-[20px] xl:text-[140px]'>
                    POLAT
                </h1>

                <h1 className='absolute left-4 top-[280px] pb-[30px] text-[12px] font-bold text-[#fdcd02] xs:mt-[40px] xs:text-[16px] md:mt-[85px] xl:mt-[150px] xl:text-[18px]'>
                    5 may 2003
                </h1>
                <MdKeyboardArrowDown className='absolute top-[170px] flex w-full items-center justify-center text-[80px] text-[#fff] xxs:mt-[18px] xs:mt-[45px] xs:text-[96px] sm:mt-[68px] sm:text-[110px] md:mt-[115px] lg:mt-[215px] xl:mt-[270px]' />
                <h1 className='absolute right-4 top-[280px] pb-[30px] text-[12px] font-bold italic text-[#fdcd02] xs:mt-[40px] xs:text-[16px] md:mt-[85px] xl:mt-[150px] xl:text-[18px]'>
                    developer.
                </h1>
            </div>
        </Container>
    )
}

export default Home
