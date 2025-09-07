// src/components/sections/Contact.tsx
import { FiPhone, FiUser } from "react-icons/fi";

const coordinators = [
  { name: "Pranav Anarase", phone: "7499003474" },
  { name: "Tanisha Mandavia", phone: "9819485076" },
  { name: "Tejas", phone: "9209044053" },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-dark-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-poppins font-bold text-white">
            Have <span className="text-gradient">Questions?</span>
          </h2>
          <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
            For any queries regarding the event, feel free to reach out to our
            student coordinators.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {coordinators.map((coordinator, index) => (
            <div
              key={coordinator.name}
              className="p-6 bg-dark-card rounded-lg border border-primary/20 text-center"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="text-primary inline-block mb-4">
                <FiUser size={40} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {coordinator.name}
              </h3>
              <a
                href={`tel:+91${coordinator.phone}`}
                className="inline-flex items-center gap-2 text-secondary hover:underline"
              >
                <FiPhone size={16} />
                +91 {coordinator.phone}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
