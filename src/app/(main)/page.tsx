// src/app/(main)/page.tsx
import About from "@/components/sections/About";
import Faq from "@/components/sections/Faq";
import Hero from "@/components/sections/Hero";
import Prizes from "@/components/sections/Prizes";
import Team from "@/components/sections/Team";
import TracksOverview from "@/components/sections/TracksOverview";
import Rules from "@/components/sections/Rules"; // <-- 1. ADD THIS IMPORT
import Sponsors from "@/components/sections/Sponsors";
import Contact from "@/components/sections/Contact";
import HowToRegister from "@/components/sections/HowToRegister";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <TracksOverview />
      <Rules />
      <HowToRegister />
      {/* <-- 2. ADD THE COMPONENT HERE */}
      <Prizes />
      {/* <Sponsors /> */}
      <Contact />
      <Team />
      <Faq />
    </>
  );
}
