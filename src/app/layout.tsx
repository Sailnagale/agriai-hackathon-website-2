// src/app/layout.tsx

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "next-themes";
import { BranchProvider } from "@/context/BranchContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "AgriAI Hackathon",
  description: "Where Young Minds Cultivate Future Farms",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // The <html> tag is the top-level element.
    <html lang="en" suppressHydrationWarning>
      {/*
        The <body> tag is the ONLY direct child of <html> in this component.
        Next.js automatically handles creating the <head> tag from your metadata.
        DO NOT put any spaces, comments, or characters between <html> and <body>.
      */}
      <body className={poppins.className}>
        {/* ALL providers and your app's content go INSIDE the <body> tag */}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <BranchProvider>{children}</BranchProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
