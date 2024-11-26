import Image from 'next/image';

interface TestimonialCardProps {
    quote: string;
    name: string;
    batch: string;
    imageSrc: string;
    altText?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, batch, imageSrc, altText = 'Profile Picture' }) => {
    return (
        <div className="flex flex-col gap-10 md:p-12 p-8 items-center bg-white rounded-2xl lg:min-h-[500px] justify-between max-w-[560px]">
        <p className="text-[#555555] w-full font-normal md:text-lg text-sm text-center">
            {quote}
        </p>
        <div className="flex flex-row gap-2 items-center">
            <div className="h-24 w-24 rounded-full overflow-hidden items-center flex bg-white">
            <Image src={imageSrc} alt={altText} width={600} height={600} />
            </div>
            <div className="flex flex-col items-start justify-start">
            <div className="font-semibold text-xl">{name}</div>
            <div className="font-normal text-md">{batch}</div>
            </div>
        </div>
        </div>
    );
};

export default TestimonialCard;
