"use client"
import React, { useState } from 'react';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        <Image src="/assets/logo-kecil.png" alt='logo-ideal' fill></Image>
      </a>
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`nav-links ${menuOpen ? 'show' : ''}`}>
        <li>Home</li>
        <li>Event</li>
        <li>About Us</li>
      </ul>
    </nav>
  );
};

export default Navbar;
