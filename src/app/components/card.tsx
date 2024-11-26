import Image from 'next/image';

export default function Card({ img = '/assets/templateCard.png', shortDesc = 'Ideal Merupakan sebuah Leadership komunitas', subTitleCard = 'IDEAL', imgSmall ='/assets/jumlahSiswa.png' }) {
  return (
    <div className="flex flex-col gap-4 bg-white items-center max-w-96 min-h-[420px] rounded-xl drop-shadow-custom-offset w-fit h-fit px-8 py-8 justify-self-center self-start ">
      <div className="flex flex-col">
        <figure className="bg-white flex justify-center items-center w-fit h-fit rounded-3xl">


          <Image src={img} alt={shortDesc} width={360} height={240} className="rounded-xl" />

        </figure>
      </div>

      <div className="flex flex-col w-full gap-3 min-h-24 items-center justify-around">
        <h2 className='font-bold text-center text-xl text-[#046CC9]'>{subTitleCard}</h2>
        <p className='text-sm text-center text-[#555555]'>{shortDesc}</p>
        <figure className="bg-white w-[270px] place-items-center">
        <Image src={imgSmall} alt={shortDesc} width={100} height={40}/>
        </figure>
      </div>
    </div>
  );
}
