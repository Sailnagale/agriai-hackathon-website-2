// src/components/ui/AnimatedButton.tsx
"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

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
  // Destructure the `onDrag` prop and pass the rest of the props to motion.button.
  // This filters out the incompatible prop that is causing the build to fail.
  const { onDrag, ...rest } = props;

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
      // Pass only the compatible props to the Framer Motion button
      {...rest}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

export default AnimatedButton;
