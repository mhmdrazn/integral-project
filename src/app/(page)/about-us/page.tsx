import React from 'react';
import Navbar from '@/app/components/navbar';
import Image from "next/image";

export default function layout() {
  return (
    <main className="w-full min-h-screen flex flex-col">
        <Navbar highlight="About Us" />
          <div className="w-full min-h-screen flex flex-col">
      {/* Hero section */}
      <section className="md:mt-20 mt-12 px-12 md:px-16 lg:px-52 gap-24 items-center justify-center flex md:flex-row flex-col min-h-[700px] lg:h-[640px] bg-white h-screen">
        <Image src='/assets/main-ideal.png' alt="main-ideal" height={240} width={240} className="flex md:hidden"></Image>

        <div className="flex flex-col gap-5">
          <h2 className="lg:text-5xl md:text-3xl text-3xl lg:max-w-[640px] font-bold lg:leading-tight text-[#046CC9]">
          #PendidikanUntukSemua
          </h2>
          <p className="max-w-[574px] text-[#555555] font-medium">
          IDEAL (Indonesian Development, Education, and Leadership) merupakan Organisasi non Pemerintah dengan fokus utama mengembangkan potensi generasi muda Indonesia melalui pengembangan pendidikan dan kepemimpinan dengan nilai kolaborasi dan pengabdian. Kami berkomitmen untuk menciptakan akses pendidikan berkualitas yang setara bagi generasi muda Indonesia dan pengembagan kepemimpinan pada generasi muda.
          </p>
          {/* Button */}
        </div>

        <Image src='/assets/main-ideal.png' alt="main-ideal" height={370} width={370} className="hidden md:flex"></Image>
      
      </section>
      {/* Visi Misi  */}
      <section className='bg-white'>
        <div className='flex flex-col'>
        <div>
            <h1 className="lg:leading-tight font-bold text-[#046CC9] text-5xl text-center">Visi dan Misi IDEAL</h1>
        </div>
       <div className='flex  justify-center'>
        <div className=" md:flex-row flex-col flex md:mt-20 mt-12 px-12 md:px-16 lg:px-24  gap-16 w-3/6 justify-normal bg-white shadow-2xl rounded-lg px-12 py-12 ">
          <div className='content-center  justify-self-center'>
             <h1 className="lg:leading-tight font-bold text-center " >VISI</h1>
          </div>
            <div className="flex justify-items-end w-full">
              <p className="lg:leading-tight text-justify text-2xl ">Visi menjadi wadah kreativitas generasi muda Indonesia demi terwujudnya pemuda-pemudi Kreatif dan Inovatif yang mampu bersaing ditingkat nasional dan internasional.
              </p>
              </div>
       
        </div>
        </div>
        </div>

        {/* Misi */}
        <div className='flex flex-col'>
       <div className='flex  justify-center'>
        <div className=" md:flex-row flex-col flex md:mt-20 mt-12 px-12 md:px-16 lg:px-24  gap-16 w-3/6 justify-normal bg-white shadow-2xl	 rounded-lg px-12 py-12 ">
          <div className='content-center  justify-self-center'>
             <h1 className="lg:leading-tight font-bold text-center " >MISI</h1>
          </div>
            <div className="flex justify-items-end w-full">
              <p className="lg:leading-tight text-justify text-2xl ">Misi menginspirasi generasi muda Indonesia melalui gerakan
 kreativitas dan kegiatan yang berfokus pada peningkatan dan
pengembangan potensi diri pemuda-pemudi Indonesia melalui sektor pengembangan pendidikan dan kepemimpinan.
              </p>
              </div>
       
        </div>
        </div>
        </div>
      </section>
           
        
    </div>
    </main>
  );
}