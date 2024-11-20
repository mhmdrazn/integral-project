import React from 'react'
// import Navbar from "./components/navbar";
// import Footer from "./components/footer";
import Image from "next/image";

export default function layout() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <section className="md:mt-20 mt-12 px-12 md:px-16 lg:px-52 gap-24 items-center justify-center flex md:flex-row flex-col min-h-[700px] lg:h-[640px] bg-white h-screen">
        <Image src='/assets/main-ideal.png' alt="main-ideal" height={240} width={240} className="flex md:hidden"></Image>

        <div className="flex flex-col gap-5">
          
          <h2 className="lg:text-5xl md:text-3xl text-3xl lg:max-w-[640px] font-bold lg:leading-tight text-[#046CC9]">
            Pendidikan Untuk Semua, Tingkatkan Potensi Diri
          </h2>
          <p className="max-w-[574px] text-[#555555] font-medium">
          IDEAL hadir sebagai katalisator bagi anak-anak muda Indonesia. Dengan semangat kolaborasi dan inovasi, kami menyediakan platform untuk mengasah bakat, memupuk kreativitas, dan membangun karakter kepemimpinan yang tangguh.
          </p>
          {/* Button */}
        </div>

        <Image src='/assets/main-ideal.png' alt="main-ideal" height={370} width={370} className="hidden md:flex"></Image>
      </section>
    </div>
  )
}