// src/components/sections/Rules.tsx
"use client";

import { motion } from "framer-motion";
import {
  FaClock,
  FaUsers,
  FaRupeeSign,
  FaGraduationCap,
  FaClipboardList,
  FaCode,
  FaChalkboardTeacher,
  FaGavel,
  FaFileUpload,
  FaHandshake,
} from "react-icons/fa";
import { IconType } from "react-icons";

interface DetailItem {
  icon: IconType;
  title: string;
  description: string;
}

interface RuleItem {
  title: string;
  description: string;
}

const HACKATHON_DETAILS: DetailItem[] = [
  {
    icon: FaClock,
    title: "Duration",
    description: "24 Hours (Non-stop)",
  },
  {
    icon: FaUsers,
    title: "Team Size",
    description: "Team size min 2 max 4 Students",
  },
  {
    icon: FaRupeeSign,
    title: "Registration Fee",
    description: "₹50 per participant",
  },
];

const HACKATHON_RULES: RuleItem[] = [
  {
    title: "Eligibility",
    description: "Open to undergraduate students from all disciplines.",
  },
  {
    title: "Team Composition",
    description:
      "Each team can have min 2 - max 4 members. Cross-disciplinary teams are encouraged.",
  },
  {
    title: "Problem Statements",
    description:
      "Teams will choose from a curated list of real-world challenges provided at the start.",
  },
  {
    title: "Development",
    description:
      "All code must be written during the hackathon. Pre-built libraries and frameworks are allowed, but no pre-written solutions.",
  },
  {
    title: "Mentorship",
    description:
      "Domain experts will be available throughout the event for guidance.",
  },
  {
    title: "Judging Criteria",
    description:
      "Innovation & Creativity, Technical Feasibility, Impact & Scalability, Presentation & Teamwork.",
  },
  {
    title: "Submission",
    description:
      "Final code and presentation must be submitted before the 24-hour deadline.",
  },
  {
    title: "Code of Conduct",
    description:
      "Respectful collaboration is mandatory. Plagiarism or misconduct will lead to disqualification.",
  },
];

const Rules = () => {
  return (
    <section id="rules" className="py-20 lg:py-32 bg-dark-bg/95">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16 text-primary"
        >
          Hackathon Details & Guidelines
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Details */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-8"
          >
            {HACKATHON_DETAILS.map((item, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="text-secondary mt-1">
                  <item.icon size={30} />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-light-text">
                    {item.title}
                  </h4>
                  <p className="text-lg text-light-text/70">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right Column: Rules */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="p-8 bg-dark-card rounded-lg border border-primary/20"
          >
            <h3 className="text-3xl font-bold mb-6 text-primary">
              Rules & Guidelines
            </h3>
            <ul className="space-y-4">
              {HACKATHON_RULES.map((rule, index) => (
                <li key={index}>
                  <p className="text-light-text">
                    <span className="font-bold">{rule.title}:</span>{" "}
                    {rule.description}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Rules;
