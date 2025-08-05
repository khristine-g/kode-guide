"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    question: "Do I need prior experience?",
    answer:
      "No prior experience is needed. We start from the basics and guide you step-by-step until you're building projects confidently.",
  },
  {
    question: "How long is each course?",
    answer:
      "Our courses run between 8 to 12 weeks depending on the path. Each week includes live sessions, assignments, and mentorship.",
  },
  {
    question: "Is there a certificate?",
    answer:
      "Yes, upon completing the course and projects, you will receive a certificate of completion recognized by our community.",
  },
  {
    question: "What tools or setup do I need?",
    answer:
      "All you need is a laptop and internet connection. We’ll guide you through setting up your coding environment using free tools.",
  },
  {
    question: "Is this self-paced or live?",
    answer:
      "It’s a blend of both. You’ll learn through structured materials and meet with mentors or instructors weekly for live support.",
  },
  {
    question: "What if I get stuck?",
    answer:
      "You’ll have access to a private community, mentors, and weekly Q&A calls to get help whenever you’re stuck.",
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 bg-[#F9FAFB]" id="faq">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative w-full max-w-lg mx-auto md:mx-0"
        >
          <div className="rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/images/kode-guide.jpg" // Replace with your image
              alt="FAQ"
              width={600}
              height={400}
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Right Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-extrabold text-[#1E293B] mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-[#475569] mb-10">
            We've compiled answers to the most common questions about our courses.
          </p>

          {faqData.map((item, index) => (
            <div key={index} className="mb-5">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center text-left bg-white p-5 rounded-lg border border-[#E2E8F0] shadow-sm hover:shadow-md transition"
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
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="mt-3 text-[#475569] bg-white p-5 rounded-b-lg border-t border-[#E2E8F0] text-base leading-relaxed">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

