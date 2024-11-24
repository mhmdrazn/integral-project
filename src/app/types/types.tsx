export interface Partner {
  name: string;  // Name of the partner
  logo: string;  // Path to the logo image
}

export interface Company {
  name: string;  // Name of the partner
  logo: string;  // Path to the logo image
}

export interface Collaborated {
  name: string;  // Name of the partner
  logo: string;  // Path to the logo image
}

export interface TestimonialCardProps {
  quote: string;
  name: string;
  batch: string;
  imageSrc: string;
  altText?: string;
}