// src/components/sections/About.tsx
"use client";

import { motion } from "framer-motion";
import { FaLeaf, FaBrain } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";
import GlowCard from "../ui/GlowCard";

const About = () => {
  const features = [
    "Two specialized tracks, hands-on mentoring, and real problem statements",
    "Open to cross-disciplinary teams; solo participants welcome",
    "Prototype-first approach with emphasis on usability, impact, and rigor",
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-dark-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative h-80 lg:h-96"
          >
            <GlowCard
              className="absolute top-0 left-0 w-4/5 h-4/5"
              glowClassName="from-secondary to-accent"
            >
              <div className="flex flex-col items-center justify-center h-full text-accent">
                <FaBrain size={60} />
                <p className="mt-4 font-mono text-xl">
                  Artificial Intelligence
                </p>
              </div>
            </GlowCard>
            <GlowCard
              className="absolute bottom-0 right-0 w-4/5 h-4/5"
              glowClassName="from-primary to-green-400"
            >
              <div className="flex flex-col items-center justify-center h-full text-primary">
                <FaLeaf size={60} />
                <p className="mt-4 font-mono text-xl">Agriculture</p>
              </div>
            </GlowCard>
          </motion.div>

          {/* Right Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Uniting <span className="text-primary">Agriculture</span> and{" "}
              <span className="text-secondary">AI</span>
            </h2>
            <p className="text-lg text-light-text/80 mb-6">
              AgriAi Hackathon 2025 brings together students, researchers, and
              professionals to tackle real-world challenges with Artificial
              Intelligence and modern engineering. In collaboration with ARI,
              this edition is designed to help you build impactful solutions.
            </p>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <FiCheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
                  <span className="text-light-text">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
