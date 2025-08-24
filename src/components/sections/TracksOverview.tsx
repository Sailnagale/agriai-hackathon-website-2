// src/components/sections/TracksOverview.tsx
"use client";

import GlowCard from "../ui/GlowCard";
import { FaDatabase, FaLaptopCode } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedButton from "../ui/AnimatedButton";

const TracksOverview = () => {
  return (
    <section id="tracks" className="py-20 lg:py-32 bg-dark-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-primary">
          Choose Your Challenge
        </h2>
        <p className="text-center text-lg text-light-text/70 mb-16 max-w-2xl mx-auto">
          We have two specialized tracks designed to match your skills and push
          your boundaries.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Track 1 Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <GlowCard
              className="h-full"
              glowClassName="from-secondary to-blue-500"
            >
              <div className="flex flex-col h-full">
                <div className="text-secondary mb-4">
                  <FaDatabase size={50} />
                </div>
                <h3 className="text-2xl font-bold mb-3">
                  Track 1: Implementing AIML in Agriculture
                </h3>
                <p className="text-light-text/80 mb-6 flex-grow">
                  For Data Science enthusiasts. Solve real data-centric
                  challenges, from EDA and feature engineering to deep learning
                  models and MLOps best practices.
                </p>
                <Link href="/tracks">
                  <AnimatedButton className="w-full bg-secondary border-secondary hover:bg-secondary/90">
                    Explore Problems
                  </AnimatedButton>
                </Link>
              </div>
            </GlowCard>
          </motion.div>

          {/* Track 2A Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <GlowCard className="h-full" glowClassName="from-accent to-red-500">
              <div className="flex flex-col h-full">
                <div className="text-accent mb-4">
                  <FaLaptopCode size={50} />
                </div>
                <h3 className="text-2xl font-bold mb-3">
                  Track 2A: Web & AI Applications
                </h3>
                <p className="text-light-text/80 mb-6 flex-grow">
                  Build end-to-end applications that integrate AI to deliver
                  tangible user value. From intelligent front-ends to robust
                  back-ends, show how AI elevates the user experience.
                </p>
                <Link href="/tracks">
                  <AnimatedButton className="w-full bg-accent border-accent hover:bg-accent/90">
                    View Details
                  </AnimatedButton>
                </Link>
              </div>
            </GlowCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TracksOverview;
