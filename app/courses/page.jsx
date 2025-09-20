'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

const courses = [
  {
    slug: 'full-stack',
    title: 'Full Stack Web Development',
    short: 'Master both frontend and backend skills.',
    long: 'Learn how to build complete web applications from start to finish. This includes HTML, CSS, JavaScript, React, Node.js, Express, databases, and deployment strategies.',
    image: '/images/kode-guide.jpg',
    duration: '3 Months',
    sessions: '24 Sessions',
  },
  {
    slug: 'frontend',
    title: 'Frontend Development',
    short: 'Craft beautiful and interactive user interfaces.',
    long: 'Focus on creating responsive and accessible UIs using HTML, CSS, JavaScript, React, and UI/UX best practices. Great for those who love design and visual development.',
    image: '/images/kode-guide.jpg',
    duration: '2 Months',
    sessions: '16 Sessions',
  },
  {
    slug: 'backend',
    title: 'Backend Development',
    short: 'Power web apps with scalable backend systems.',
    long: 'Learn to build APIs, handle databases, and create secure, high-performance server-side logic using Node.js, Express, MongoDB or PostgreSQL.',
    image: '/images/kode-guide.jpg',
    duration: '2 Months',
    sessions: '16 Sessions',
  },
];

const cardVariants = {
  hiddenLeft: { opacity: 0, x: -100 },
  hiddenRight: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

export default function Courses() {
  return (
    <section id="courses" className="bg-gray-100 py-24 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-5xl font-bold text-[#0a1f44] mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Our Courses
        </motion.h2>

        <motion.p
          className="text-gray-600 max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Choose from our specialized programs — full stack, frontend, or backend. Perfect for beginners, students, or career switchers.
        </motion.p>

        <div className="space-y-24">
          {courses.map((course, index) => {
            const isEven = index % 2 === 0;
            const animationVariant = isEven ? 'hiddenLeft' : 'hiddenRight';

            return (
              <motion.div
                key={course.slug}
                className={`flex flex-col lg:flex-row ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } items-stretch gap-10 lg:gap-16`}
                initial={cardVariants[animationVariant]}
                whileInView={cardVariants.visible}
                viewport={{ once: false, amount: 0.3 }}
              >
                {/* Content */}
                <div className="bg-white border border-gray-200 shadow-md p-8 rounded-xl w-full lg:w-1/2 flex flex-col justify-between hover:shadow-xl transition duration-300">
                  <div className="flex gap-3 mb-4">
                    <span className="text-sm border border-yellow-500 text-yellow-600 px-3 py-1 rounded-full">
                      {course.duration}
                    </span>
                    <span className="text-sm border border-yellow-500 text-yellow-600 px-3 py-1 rounded-full">
                      {course.sessions}
                    </span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-3xl font-semibold text-yellow-500 mb-3">
                      {course.title}
                    </h3>
                    <p className="text-gray-800 font-medium mb-2">{course.short}</p>
                    <p className="text-gray-600 text-sm mb-6">{course.long}</p>
                  </div>
                  <div>
                    <Link href={`/courses/${course.slug}`}>
                      <button className="bg-yellow-500 text-white px-6 py-2 rounded-full  hover:bg-yellow-600 transition duration-200">
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>

                {/* Image */}
                <div className="w-full lg:w-1/2 h-auto aspect-video overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
                  <Image
                    src={course.image}
                    alt={course.title}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
