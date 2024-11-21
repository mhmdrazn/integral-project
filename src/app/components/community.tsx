import { partners } from "../data/partners";
import Image from "next/image";

export default function CommunityPartners(): JSX.Element {
  return (
    <section className="py-8">
      <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-4 items-center">
        {partners.map((partner, index) => (
          <a
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-2 rounded-md transition"
        >
            <div className="md:w-32 md:h-24 h-12 w-16 relative"> {/* Set width and height of the container */}
              <Image
                src={partner.logo}
                alt={partner.name}
                layout="fill"
                objectFit="contain"
              />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
