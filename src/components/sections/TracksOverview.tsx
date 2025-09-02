"use client";

import { useBranch } from "@/context/BranchContext";
import BranchSelector from "@/components/ui/BranchSelector";
import GlowCard from "../ui/GlowCard";
import { FaDatabase, FaLaptopCode } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedButton from "../ui/AnimatedButton";
import { IconType } from "react-icons";

// TrackCard component definition (This part is correct and does not need to be changed)
type TrackCardProps = {
  icon: IconType;
  title: string;
  description: string;
  href: string;
  glowClassName: string;
  iconColorClassName: string;
  buttonClassName: string;
  animationDirection: "left" | "right";
};

const TrackCard = ({
  icon: Icon,
  title,
  description,
  href,
  glowClassName,
  iconColorClassName,
  buttonClassName,
  animationDirection,
}: TrackCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: animationDirection === "left" ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <GlowCard className="h-full" glowClassName={glowClassName}>
        <div className="flex flex-col h-full">
          <div className={`${iconColorClassName} mb-4`}>
            <Icon size={50} />
          </div>
          <h3 className="text-2xl font-bold mb-3">{title}</h3>
          <p className="text-light-text/80 mb-6 flex-grow">{description}</p>
          <Link href={href}>
            <AnimatedButton className={`w-full ${buttonClassName}`}>
              Explore Problems
            </AnimatedButton>
          </Link>
        </div>
      </GlowCard>
    </motion.div>
  );
};
// ==================================================================

const TracksOverview = () => {
  const { branch } = useBranch();

  return (
    <section id="tracks" className="py-20 lg:py-32 bg-dark-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-primary">
          Choose Your Challenge
        </h2>
        <p className="text-center text-lg text-light-text/70 mb-16 max-w-2xl mx-auto">
          We have specialized tracks designed to match your skills and push your
          boundaries. Select your branch to see the relevant track.
        </p>

        {/* ================================================================== */}
        {/* THIS IS THE FIX: Always render the BranchSelector.                 */}
        {/* It will decide for itself what to show.                          */}
        {/* ================================================================== */}
        <BranchSelector />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 md:max-w-xl lg:max-w-4xl mx-auto">
          {branch === "datascience" && (
            <div className="md:col-span-2">
              <TrackCard
                icon={FaDatabase}
                title="Track 1: Implementing AIML in Agriculture"
                description="For Data Science enthusiasts. Solve real data-centric challenges, from EDA and feature engineering to deep learning models and MLOps best practices."
                href="/tracks"
                glowClassName="from-secondary to-blue-500"
                iconColorClassName="text-secondary"
                buttonClassName="bg-secondary border-secondary hover:bg-secondary/90"
                animationDirection="left"
              />
            </div>
          )}

          {branch === "other" && (
            <div className="md:col-span-2">
              <TrackCard
                icon={FaLaptopCode}
                title="Track 2: Agriculture 4.0: From Farm to Fork"
                description="Build end-to-end applications that integrate AI to deliver tangible user value. From intelligent front-ends to robust back-ends, show how AI elevates the user experience."
                href="/tracks"
                glowClassName="from-accent to-red-500"
                iconColorClassName="text-accent"
                buttonClassName="bg-accent border-accent hover:bg-accent/90"
                animationDirection="right"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TracksOverview;
