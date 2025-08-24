// src/components/sections/Faq.tsx
"use client";

import { FAQ_DATA } from "@/lib/data";
import Accordion from "../ui/Accordion";
import { motion } from "framer-motion";

const Faq = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Each child will animate 0.1s after the previous one
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="faq" className="py-20 bg-dark-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">
          Frequently Asked Questions
        </h2>

        <motion.div
          className="max-w-3xl mx-auto space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {FAQ_DATA.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Accordion title={item.question}>
                <p>{item.answer}</p>
              </Accordion>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Faq;
