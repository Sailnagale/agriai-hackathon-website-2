// src/components/ui/GlowCard.tsx
"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowClassName?: string;
}

const GlowCard = ({ children, className, glowClassName }: GlowCardProps) => {
  return (
    <div className={cn("relative group", className)}>
      <motion.div
        className={cn(
          "absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-500",
          glowClassName
        )}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.75, transition: { duration: 0.3 } }}
      />
      {/* --- THIS IS THE UPDATED LINE --- */}
      <div className="relative h-full bg-light-card dark:bg-dark-card rounded-lg p-6 transition-colors duration-300">
        {children}
      </div>
      {/* ----------------------------- */}
    </div>
  );
};

export default GlowCard;
