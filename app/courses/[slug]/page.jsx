'use client';

import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';

const courseDetails = {
  'full-stack': {
    title: "Full Stack Web Development",
    intro: "Become a job-ready Full Stack Developer by mastering both frontend and backend technologies through real-world projects and expert mentorship.",
    topics: [
      "HTML, CSS, JavaScript (ES6+)",
      "React.js & Tailwind CSS",
      "Next.js for production-grade frontend",
      "Django or Ruby on Rails backend",
      "PostgreSQL  for databases",
      "Building RESTful APIs & Authentication (JWT/OAuth)",
      "Git, GitHub & Version Control",
      "Testing, Debugging & Performance Optimization",
      "Deployment with Vercel, Render, or Railway",
    ],
    duration: "12 weeks",
    level: "Beginner to Advanced",
    tools: ["VSCode", "Postman", "Git", "Figma", "Vercel"],
  },
  frontend: {
    title: "Frontend Development",
    intro: "Master modern UI development, responsive design, and frontend frameworks to create beautiful, functional user interfaces.",
    topics: [
      "HTML5, CSS3, JavaScript (ES6+)",
      "React.js & Next.js for dynamic UIs",
      "Responsive Design & Mobile First",
      "Tailwind CSS & Utility-first styling",
      "State Management (useState, Redux)",
      "Fetching & Integrating APIs",
      "Accessibility & SEO Best Practices",
      "Version Control (Git & GitHub)",
      "Deploying to Netlify or Vercel",
    ],
    duration: "8 weeks",
    level: "Beginner to Intermediate",
    tools: ["Chrome DevTools", "Figma", "GitHub", "Vercel"],
  },
  backend: {
    title: "Backend Development",
    intro: "Learn to build scalable server-side applications and APIs using industry-standard tools and best practices.",
    topics: [
      "Django or Ruby on Rails",
      "Database Design with PostgreSQL",
      "ActiveRecord (Rails)",
      "RESTful APIs ",
      "Authentication & Authorization (JWT, OAuth)",
      "Error Handling & Logging",
      "Deployment (Render, Railway, Fly.io)",
      "Integrating with Next.js Frontend",
    ],
    duration: "10 weeks",
    level: "Intermediate",
    tools: ["Postman", "Git", "Railway" ],
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2 },
  }),
};

export default function CoursePage({ params }) {
  const course = courseDetails[params.slug];

  if (!course) return notFound();

  return (
    <main className="min-h-screen px-6 py-20 bg-gray-50 text-gray-800">
      <motion.div
        className="max-w-5xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl font-bold text-[#0a1f44] mb-4"
          variants={fadeUp}
        >
          {course.title}
        </motion.h1>

        <motion.p
          className="text-lg text-gray-600 mb-10"
          variants={fadeUp}
        >
          {course.intro}
        </motion.p>

        <motion.div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <motion.div
            className="bg-white p-6 rounded-xl shadow-md"
            variants={fadeUp}
          >
            <h2 className="text-xl font-semibold text-yellow-600 mb-2">
              Course Duration
            </h2>
            <p>{course.duration}</p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-xl shadow-md"
            variants={fadeUp}
          >
            <h2 className="text-xl font-semibold text-yellow-600 mb-2">
              Difficulty Level
            </h2>
            <p>{course.level}</p>
          </motion.div>
        </motion.div>

        <motion.h2
          className="text-2xl font-semibold mb-4 text-yellow-500"
          variants={fadeUp}
        >
          What You'll Learn
        </motion.h2>

        <motion.ul
          className="list-disc list-inside text-gray-700 space-y-3 mb-10"
          variants={fadeUp}
        >
          {course.topics.map((topic, i) => (
            <motion.li key={i} custom={i + 1} variants={fadeUp}>
              {topic}
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          className="mb-10"
          variants={fadeUp}
        >
          <h3 className="text-xl font-semibold text-yellow-500 mb-2">
            Tools & Platforms You’ll Use
          </h3>
          <p className="text-gray-700">{course.tools.join(', ')}</p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          variants={fadeUp}
        >
          <a
            href="#enroll"
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-full text-lg font-medium transition"
          >
            Enroll Now
          </a>
          <a
            href="/#courses"
            className="border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white px-6 py-3 rounded-full text-lg font-medium transition"
          >
            Back to Courses
          </a>
        </motion.div>
      </motion.div>
    </main>
  );
}
