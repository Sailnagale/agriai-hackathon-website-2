// src/components/layout/Navbar.tsx
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ThemeSwitcher } from "../ui/ThemeSwitcher";
import AnimatedButton from "../ui/AnimatedButton";
import { NAV_LINKS } from "@/lib/data";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300`}
    >
      {/* --- THIS IS THE VIT PUNE TOP BAR --- */}
      <div
        className={`
          flex justify-center items-center gap-4 md:gap-8 p-3 bg-dark-bg/50 backdrop-blur-sm
          transition-all duration-300
          ${
            scrolled
              ? "-translate-y-full opacity-0"
              : "translate-y-0 opacity-100"
          }
        `}
      >
        {/* VIT Branding */}
        <div className="flex items-center gap-3">
          <Image
            src="/vit-logo.png" // Assumes this is in your /public folder
            alt="VIT Pune Logo"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
          <span className="text-sm md:text-lg font-semibold text-vit-blue">
            Vishwakarma Institute of Technology, Pune
          </span>
        </div>

        {/* --- ADDED SECTION START --- */}
        {/* Separator */}
        <div className="h-10 w-[1px] bg-gray-600 hidden md:block"></div>

        {/* Department Branding */}
        <div className="flex items-center gap-3">
          <Image
            src="/dssa-logo.png" // RENAMED LOGO in /public folder
            alt="DSSA Logo"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
          <span className="text-sm md:text-lg font-semibold text-gray-200 hidden sm:inline">
            Computer Science & Engineering (Data Science)
          </span>
        </div>
        {/* --- ADDED SECTION END --- */}
      </div>

      {/* --- This is the main navigation bar --- */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-dark-bg/80 backdrop-blur-lg border-b border-primary/20"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link
              href="/"
              className="text-2xl font-bold text-primary font-mono tracking-tighter"
            >
              AgriAi
            </Link>

            <nav className="hidden md:flex items-center space-x-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`transition-colors duration-300 ${
                    pathname === link.href
                      ? "text-primary"
                      : "text-light-text hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <ThemeSwitcher />
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdKtjn4tSjM_Q3gjpzGcXGx-ti9DJ1Jb-2hbOK3H_P7hg72yQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AnimatedButton className="hidden md:block">
                  Register
                </AnimatedButton>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
