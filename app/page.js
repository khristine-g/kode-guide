'use client';
import Courses from './courses/page';
import CTA from './CTA';

import FaqSection from './FaqSection';
import PricingPlans from './PricingPlans';
import WhyChooseUs from './WhyChooseUs';
import HowItWorks from './HowItWorks';


import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full bg-[#0a1f44] h-screen overflow-hidden">
        {/* Video Background */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/kode-guide1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay for contrast */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#0a1f44]/70 z-10" />

        {/* Hero Content */}
        <div className="relative z-20 flex flex-col items-center justify-center text-center text-white h-full px-6 max-w-4xl mx-auto">
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Become a Professional Developer with <span className="text-yellow-400">KODE.DEV</span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Master in-demand skills like Web Development, Python, AI, and more. Join our hands-on coding bootcamps and personalized mentorships.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Link href="#courses">
              <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold text-lg px-8 py-4 rounded-full shadow-md transition">
                View Programs
              </button>
            </Link>
            <Link href="https://kodedev-beta.vercel.app/">
              <button className="border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-semibold text-lg px-8 py-4 rounded-full transition">
                Kids Section
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Courses Section */}
     
      <Courses />
      <WhyChooseUs />
       <FaqSection />
        <HowItWorks />

     
     
      <CTA />
      <PricingPlans />
      
    </>
  );
}
