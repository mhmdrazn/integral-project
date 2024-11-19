"use client"

import Image from 'next/image';
import Link from 'next/link';

import React from 'react';

import { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { HiOutlineX } from 'react-icons/hi';
import { HiMenuAlt3 } from 'react-icons/hi';

export default function navbar(){
  // const [show, setShow] = useState(false);
  // const controls = useAnimation();

  // React.useEffect(() => {
  //     if (show) {
  //         controls.start({opacity: 1, x:0});
  //     } else {
  //         controls.start({opacity: 0, y:0});
  //     }
  // }, [show, controls]);

  // const handleOnClick = () => {
  //     setShow(!show);
  // }

  return (
    <div className="flex flex-row items-center justify-between px-4 md:px-16 lg:px-52 fixed min-h-20 w-full bg-background">
      <a href="#">
        <Image src="/assets/logo-ideal.png" width={85.71} height={40} alt="Logo" />
      </a>

      <div className=''>
        <ul className='flex flex-row gap-16'>
          <Link href="/"><li className='font-semibold text-[#333333]'>Home</li></Link>
          <Link href="/about-us"><li className='font-medium text-[#919191]'>Event</li></Link>
          <Link href="/events"><li className='font-medium text-[#919191]'>About Us</li></Link>
        </ul>
      </div>

      {/* <div>
        {show ? (
            <HiOutlineX 
            size={25} 
            className='cursor-pointer md:hidden'
            onClick={() => setShow(false)}/>
        ) : (
            <HiMenuAlt3 
            size={25} 
            className='cursor-pointer md:hidden'                    
            onClick={() => setShow(true)}/>
        )}
      </div> */}
    </div>
  );
}