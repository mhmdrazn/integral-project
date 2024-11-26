import React from 'react';
import Footer from '@/app/components/footer';
import Navbar from '@/app/components/navbar';
import Image from 'next/image';
import Card from '@/app/components/card';

function Page() {
  const data = [
    {
      subtitle: 'Onboarding',
      shortDesc: 'Onboarding merupakan kegiatan awal yang dirancang untuk memperkenalkan anggota baru pada visi, misi, dan nilai-nilai IDEAL.',
      img: '/assets/events/onboarding.png', 
      imgSmall:'/assets/jumlahSiswa.png',
    },
    {
      subtitle: 'GDP',
      shortDesc: 'Program yang berfokus kepada Kepemimpinan dalam meningkatkan kemampuan leadershipnya melalui pelatihan-pelatihan',
      img: '/assets/events/gdp.png', 
      imgSmall:'/assets/jumlahSiswa.png',
    },
    {
      subtitle: 'Functional Development Program',
      shortDesc: 'Program representatif dalam pergerakan pengembangan anak muda.',
      img: '/assets/events/fdp.png', 
      imgSmall:'/assets/jumlahSiswa.png',
    },
    {
      subtitle: 'Bonding',
      shortDesc: 'Program untuk memotivasi kaum muda agar melakukan aksi nyata yang memberikan kontribusi positif dalam skala lokal hingga nasional.',
      img: '/assets/events/bonding.png', 
      imgSmall:'/assets/jumlahSiswa.png',
    }, 
    
  ];
  const data2=[
    {
      subtitle: 'Onboarding',
      shortDesc: 'Program yang berfokus kepada pengembangan pendidikan dan kepemimpinan melalui kegiatan Talkshow, pelatihan dan FGD.',
      img: '/onboard1.png', 
      imgSmall:'/assets/jumlahSiswa.png',
    },
    {
      subtitle: 'Onboarding',
      shortDesc: 'Program yang berfokus kepada Kepemimpinan dalam meningkatkan kemampuan leadershipnya melalui pelatihan-pelatihan.',
      img: '/onboard2.png', 
      imgSmall:'/assets/jumlahSiswa.png',
    },
    {
      subtitle: 'GDP',
      shortDesc: 'Program representatif dalam pergerakan pengembangan anak muda.',
      img: '/gdp.png', 
      imgSmall:'/assets/jumlahSiswa.png',
    },
    {
    subtitle: 'FDP',
    shortDesc: 'Program tukar pikiran dengan Tokoh Nasional untuk menyampaikan Ide, gagasan dan Inovasi secara langsung kepada pemangku kepentingan',
    img: '/fdp.png', 
    imgSmall:'/assets/jumlahSiswa.png',
    }, 
  ];

  return (
    <main>
      <Navbar highlight="Event" />
      <div className="w-full min-h-screen flex flex-col overflow-hidden bg-white">
        {/* Hero Section */}
        <section className="md:mt-20 mt-12 px-4 md:px-8 lg:px-16 gap-24 items-center justify-center flex md:flex-row flex-col min-h-[700px] lg:h-[640px] bg-white">
          <Image
            src="/assets/main-ideal.png"
            alt="main-ideal"
            height={240}
            width={240}
            className="flex md:hidden"
          />
          <div className="flex flex-col gap-5">
            <h2 className="lg:text-5xl md:text-3xl text-2xl lg:max-w-[640px] md:text-left text-center font-bold lg:leading-tight text-[#046CC9]">
              Indonesian Development Education And Leadership
            </h2>
            <h2 className="lg:text-3xl md:text-3xl font-medium text-xl md:text-left text-center text-[#555555] lg:max-w-[640px] lg:leading-tight">
              Pendidikan Untuk Semua<br/>Tingkatkan Potensi Diri
            </h2>
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
        {/* Kegiatan Kami */}
        <section>
          <div className=' bg-white flex flex-col place-items-center my-4 pb-8'>
            <div className="flex flex-row justify-center items-center py-16 px-4">
            <h1 className="lg:leading-tight font-bold text-[#046CC9] text-3xl md:text-4xl text-center">Kegiatan Kami</h1>    
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-9 w-full max-w-3xl mx-auto px-4">
              {data.map((item, index) => (
                <Card key={index} subTitleCard={item.subtitle} img={item.img} shortDesc={item.shortDesc} imgSmall={item.imgSmall}/>
              ))}
            </div>
          </div>
        </section>
        
        {/* Kegiatan Terbaru */}
        <section>
          <div className=' bg-white flex flex-col place-items-center items-center my-4 mb-16'>
            <div className="flex flex-row justify-center items-center py-16 px-4">
            <h1 className="lg:leading-tight font-bold text-[#046CC9] text-3xl md:text-4xl text-center">Kegiatan Terbaru</h1>    
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-3xl mx-auto items-center justify-items-center">
              {data2.map((item, index) => (
                <Card key={index} subTitleCard={item.subtitle} img={item.img} shortDesc={item.shortDesc} imgSmall={item.imgSmall}/>
              ))}
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </main>
  );
}

export default Page;
