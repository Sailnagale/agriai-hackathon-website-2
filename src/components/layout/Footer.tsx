// src/components/layout/Footer.tsx
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  const socialLinks = [
    { icon: FaTwitter, href: "#" },
    { icon: FaLinkedin, href: "#" },
    { icon: FaGithub, href: "#" },
    { icon: FaInstagram, href: "#" },
  ];

  return (
    <footer className="bg-dark-card border-t border-primary/20 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-3xl font-bold text-primary mb-4 font-mono">
          AgriAi Hackathon 2025
        </h3>
        <p className="max-w-md mx-auto text-light-text/80 mb-8">
          Where Young Minds Cultivate Future Farms
        </p>
        <div className="flex justify-center space-x-6 mb-8">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-text/80 hover:text-primary transition-colors duration-300"
            >
              <link.icon size={24} />
            </a>
          ))}
        </div>
        <p className="text-light-text/60">
          &copy; {new Date().getFullYear()} AgriAi Hackathon. All rights
          reserved. Organized at VIT Pune.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
