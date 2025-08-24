// src/components/sections/Prizes.tsx
"use client";

import { PRIZES_BENEFITS } from "@/lib/data";
import GlowCard from "../ui/GlowCard";
import { motion } from "framer-motion";

const Prizes = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Each card will animate 0.2s after the previous one
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section id="prizes" className="py-20 lg:py-32 bg-dark-card">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-primary">
          Prizes & Benefits
        </h2>
        <p className="text-center text-lg text-light-text/70 mb-16 max-w-2xl mx-auto">
          More than just a competition, we offer a platform for growth,
          networking, and recognition.
        </p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {PRIZES_BENEFITS.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <GlowCard className="h-full">
                <div className="flex flex-col items-center text-center h-full">
                  <div className="text-primary mb-4">
                    <item.icon size={50} />
                  </div>
                  <p className="text-xl font-semibold text-light-text">
                    {item.text}
                  </p>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Prizes;
