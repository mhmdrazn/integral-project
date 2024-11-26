import { collaborated } from "../data/collaborated";
import Image from "next/image";

export default function CommunityPartners(): JSX.Element {
  return (
    <section className="py-8">

      <div className="grid grid-cols-3 md:grid-cols-6 gap-4 items-center">
        {collaborated.map((collaborated, index) => (
          <a
          key={index}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center p-2 rounded-md transition"
          >
            <div className="md:w-36 md:h-36 h-16 w-16 relative"> {/* Set width and height of the container */}
              <Image
                src={collaborated.logo}
                alt={collaborated.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </a>
        ))}
      </div>
      
    </section>
  );
}
