import React from 'react';
import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/footer';
import Image from "next/image";
import Collaborated from '@/app/components/collaborated';

import CommunityPartners from '@/app/components/community';
import CompanyPartners from '@/app/components/company';
import TestimonialCard from '@/app/components/cardTest';



export default function layout() {
  return (
    <main className="w-full min-h-screen flex flex-col">
      <Navbar highlight="About Us" />
      
      <div className="w-full min-h-screen flex flex-col">
      {/* Hero section */}
        <section className="md:mt-20 mt-12 px-4 md:px-8 lg:px-16 gap-24 items-center justify-center flex md:flex-row flex-col min-h-[700px] lg:h-[640px] bg-white">
          <Image
            src="/assets/main-ideal.png"
            alt="main-ideal"
            height={240}
            width={240}
            className="flex md:hidden"
          />
          <div className="flex flex-col gap-5">
            <h2 className="lg:text-5xl md:text-3xl text-3xl lg:max-w-[640px] font-bold lg:leading-tight text-[#046CC9]">
              Indonesian Development Education And Leadership
            </h2>
            <p className="max-w-[574px] text-[#555555] font-medium lg:text-lg md:text-md text-sm text-justify">
              IDEAL (Indonesian Development, Education, and Leadership) merupakan Organisasi non Pemerintah dengan fokus utama mengembangkan potensi generasi muda Indonesia melalui pengembangan pendidikan dan kepemimpinan dengan nilai kolaborasi dan pengabdian. Kami berkomitmen untuk menciptakan akses pendidikan berkualitas yang setara bagi generasi muda Indonesia dan pengembagan kepemimpinan pada generasi muda.
            </p>
            {/* Button */}
          </div>
          <Image
            src="/assets/main-ideal.png"
            alt="main-ideal"
            height={370}
            width={370}
            className="hidden md:flex"
          />
        </section>  
      
        {/* Visi Misi  */}
        <section className='lg:px-52 md:px-24 px-12 md:gap-5 gap-12 flex flex-col py-12 bg-white'>
          <div>
            <h1 className="lg:leading-tight font-bold text-[#046CC9] lg:text-5xl text-4xl text-center">Visi dan Misi IDEAL</h1>
          </div>
          
          <div className='flex justify-center w-full flex-col-reverse items-center gap-6'>
            <div className=" md:flex-row flex-col flex md:m-3 px-12 md:px-16 lg:px-24 gap-4 md:gap-16 lg:w-2/3 ustify-normal bg-white drop-shadow-custom-offset rounded-lg py-12 ">
              <div className='content-center  justify-self-center'>
                <h1 className="lg:leading-tight font-bold md:text-xl text-2xl text-center">Misi</h1>
              </div>
              <div className="flex justify-items-end w-full">
                <p className="text-justify text-lg text-[#555555]">Misi menginspirasi generasi muda Indonesia melalui gerakan kreativitas dan kegiatan yang berfokus pada peningkatan dan pengembangan potensi diri pemuda-pemudi Indonesia melalui sektor pengembangan pendidikan dan kepemimpinan.</p>
              </div>
            </div>

            <div className=" md:flex-row flex-col flex md:m-3 px-12 md:px-16 lg:px-24 bg-white gap-4 md:gap-16 lg:w-2/3 justify-normal drop-shadow-custom-offset rounded-xl py-12 ">
              <div className='content-center justify-self-center'>
                <h1 className="lg:leading-tight font-semibold text-center md:text-xl text-2xl">Visi</h1>
              </div>
              <div className="flex justify-items-end w-full">
                <p className="text-justify text-lg text-[#555555]">Visi menjadi wadah kreativitas generasi muda Indonesia demi terwujudnya pemuda-pemudi Kreatif dan Inovatif yang mampu bersaing ditingkat nasional dan internasional.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className='lg:py-16 py-12 md:gap-16 gap-8 flex md:flex-col flex-col bg-white items-center w-full justify-center md:px-24 px-8'>
          <div className="lg:leading-tight font-bold text-[#046CC9] lg:text-5xl text-4xl md:text-left text-center">Di Balik IDEAL</div>
          <div className='flex md:flex-row flex-col md:gap-16 gap-8'>
            <div className='flex flex-col items-center gap-4 md:min-w-60'>
              <div className='md:h-40 md:w-40 h-32 w-32 rounded-full overflow-hidden items-center flex bg-green-200'>
                <Image src='/assets/people/4.png' alt='fahrizal' height={600} width={600}></Image>
              </div>
              <div className='flex flex-col items-center'>
                <p className='font-semibold text-xl text-slate-600 text-center'>Fahrizal Muhammad R</p>
                <p className='font-medium text-lg text-slate-400 text-center'>Founder/Chief Executive Officer</p>
              </div>
            </div>

            <div className='flex flex-col items-center gap-4 md:min-w-60'>
              <div className='md:h-40 md:w-40 h-32 w-32 rounded-full overflow-hidden items-center flex bg-green-200'>
                <Image src='/assets/people/3.png' alt='fahrizal' height={600} width={600}></Image>
              </div>
              <div className='flex flex-col items-center'>
                <p className='font-semibold text-xl text-slate-600 text-center'>Fatia Rizka</p>
                <p className='font-medium text-lg text-slate-400 text-center'>Chief Operating Officer</p>
              </div>
            </div>

            <div className='flex flex-col items-center gap-4 md:min-w-60'>
              <div className='md:h-40 md:w-40 h-32 w-32 rounded-full overflow-hidden items-center flex bg-green-200'>
                <Image src='/assets/people/2.png' alt='fahrizal' height={600} width={600}></Image>
              </div>
              <div className='flex flex-col items-center'>
                <p className='font-semibold text-xl text-slate-600 text-center'>Ihsan Fauzi Sadri</p>
                <p className='font-medium text-lg text-slate-400 text-center'>Managing Director</p>
              </div>
            </div>
          </div>

          <div className='flex md:flex-row flex-col md:gap-16 gap-8 md:min-w-60'>
            <div className='flex flex-col items-center gap-4'>
              <div className='md:h-40 md:w-40 h-32 w-32 rounded-full overflow-hidden items-center flex bg-green-200'>
                <Image src='/assets/people/1.png' alt='fahrizal' height={600} width={600}></Image>
              </div>
              <div className='flex flex-col items-center'>
                <p className='font-semibold text-xl text-slate-600 text-center'>Gugun Gumilar</p>
                <p className='font-medium text-lg text-slate-400 text-center'>Ketua Dewan Penasihat Yayasan<br/>Ruang Pemuda Nusantara</p>
              </div>
            </div>

            <div className='flex flex-col items-center gap-4 md:min-w-80'>
              <div className='md:h-40 md:w-40 h-32 w-32 rounded-full overflow-hidden items-center flex bg-green-200'>
                <Image src='/assets/people/5.png' alt='fahrizal' height={600} width={600}></Image>
              </div>
              <div className='flex flex-col items-center'>
                <p className='font-semibold text-xl text-slate-600 text-center'>Anggi Aulia Suharja</p>
                <p className='font-medium text-lg text-slate-400 text-center'>Ketua Dewan Pembina Yayasan<br/>Ruang Pemuda Nusantara</p>
              </div>
            </div>
          </div>
          
        </section>

        {/* Fokus Utama */}
        <section className='lg:py-16 py-12 md:gap-24 gap-6 flex md:flex-row flex-col bg-white items-center w-full justify-center md:px-24 px-8'>
          <div className='flex flex-col gap-5 items-start'>
            <div className="lg:leading-tight font-bold text-[#046CC9] lg:text-5xl text-4xl md:text-left text-center">Fokus Utama IDEAL</div>
            <div className="max-w-[574px] text-[#555555] w-full font-medium lg:text-lg md:text-md text-sm text-center md:text-left">Dari tahap persiapan hingga kesuksesan, <br/>kami siap mendampingi Anda setiap langkahnya.</div>
          </div>

          <div className='flex flex-col gap-8 items-center'>
            <div className='flex flex-row gap-8 items-center justify-center max-w-[520px]'>
              <Image src="/assets/komputer.png" alt='komputer' height={70} width={70}></Image>
              <p className='max-w-[574px] text-[#555555] w-full font-medium lg:text-lg md:text-md text-sm text-justify'>Menjadi wadah untuk mengembangkan ide, bakat, dan kreativitas bagi anak-anak muda Indonesia khususnya di dalam sektor pendidikan, pengembangan diri, dan kepemimpinan.</p>
            </div>

            <div className='flex flex-rpw gap-8 items-center justify-center max-w-[520px]'>
              <Image src="/assets/chat.png" alt='komputer' height={70} width={70}></Image>
              <p className='max-w-[574px] text-[#555555] w-full font-medium lg:text-lg md:text-md text-sm text-justify'>Mendorong terciptanya sumber daya yang mampu mengikuti perkembangan, pengetahuan dan teknologi yang peduli dan inovatif.</p>
            </div>

            <div className='flex flex-rpw gap-8 items-center justify-center max-w-[520px]'>
              <Image src="/assets/calendar.png" alt='komputer' height={70} width={70}></Image>
              <p className='max-w-[574px] text-[#555555] w-full font-medium lg:text-lg md:text-md text-sm text-justify'>Membangun jejaring Nasional dan Internasional. Menciptakan gerakan pengembangan untuk anak-anak muda Indonesia.</p>
            </div>

            <div className='flex flex-rpw gap-8 items-center justify-center max-w-[520px]'>
              <Image src="/assets/progress.png" alt='komputer' height={70} width={70}></Image>
              <p className='max-w-[574px] text-[#555555] w-full font-medium lg:text-lg md:text-md text-sm text-justify'>Mensinergikan dan mengajak elemen masyarakat untuk sama- sama berkolaborasi dalam pembangunan menuju Indonesia emas.</p>
            </div>
          </div>
        </section>

        {/* Apa Kata Mereka */}
        <section className='lg:py-16 py-12 md:gap-12 gap-12 flex md:flex-col flex-col bg-white items-center w-full justify-center md:px-24 px-8'>
          <div className="lg:leading-tight font-bold text-[#046CC9] lg:text-5xl text-4xl md:text-left text-center">Apa Kata Mereka?</div>

          <div className='flex lg:flex-row flex-col lg:gap-16 drop-shadow-custom-offset md:gap-12 gap-8 items-center justify-center'>  

            <div className="flex flex-col items-center">
              <TestimonialCard
                quote="“Selama magang di IDEAL Indonesia, banyak banget hal yang aku pelajari, mulai dari kerja sama bareng tim, mengasah problem solving, sampai ngembangin sisi kreatif. Tanggung jawab yang aku dapet ternyata ngasih pengalaman baru yang seru dan pastinya bakal jadi bekal berharga buat perjalanan karierku ke depannya”"
                name="Erina Argianti S"
                batch="IDEAL Batch 3"
                imageSrc="/assets/people/erina.png"
                altText="Erina Argianti S"
              />
            </div>

            <div className="flex flex-col items-center">
              <TestimonialCard
                quote="&quot;Menjadi intern di IDEAL batch 3 itu pengalaman yang seru dan berkesan buat saya! Banyak hal yang saya pelajari tentang kepemimpinan dan kerja sama tim. IDEAL memberi saya kesempatan untuk terjun langsung ke berbagai proyek yang mengasah keterampilan untuk karir kedepan. Suasana kerja di sini juga  penuh semangat, bikin saya merasa nyaman untuk berkontribusi. IDEAL adalah tempat yang menyenangkan untuk berkembang, tetap profesional dan juga sangat mendukung&quot;"
                name="Miladia Azzahra"
                batch="IDEAL Batch 3"
                imageSrc="/assets/people/miladia.png"
                altText="Miladia Azzahra"
              />
            </div>

            {/* <div className="flex flex-col items-center">
              <TestimonialCard
                quote="&quot;Magang di IDEAL batch 1 menurut aku merupakan pengalaman yang super seru dan nggak terlupakan! Dari awal vibes-nya udah positif, apalagi mentornya super baik dan selalu siap bantu. Selama program, aku jadi nemuin skill-skill yang nggak disangka bisa aku kembangin—kayak leadership, problem-solving, komunikasi dsb. pokoknya bersyukur bgt bisa dapet kesempatan buat tumbuh dan berkembang bareng IDEAL!&quot;"
                name="Nabilandra Fortuna"
                batch="IDEAL Batch 1"
                imageSrc="/assets/people/miladia.png"
                altText="Miladia Azzahra"
              />
            </div>

            <div className="flex flex-col items-center">
              <TestimonialCard
                quote="&quot;Waktu itu moment baru terjun berorganisasi sehingga ngerasa cukup challenging tapi berkat work culture yang sistematis jadi banyak belajar hal-hal baru secara professional yang berguna di dunia karir sekarang. Secara pribadi, skill yang paling berkembang salah satunya yaitu public speaking karena sebagai PR harus berhubungan dengan banyak pihak👏🏻 terakhir melalui IDEAL juga aku bisa dapat banyak relasi baru & memimpin kerjasama dalam tim&quot;"
                name="Amanda Shahla"
                batch="IDEAL Batch 1"
                imageSrc="/assets/people/miladia.png"
                altText="Miladia Azzahra"
              />
            </div> */}

          </div>
        </section>

        {/* collaborated with  */}
        <section className='lg:py-16 py-12 md:gap-4 gap-2 flex md:flex-col flex-col bg-white items-center w-full justify-center md:px-24 px-8 '>
          <div className="lg:leading-tight font-bold text-[#046CC9] lg:text-5xl text-4xl md:text-left text-center object-cover">Collaborated With</div>
          <Collaborated/>
        </section>
        

        {/* Our company partner  */}
        <section className='lg:py-16 py-12 md:gap-4 gap-2 flex md:flex-col flex-col bg-white items-center w-full justify-center md:px-24 px-8'>
          <div className="lg:leading-tight font-bold text-[#046CC9] lg:text-5xl text-4xl md:text-left text-center">Company Partner</div>
          <CompanyPartners/>
        </section>

        {/* Our Community Partner */}
        <section className='lg:py-16 py-12 md:gap-8 gap-2 flex md:flex-col flex-col bg-white items-center w-full justify-center md:px-24 px-8'>
          <div className="lg:leading-tight font-bold text-[#046CC9] lg:text-5xl text-4xl md:text-left text-center">Community Partner</div>
          <CommunityPartners/>
          <p className='text-xl text-[#555555] font-semibold'>And Many More...</p>
        </section>
      </div>
      <Footer/>
    </main>
  );
}