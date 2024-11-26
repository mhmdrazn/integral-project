"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi"; // Import hamburger and close icons

interface NavbarProps {
  highlight?: string; // highlight is an optional prop
}

const Navbar: React.FC<NavbarProps> = ({ highlight }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-row items-center justify-between px-4 md:px-16 lg:px-52 fixed min-h-20 w-full bg-background z-20">
      {/* Logo */}
      <a href="#">
        <Image src="/assets/logo-ideal.png" width={85.71} height={40} alt="Logo" />
      </a>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden">
        {isMenuOpen ? (
          <FiX className="text-3xl cursor-pointer" onClick={toggleMenu} />
        ) : (
          <FiMenu className="text-3xl cursor-pointer" onClick={toggleMenu} />
        )}
      </div>

      {/* Full-Screen Navigation */}
      <div
        className={`fixed inset-0 bg-background flex flex-col items-center justify-center gap-12 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 md:translate-x-0 md:relative md:flex md:flex-row md:gap-16 md:bg-transparent md:inset-auto md:w-auto`}
      >
        {/* Close Icon (X) for Mobile, at Top-Right */}
        <div className="absolute top-6 right-6 md:hidden">
          <FiX className="text-4xl cursor-pointer" onClick={toggleMenu} />
        </div>

        <ul className="flex flex-col md:flex-row items-center gap-12 md:gap-16 text-xl md:text-base">
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            <li
              className={`font-medium ${
                highlight === "Home" ? "font-semibold text-[#333333]" : "text-[#919191]"
              }`}
            >
              Home
            </li>
          </Link>
          <Link href="/events" onClick={() => setIsMenuOpen(false)}>
            <li
              className={`font-medium ${
                highlight === "Event" ? "font-semibold text-[#333333]" : "text-[#919191]"
              }`}
            >
              Event
            </li>
          </Link>
          <Link href="/about-us" onClick={() => setIsMenuOpen(false)}>
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

// Default value if the highlight prop is not sent
Navbar.defaultProps = {
  highlight: "Home",
};

export default Navbar;
