import Image from 'next/image';
interface CardProps {
    img: string;
    title: string;
    price: string | number; // Mengizinkan tipe string atau number
  }
export default function Card({ img = '/assets/templateCard.png', shortDesc = 'Ideal Merupakan sebuah Leadership komunitas', subTitleCard = 'IDEAL', imgSmall ='/assets/jumlahSiswa.png' }) {
  return (
    <div className="flex flex-col gap-2.5 bg-white shadow-2xl w-[400px] h-[450px] px-16 py-8 justify-self-center  self-start ">
      <div className="flex flex-col">
        <figure className="bg-white flex justify-center items-center w-[270px] h-[250px] rounded-3xl">
          <Image src={img} alt={shortDesc} width={402} height={240} />
        </figure>
      </div>

      <div className="flex flex-col gap-1.5 max-w-64 ">
      
        <h2 className='font-semibold text-center'>{subTitleCard}</h2>
        <p className='text-xs text-justify '>{shortDesc}</p>
        <figure className="bg-white w-[270px] place-items-center  ">
        <Image src={imgSmall} alt={shortDesc} width={100} height={40}/>
        </figure>
      </div>
    </div>
  );
}
