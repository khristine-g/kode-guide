'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const courses = [
  {
    slug: "full-stack",
    title: "Full Stack Web Development",
    short: "Master both frontend and backend skills.",
    long: "Learn how to build complete web applications from start to finish. This includes HTML, CSS, JavaScript, React, Node.js, Express, databases, and deployment strategies.",
  },
  {
    slug: "frontend",
    title: "Frontend Development",
    short: "Craft beautiful and interactive user interfaces.",
    long: "Focus on creating responsive and accessible UIs using HTML, CSS, JavaScript, React, and UI/UX best practices. Great for those who love design and visual development.",
  },
  {
    slug: "backend",
    title: "Backend Development",
    short: "Power web apps with scalable backend systems.",
    long: "Learn to build APIs, handle databases, and create secure, high-performance server-side logic using Node.js, Express, MongoDB or PostgreSQL.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Courses() {
  return (
    <motion.section
      id="courses"
      className="bg-gray-100 py-24 px-6"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-5xl font-bold text-[#0a1f44] mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Courses
        </motion.h2>
        <motion.p
          className="text-gray-600 max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Whether you want to become a full stack developer or specialize in frontend or backend, our programs are tailored to help you become job-ready.
        </motion.p>

        <motion.div
          className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
        >
          {courses.map((course, index) => (
            <motion.div
              key={index}
              className="bg-white p-10 rounded-2xl shadow-md hover:shadow-2xl transition-transform hover:scale-[1.03] flex flex-col justify-between"
              variants={cardVariants}
            >
              <div className="text-left">
                <h3 className="text-3xl font-semibold text-yellow-500 mb-4">{course.title}</h3>
                <p className="text-gray-800 font-medium mb-2">{course.short}</p>
                <p className="text-gray-600 text-sm">{course.long}</p>
              </div>

              <div className="mt-6 text-left">
                <Link href={`/courses/${course.slug}`}>
                  <button className="mt-4 bg-yellow-500 text-white px-5 py-2 rounded hover:bg-yellow-600 transition duration-200">
                    Learn More
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
