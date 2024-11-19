import React from 'react'
import Image from 'next/image'

export default function footer() {
  return (
    <div className='flex flex-row justify-between md:px-24 px-12 py-16 bg-blue-900'>
        <div className='justify-between md:gap-16 flex md:flex-row flex-col w-full'>
            <div className='flex flex-col gap-4 justify-between'>
                <Image src="/assets/ideal-white.png" alt='white-logo' height={76} width={167}></Image>
                <div className='text-white text-md font-light'>Indonesian Development Education and Leadership</div>
                <div className='h-12'></div>
                <div className="md:flex justify-center items-center gap-2 w-fit hidden">
                    <div className="w-[12px] h-[12px] md:h-[14px] md:w-[14px] relative place-content-center">
                        <Image src="/assets/c.svg" alt="c" fill></Image>
                    </div>
                    <div className="text-white font-light text-[14px] md:text-[16px]">2024. IDEAL Indonesia</div>
                </div>
            </div>

            <div className='flex lg:flex-row md:flex-col flex-col lg:gap-32 md:gap-12 gap-12 items-start'>
                <div className='flex flex-col md:gap-5 gap-3 items-start'>
                    <div className='font-semibold text-lg text-white'>Contacts</div>
                    <div className='flex flex-col gap-3 items-start'>
                        <div className='font-light text-md text-white'>halo.ideal@gmail.com</div>
                        <div className='font-light text-md text-white'>@ideal.ind</div>
                        <div className='font-light text-md text-white'>+62 264 2185 605</div>
                    </div>
                </div>

                <div className='flex flex-col md:gap-5 gap-3 items-start'>
                    <div className='font-semibold text-lg text-white'>Our Programs</div>
                    <div className='flex flex-col gap-3 items-start'>
                        <div className='font-light text-md text-white'>IdeaTalk</div>
                        <div className='font-light text-md text-white'>Leadership Bootcamp</div>
                        <div className='font-light text-md text-white'>Ideal Youth Ambassador</div>
                        <div className='font-light text-md text-white'>Youth Impact</div>
                    </div>
                </div>

                <div className="flex justify-center items-center gap-2 w-fit md:hidden">
                    <div className="w-[12px] h-[12px] md:h-[14px] md:w-[14px] relative place-content-center">
                        <Image src="/assets/c.svg" alt="c" fill></Image>
                    </div>
                    <div className="text-white font-light text-[14px] md:text-[16px]">2024. IDEAL Indonesia</div>
                </div>
            </div>
            
        </div>
    </div>
  )
}