// src/components/ui/AnimatedButton.tsx
"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils"; // Make sure you have the utils file

interface AnimatedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const AnimatedButton = ({
  children,
  className,
  ...props
}: AnimatedButtonProps) => {
  return (
    <motion.button
      className={cn(
        `px-6 py-2 rounded-md relative
        font-bold text-white
        bg-primary hover:bg-primary/90
        border-2 border-primary
        transition-all duration-300
        overflow-hidden`,
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

export default AnimatedButton;
