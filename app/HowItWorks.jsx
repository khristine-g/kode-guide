'use client';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
};

const HowItWorks = () => {
  return (
    <section className="bg-[#0F172A] py-24 px-6 md:px-20 text-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-20">
        {/* Content */}
        <motion.div
          className="flex-1 space-y-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-[#38BDF8]"
            variants={itemVariants}
          >
            How It Works?
          </motion.h2>

          <motion.p
            className="text-lg text-gray-300"
            variants={itemVariants}
          >
            Your Path to a Tech Career Starts Here. Follow our structured learning
            process from selecting your course to landing your dream job with expert
            guidance and hands-on experience.
          </motion.p>

          <div className="space-y-10 mt-4">
            {/* Step 1 */}
            <motion.div
              className="border-l-4 border-[#38BDF8] pl-6"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-semibold text-white">
                01. Choose a course
              </h3>
              <p className="text-gray-400">
                Select the course that fits your career goals.
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              className="border-l-4 border-[#38BDF8] pl-6"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-semibold text-white">
                02. Learn with Interactive Sessions
              </h3>
              <p className="text-gray-400">
                Engage in hands-on learning with expert guidance.
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              className="border-l-4 border-[#38BDF8] pl-6"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-semibold text-white">
                03. Build real-world projects
              </h3>
              <p className="text-gray-400">
                Apply your skills to practical projects.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <img
            src="/images/kode-guide.jpg"
            alt="Learning process"
            className="rounded-xl shadow-lg w-full h-auto max-h-[600px] object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
