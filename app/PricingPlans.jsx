"use client";

import React from "react";
import { motion } from "framer-motion";

const PricingPlans = () => {
  const plans = [
    {
      title: "1-on-1 Mentorship",
      price: "KES 20,000/month",
      link: "https://docs.google.com/forms/d/e/1FAIpQLScvEiKg4SCvJ5RHhed5z_rwioCCKAXwHd7UihjYpIfzi3iChA/viewform?usp=pp_url&entry.1775952533=1-on-1+Mentorship",
      features: [
        "Weekly 1-on-1 sessions",
        "Personalized guidance",
        "Direct access to mentor",
        "Project-based learning",
        "Support via WhatsApp/Email",
      ],
    },
    {
      title: "Cohort Learning",
      price: "KES 10,000/month",
      link: "https://docs.google.com/forms/d/e/1FAIpQLScvEiKg4SCvJ5RHhed5z_rwioCCKAXwHd7UihjYpIfzi3iChA/viewform?usp=pp_url&entry.1775952533=Cohort+Learning",
      features: [
        "Live weekly classes",
        "Project-based learning",
        "Group projects & discussions",
        "Supportive learning community",
      ],
    },
  ];

  // Variants for stagger animations
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="py-16 bg-gray-100" id="pricingplans">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title with animation */}
        <motion.h2
          className="text-3xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Pricing Plans
        </motion.h2>

        {/* Cards with stagger effect */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.05, boxShadow: "0px 8px 24px rgba(0,0,0,0.15)" }}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between"
            >
              <div>
                <motion.h3
                  className="text-2xl font-semibold mb-2"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {plan.title}
                </motion.h3>
                <motion.p
                  className="text-xl font-bold text-yellow-400 mb-4"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  {plan.price}
                </motion.p>
                <ul className="space-y-2">
                  {plan.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      className="text-gray-700"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                    >
                      • {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
              <motion.a
                href={plan.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-white py-2 px-4 rounded text-center inline-block"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
              >
                Enroll Now
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PricingPlans;
