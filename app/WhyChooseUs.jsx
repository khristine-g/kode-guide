'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Star, Clock, Rocket } from 'lucide-react';

const reasons = [
  {
    icon: <CheckCircle size={32} />,
    title: 'Beginner Friendly',
    description: 'No prior coding experience needed. Start from scratch and build up.',
  },
  {
    icon: <Rocket size={32} />,
    title: 'Real World Projects',
    description: 'Learn by building practical projects that reflect industry needs.',
  },
  {
    icon: <Clock size={32} />,
    title: 'Flexible Schedule',
    description: 'Learn at your own pace, evenings or weekends—your choice.',
  },
  {
    icon: <Star size={32} />,
    title: 'Mentorship & Support',
    description: 'Get access to expert guidance and continuous support.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-[#0F172A] text-white" id="why-choose-us">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why Choose KodeDev Academy?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div 
              key={index} 
              className="bg-[#1E293B] p-6 rounded-xl shadow-lg hover:shadow-[#3B82F6]/30 transition duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <div className="flex items-center justify-center mb-4 text-[#3B82F6]">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-gray-300">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
