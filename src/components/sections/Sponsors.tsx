// src/components/sections/Sponsors.tsx
import Image from "next/image";

const Sponsors = () => {
  return (
    <section id="sponsors" className="py-20 bg-[#1a1a1a]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-poppins font-bold text-white">
            Our <span className="text-gradient">Sponsors</span>
          </h2>
          <p className="text-gray-400 mt-2">Proudly supported by:</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {/* NOTE: I've used "Electro Inventor" as that's what the logo said previously. */}
          {/* The new logo you provided will be used here. */}
          <div data-aos="fade-up">
            <img
              src="/image.png"
              alt="Electro Inventor"
              className="h-24 sponsor-logo"
            />
          </div>

          {/* You can add your other previous sponsor logos here if you wish */}
          {/* <div data-aos="fade-up" data-aos-delay="100">
            <img src="/path/to/maitys.png" alt="Maitis" className="h-24 sponsor-logo" />
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <img src="/path/to/brainchain.png" alt="Brain Chain" className="h-24 sponsor-logo" />
          </div> 
          */}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
