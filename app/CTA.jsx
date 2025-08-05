'use client';

import Link from 'next/link';

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-yellow-400 to-yellow-600 py-16 px-6 text-center text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Start Learning Today</h2>
        <p className="text-lg mb-8">Join the next cohort and transform your web development skills.</p>
        <Link href="/enroll">
          <button className="bg-white text-yellow-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-100 transition duration-300">
            Enroll Now
          </button>
        </Link>
      </div>
    </section>
  );
}
