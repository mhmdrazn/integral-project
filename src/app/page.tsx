import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col">
      <Navbar/>

      {/* Hero section */}
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
      
      <section className="bg-[#0469C5] md:py-24 py-16 px-8 flex flex-col gap-12 justify-center items-center">
        <div className="md:text-5xl text-4xl font-semibold text-white text-center just w-fit">
          3 Pilar IDEAL Indonesia
        </div>

        <div className="flex lg:flex-row flex-col gap-6">
          <div className="flex flex-col gap-4 p-6 bg-white rounded-xl justify-center w-full md:min-w-[360px]">
            <div className="flex flex-row gap-8 items-center justify-center">
              <Image src='/assets/graphic-design.png' alt="grapihc" height={48} width={48}></Image>
              <div className="font-semibold text-2xl">Education</div>
            </div>
            <div className="text-lg text-center text-[#101828]">Be Education - Be Empowered</div>
          </div>

          <div className="flex flex-col gap-4 p-6 bg-white rounded-xl justify-center w-full md:min-w-[360px]">
            <div className="flex flex-row gap-3 items-center justify-center">
              <Image src='/assets/hosting.png' alt="grapihc" height={48} width={48}></Image>
              <div className="font-semibold md:text-2xl text-xl">Self Development</div>
            </div>
            <div className="text-lg text-center text-[#101828]">Dare to Dream - Take The Reins</div>
          </div>

          <div className="flex flex-col gap-4 p-6 bg-white rounded-xl justify-center w-full md:min-w-[360px]">
            <div className="flex flex-row gap-8 items-center justify-center">
              <Image src='/assets/security.png' alt="grapihc" height={48} width={48}></Image>
              <div className="font-semibold text-2xl">Leadership</div>
            </div>
            <div className="text-lg text-center text-[#101828]">Be a Force For Change</div>
          </div>
        </div>
      </section>

      <Footer/>

    </main>
  );
}
