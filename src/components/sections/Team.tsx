// src/components/sections/Team.tsx
"use client";
import { TEAM_DATA } from "@/lib/data";
import { motion } from "framer-motion";
import Image from "next/image";

const Team = () => {
  return (
    <section id="team" className="py-20 bg-dark-card">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">
          Meet the Organizers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_DATA.map((member, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-dark-bg rounded-lg border border-primary/20 hover:border-primary transition-all duration-300 transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Image
                src={member.image} // <-- THIS IS THE IMPORTANT CHANGE
                alt={`Photo of ${member.name}`}
                width={120}
                height={120}
                className="rounded-full object-cover mx-auto mb-4 border-2 border-primary aspect-square"
              />
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-primary">{member.role}</p>
              <p className="text-light-text/70">{member.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Team;
