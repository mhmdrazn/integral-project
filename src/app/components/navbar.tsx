"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

// Definisikan tipe untuk properti yang diterima oleh Navbar
interface NavbarProps {
  highlight?: string; // highlight adalah properti opsional
}

const Navbar: React.FC<NavbarProps> = ({ highlight }) => {
  return (
    <div className="flex flex-row items-center justify-between px-4 md:px-16 lg:px-52 fixed min-h-20 w-full bg-background">
      {/* Logo */}
      <a href="#">
        <Image src="/assets/logo-ideal.png" width={85.71} height={40} alt="Logo" />
      </a>

      {/* Navigasi */}
      <div>
        <ul className="flex flex-row gap-16">
          <Link href="/">
            <li
              className={`font-medium ${
                highlight === "Home" ? "font-semibold text-[#333333]" : "text-[#919191]"
              }`}
            >
              Home
            </li>
          </Link>
          <Link href="/events">
            <li
              className={`font-medium ${
                highlight === "Event" ? "font-semibold text-[#333333]" : "text-[#919191]"
              }`}
            >
              Event
            </li>
          </Link>
          <Link href="/about-us">
            <li
              className={`font-medium ${
                highlight === "About Us" ? "font-semibold text-[#333333]" : "text-[#919191]"
              }`}
            >
              About Us
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

// Nilai default jika properti highlight tidak dikirim
Navbar.defaultProps = {
  highlight: "Home",
};

export default Navbar;
