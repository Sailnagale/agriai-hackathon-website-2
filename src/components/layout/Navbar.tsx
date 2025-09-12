"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ThemeSwitcher } from "../ui/ThemeSwitcher";
import AnimatedButton from "../ui/AnimatedButton";
import { NAV_LINKS } from "@/lib/data";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300`}
    >
      {/* ================================================================== */}
      {/* --- THIS IS THE RESTORED VIT PUNE TOP BAR --- */}
      {/* ================================================================== */}
      <div
        className={`
          flex justify-center items-center p-4 bg-dark-bg/50 backdrop-blur-sm
          text-center transition-all duration-300
          flex-col gap-2 md:flex-row md:gap-8
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
            src="/vit-logo.png"
            alt="VIT Pune Logo"
            width={40}
            height={40}
            className="h-8 w-auto md:h-10"
          />
          <span className="text-xl md:text-2xl font-bold text-vit-blue">
            Vishwakarma Institute of Technology, Pune
          </span>
        </div>
        <div className="h-10 w-[1px] bg-gray-600 hidden md:block"></div>
        {/* Department Branding */}
        <div className="flex items-center gap-3">
          <Image
            src="/dssa-logo.png"
            alt="DSSA Logo"
            width={40}
            height={40}
            className="h-8 w-auto md:h-10"
          />
          <span className="text-sm md:text-base font-medium text-gray-400">
            Computer Science & Engineering (Data Science)
          </span>
        </div>
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
              <button
                className="md:hidden p-2 text-light-text"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* --- Mobile Menu Panel --- */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-full bg-dark-bg z-40
                    transform transition-transform duration-300 ease-in-out
                    ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col items-center justify-center h-full pt-20 gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-2xl text-light-text hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdKtjn4tSjM_Q3gjpzGcXGx-ti9DJ1Jb-2hbOK3H_P7hg72yQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AnimatedButton className="mt-4 px-8 py-3 text-lg">
              Register
            </AnimatedButton>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
