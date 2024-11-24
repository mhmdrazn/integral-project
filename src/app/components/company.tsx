import { company } from "../data/company";
import Image from "next/image";

export default function CompanyPartners(): JSX.Element {
  return (
    <section className="py-8">
      <div className="grid grid-cols-2 gap-4 items-center">
        {company.map((company, index) => (
          <a
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-2 rounded-md transition"
        >
            <div className="md:w-72 md:h-36 h-12 w-16 gap-24 relative"> {/* Set width and height of the container */}
              <Image
                src={company.logo}
                alt={company.name}
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
