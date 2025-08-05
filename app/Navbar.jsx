'use client';

import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '#about' },
    { label: 'Our Team', href: '#team' },
    { label: 'Courses', href: '#courses' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="bg-[#0a1f44] text-white py-4 px-6 fixed top-0 w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-yellow-400">KODE.DEV</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium">
          {menuItems.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="hover:text-yellow-400 transition">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          {menuOpen ? (
            <FaTimes
              size={24}
              className="cursor-pointer"
              onClick={toggleMenu}
            />
          ) : (
            <FaBars
              size={24}
              className="cursor-pointer"
              onClick={toggleMenu}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-start mt-4 px-6 space-y-4 text-sm font-medium">
          {menuItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="block py-2 hover:text-yellow-400"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
