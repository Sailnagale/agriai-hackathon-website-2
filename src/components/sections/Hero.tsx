// src/components/sections/Hero.tsx
"use client";
import { motion } from "framer-motion";
import AnimatedButton from "../ui/AnimatedButton";
import Countdown from "./Countdown";
import Link from "next/link";
import ParticlesBackground from "../ui/ParticlesBackground";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-bg text-center px-4">
      <ParticlesBackground />
      <div className="absolute inset-0 z-0 bg-aurora-gradient animate-aurora"></div>

      {/* Left Side Image */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
        className="absolute left-10 top-1/2 -translate-y-1/2 z-10 hidden lg:block"
      >
        <Image
          // CORRECTED PATH: Added the leading "/"
          src="/agri-logo.png"
          alt="Decorative graphic"
          width={250}
          height={500}
          className="opacity-40"
        />
      </motion.div>

      {/* Right Side Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
        className="absolute right-10 top-1/2 -translate-y-1/2 z-10 hidden lg:block"
      >
        <Image
          // CORRECTED PATH: Added the leading "/"
          src="/agri-img1.png"
          alt="Decorative graphic"
          width={250}
          height={500}
          className="opacity-40"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="relative z-10 flex flex-col items-center gap-6 pt-36"
      >
        <h1 className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-primary/80">
          AgriAi Hackathon 2025
        </h1>
        <p className="text-lg md:text-2xl text-light-text/80">
          In association with Agharkar Research Institute (ARI)
        </p>
        <div className="font-mono text-md md:text-xl bg-dark-card/50 py-2 px-4 rounded-md border border-primary/20">
          17,18,19 September • VIT Pune Campus
        </div>
        <p className="mt-4 text-2xl md:text-4xl font-light italic text-light-text max-w-3xl">
          &quot;Where Young Minds Cultivate Future Farms&quot;
        </p>

        <div className="my-8">
          <Countdown />
        </div>

        <div className="flex gap-4">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdKtjn4tSjM_Q3gjpzGcXGx-ti9DJ1Jb-2hbOK3H_P7hg72yQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AnimatedButton className="px-8 py-3 text-lg">
              Register Now
            </AnimatedButton>
          </a>
          <Link href="/tracks">
            <AnimatedButton className="px-8 py-3 text-lg bg-transparent border-primary">
              View Tracks
            </AnimatedButton>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
