// src/app/(main)/page.tsx
import About from "@/components/sections/About";
import Faq from "@/components/sections/Faq";
import Hero from "@/components/sections/Hero";
import Prizes from "@/components/sections/Prizes";
import Team from "@/components/sections/Team";
import TracksOverview from "@/components/sections/TracksOverview";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <TracksOverview />
      <Prizes />
      <Team />
      <Faq />
    </>
  );
}
