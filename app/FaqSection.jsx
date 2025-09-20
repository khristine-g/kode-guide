'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    question: 'Do I need prior experience?',
    answer:
      "No prior experience is needed. We start from the basics and guide you step-by-step until you're building projects confidently.",
  },
  {
    question: 'How long is each course?',
    answer:
      'Our courses run between 8 to 12 weeks depending on the path. Each week includes live sessions, assignments, and mentorship.',
  },
  {
    question: 'What tools or setup do I need?',
    answer:
      'All you need is a laptop and internet connection. We’ll guide you through setting up your coding environment using free tools.',
  },
  {
    question: 'Is this self-paced or live?',
    answer:
      'It’s a blend of both. You’ll learn through structured materials and meet with mentors or instructors weekly for live support.',
  },
  {
    question: 'What if I get stuck?',
    answer:
      'You’ll have access to a private community, mentors, and weekly Q&A calls to get help whenever you’re stuck.',
  },
];

const faqItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-6 md:px-20 bg-[#F9FAFB]" id="faq">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, amount: 0.4 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-500 mb-4">
            FAQs
          </h2>
          <h3 className="text-2xl font-semibold text-yellow-500 mb-4">
            Got Questions? We Have Answers!
          </h3>
          <p className="text-lg text-[#475569] leading-relaxed mb-6">
            Get answers to common questions before starting your learning
            journey. We've compiled helpful info so you can start with
            confidence.
          </p>

          {/* Extra Info List */}
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></span>
              <span className="text-[#334155] text-base">
                Learn from industry professionals with hands-on guidance.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></span>
              <span className="text-[#334155] text-base">
                Access a supportive community and weekly Q&A sessions.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></span>
              <span className="text-[#334155] text-base">
                Get career support and project feedback along the way.
              </span>
            </li>
          </ul>

          {/* CTA Button */}
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-full text-lg font-medium transition">
            Contact Us
          </button>
        </motion.div>

        {/* Right FAQ Accordion */}
        <div>
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              className="mb-5"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={faqItemVariants}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center text-left bg-white p-5 rounded-lg border border-[#E2E8F0] shadow-sm hover:shadow-md transition duration-300"
              >
                <span className="font-semibold text-[#1E293B] text-lg">
                  {item.question}
                </span>
                {activeIndex === index ? (
                  <Minus size={24} className="text-[#2563EB]" />
                ) : (
                  <Plus size={24} className="text-[#2563EB]" />
                )}
              </button>

              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="mt-3 text-[#475569] bg-white p-5 rounded-b-lg border-t border-[#E2E8F0] text-base leading-relaxed">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
