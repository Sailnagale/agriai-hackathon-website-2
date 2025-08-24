// src/app/(main)/contact/page.tsx
"use client";

import AnimatedButton from "@/components/ui/AnimatedButton";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const ContactPage = () => {
  const socialLinks = [
    { icon: FaTwitter, href: "#" },
    { icon: FaLinkedin, href: "#" },
    { icon: FaGithub, href: "#" },
    { icon: FaInstagram, href: "#" },
  ];
  const inputStyle =
    "w-full bg-dark-card border border-primary/30 rounded-md p-3 focus:ring-2 focus:ring-primary focus:outline-none transition-all placeholder-light-text/40";
  const labelStyle = "block text-light-text/80 mb-2 font-semibold";

  return (
    <div className="py-32 bg-dark-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold text-center mb-4 text-primary">
            Get In Touch
          </h1>
          <p className="text-center text-xl text-light-text/80 mb-16 max-w-2xl mx-auto">
            Have questions? We're here to help. Reach out to us or visit the
            venue.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Contact Details & Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="p-6 bg-dark-card rounded-lg border border-primary/20">
              <h3 className="text-2xl font-bold mb-6 text-secondary">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <FiMail className="h-6 w-6 text-primary" />{" "}
                  <span>contact@agriai.hackathon</span>
                </div>
                <div className="flex items-center gap-4">
                  <FiPhone className="h-6 w-6 text-primary" />{" "}
                  <span>+91 12345 67890</span>
                </div>
                <div className="flex items-center gap-4">
                  <FiMapPin className="h-6 w-6 text-primary" />{" "}
                  <span>VIT Pune Campus, Maharashtra, India</span>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-primary/20 flex justify-center space-x-6">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-light-text/70 hover:text-primary transition-colors"
                  >
                    <link.icon size={28} />
                  </a>
                ))}
              </div>
            </div>
            <div className="rounded-lg overflow-hidden border-2 border-primary/30">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.585573424168!2d73.8385786759247!3d18.49965908259013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf065c6b9869%3A0x14044719c822765d!2sVishwakarma%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1724473489123!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="filter grayscale-[80%] invert-[100%]"
              ></iframe>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="p-8 bg-dark-card rounded-lg border border-primary/20"
          >
            <h3 className="text-2xl font-bold mb-6 text-secondary">
              Send us a Message
            </h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className={labelStyle}>
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={inputStyle}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className={labelStyle}>
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={inputStyle}
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className={labelStyle}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className={inputStyle}
                  required
                ></textarea>
              </div>
              <AnimatedButton type="submit" className="w-full py-3">
                Send Message
              </AnimatedButton>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
