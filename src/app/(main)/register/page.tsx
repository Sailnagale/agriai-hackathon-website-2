// src/app/(main)/register/page.tsx
"use client";

import AnimatedButton from "@/components/ui/AnimatedButton";
import { motion } from "framer-motion";
import { FiUpload } from "react-icons/fi";

const RegisterPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    console.log("Registration Data:", data);
    alert(
      "Thank you for registering! Check the browser console to see the submitted data."
    );
    // In a real application, you would send this data to your backend API.
  };

  const inputStyle =
    "w-full bg-dark-card border border-primary/30 rounded-md p-3 focus:ring-2 focus:ring-primary focus:outline-none transition-all placeholder-light-text/40";
  const labelStyle = "block text-light-text/80 mb-2 font-semibold";

  return (
    <div className="py-32 bg-dark-bg">
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold text-center mb-4 text-primary">
          Register for AgriAi
        </h1>
        <p className="text-center text-xl text-light-text/80 mb-12 max-w-2xl mx-auto">
          Join us to cultivate the future. Fill out the form below to secure
          your spot.
        </p>

        <form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto space-y-8 bg-dark-card p-8 rounded-lg border border-primary/20"
        >
          {/* Team Information */}
          <fieldset className="space-y-6">
            <legend className="text-2xl font-bold text-primary mb-4">
              Team Information
            </legend>
            <div>
              <label htmlFor="teamName" className={labelStyle}>
                Team Name
              </label>
              <input
                type="text"
                id="teamName"
                name="teamName"
                className={inputStyle}
                required
              />
            </div>
            <div>
              <label htmlFor="teamSize" className={labelStyle}>
                Team Size
              </label>
              <select
                id="teamSize"
                name="teamSize"
                className={inputStyle}
                required
              >
                <option value="">Select an option</option>
                {[1, 2, 3, 4, 5].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="teamMembers" className={labelStyle}>
                Team Members (comma separated)
              </label>
              <input
                type="text"
                id="teamMembers"
                name="teamMembers"
                placeholder="e.g., Jane Doe, John Smith"
                className={inputStyle}
              />
            </div>
          </fieldset>

          {/* Leader's Details */}
          <fieldset className="space-y-6">
            <legend className="text-2xl font-bold text-primary mb-4">
              Leader&apos;s Details
            </legend>
            <div>
              <label htmlFor="leaderName" className={labelStyle}>
                Leader Full Name
              </label>
              <input
                type="text"
                id="leaderName"
                name="leaderName"
                className={inputStyle}
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="leaderEmail" className={labelStyle}>
                  Email
                </label>
                <input
                  type="email"
                  id="leaderEmail"
                  name="leaderEmail"
                  className={inputStyle}
                  required
                />
              </div>
              <div>
                <label htmlFor="leaderPhone" className={labelStyle}>
                  Phone
                </label>
                <input
                  type="tel"
                  id="leaderPhone"
                  name="leaderPhone"
                  className={inputStyle}
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="college" className={labelStyle}>
                College / Organization
              </label>
              <input
                type="text"
                id="college"
                name="college"
                className={inputStyle}
                required
              />
            </div>
            <div>
              <label htmlFor="academicYear" className={labelStyle}>
                Academic Year
              </label>
              <select
                id="academicYear"
                name="academicYear"
                className={inputStyle}
                required
              >
                <option value="">Select an option</option>
                <option value="FE">First Year</option>
                <option value="SE">Second Year</option>
                <option value="TE">Third Year</option>
                <option value="BE">Final Year</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </fieldset>

          {/* Project & Track */}
          <fieldset className="space-y-6">
            <legend className="text-2xl font-bold text-primary mb-4">
              Hackathon Details
            </legend>
            <div>
              <label htmlFor="track" className={labelStyle}>
                Track Selection
              </label>
              <select id="track" name="track" className={inputStyle} required>
                <option value="">Select a track</option>
                <option value="Data Science">Track 1: Data Science</option>
                <option value="Web & AI">
                  Track 2A: Web & AI Applications
                </option>
              </select>
            </div>
            <div>
              <label htmlFor="projectIdea" className={labelStyle}>
                Project Idea (optional)
              </label>
              <textarea
                id="projectIdea"
                name="projectIdea"
                rows={4}
                className={inputStyle}
              ></textarea>
            </div>
            <div>
              <label htmlFor="github" className={labelStyle}>
                GitHub / Portfolio Link (optional)
              </label>
              <input
                type="url"
                id="github"
                name="github"
                placeholder="https://github.com/username"
                className={inputStyle}
              />
            </div>
          </fieldset>

          {/* File Upload & Consent */}
          <fieldset className="space-y-6">
            <legend className="text-2xl font-bold text-primary mb-4">
              Final Steps
            </legend>
            <div>
              <label htmlFor="pptUpload" className={labelStyle}>
                Upload PPT (optional)
              </label>
              <div className="relative border-2 border-dashed border-primary/50 rounded-lg p-6 text-center cursor-pointer hover:bg-primary/10 transition-colors">
                <FiUpload className="mx-auto h-12 w-12 text-primary/80" />
                <p className="mt-2 text-sm text-light-text/70">
                  Drag & drop or click to upload
                </p>
                <input
                  type="file"
                  id="pptUpload"
                  name="pptUpload"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  accept=".ppt, .pptx, .pdf"
                />
              </div>
            </div>
            <div className="flex items-start">
              <input
                type="checkbox"
                id="rules"
                name="rules"
                required
                className="mt-1 h-5 w-5 text-primary bg-dark-card border-primary/50 focus:ring-primary rounded"
              />
              <label htmlFor="rules" className="ml-3 text-light-text/80">
                I agree to the hackathon rules and code of conduct.
              </label>
            </div>
          </fieldset>

          <div className="text-center pt-4">
            <AnimatedButton
              type="submit"
              className="w-full md:w-auto px-12 py-4 text-xl"
            >
              Submit Registration
            </AnimatedButton>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default RegisterPage;
