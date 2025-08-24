"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
// --- THIS IS THE CORRECTED IMPORT LINE ---
import type { ThemeProviderProps } from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
