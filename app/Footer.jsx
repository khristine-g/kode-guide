'use client';

import Link from 'next/link';
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="bg-[#0a1f44] text-white pt-12 pb-6 px-6 mt-20">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-4">DevLaunch</h2>
          <p className="text-sm text-gray-300">
            Empowering future developers through quality, affordable, and practical coding education.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/#courses">Courses</Link></li>
            <li><Link href="/#contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>Email: info@devlaunch.com</li>
            <li>Phone: +254 712 345 678</li>
            <li>Nairobi, Kenya</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <a href="https://facebook.com" target="_blank" className="hover:text-yellow-400">
              <FaFacebookF />
            </a>
            <a href="https://x.com" target="_blank" className="hover:text-yellow-400">
              <FaXTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" className="hover:text-yellow-400">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" className="hover:text-yellow-400">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="border-t border-gray-600 mt-10 pt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} DevLaunch. All rights reserved.
      </div>
    </footer>
  );
}
