// src/components/sections/Team.tsx
"use client";

import { TEAM_SECTIONS } from "@/lib/data";
import { motion } from "framer-motion";
import Image from "next/image";

const Team = () => {
  return (
    <section id="team" className="py-20 bg-dark-card">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">
          Meet the Team
        </h2>

        {/* Outer loop for each section (e.g., "Our Advisory") */}
        {TEAM_SECTIONS.map((section) => (
          <div key={section.title} className="mb-16">
            <h3 className="text-3xl font-semibold text-center text-light-text mb-10">
              {section.title}
            </h3>

            <div className="flex flex-wrap justify-center gap-8">
              {/* Inner loop for members within the section */}
              {section.members.map((member, index) => (
                <motion.div
                  key={member.name}
                  className="w-72 text-center p-6 bg-dark-bg rounded-lg border border-primary/20 hover:border-primary transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Image
                    src={member.image}
                    alt={`Photo of ${member.name}`}
                    width={120}
                    height={120}
                    className="rounded-full object-cover mx-auto mb-4 border-2 border-primary aspect-square"
                  />
                  <h4 className="text-xl font-bold mt-2">{member.name}</h4>
                  <p className="text-primary font-semibold">{member.role}</p>

                  {/* --- ADDED THIS LINE TO DISPLAY THE TITLE --- */}
                  <p className="text-sm text-light-text/80">{member.title}</p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
