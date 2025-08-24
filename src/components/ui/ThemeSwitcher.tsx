// src/components/ui/ThemeSwitcher.tsx
"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";

// The "export" keyword here is the crucial part.
export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // This prevents a hydration mismatch error
    return null;
  }

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="p-2 rounded-full bg-dark-card hover:bg-primary/20 transition-colors"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <FiSun className="h-5 w-5 text-primary" />
      ) : (
        <FiMoon className="h-5 w-5 text-secondary" />
      )}
    </button>
  );
};
