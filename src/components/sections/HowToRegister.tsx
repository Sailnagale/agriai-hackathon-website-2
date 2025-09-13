// src/components/sections/HowToRegister.tsx

import Link from "next/link";

const HowToRegister = () => {
  const steps = [
    <>
      Login on the VIERP Portal using your PRN No. as both login and password:{" "}
      <Link
        href="https://learner.vierp.in"
        target="_blank"
        rel="noopener noreferrer"
        className="text-secondary font-semibold hover:underline"
      >
        https://learner.vierp.in
      </Link>
    </>,
    "Click on the 'Event' tab.",
    "Select the Organising Institute as VIT not VIIT.",
    "Select the AgriAI Hackathon Event from the list.",
    "Click on 'Pay fees'.",
    "Select the Payment Gateway “PAYTM” and proceed for payment.",
  ];

  return (
    <section id="how-to-register" className="py-20 lg:py-32 bg-dark-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-poppins font-bold text-white">
            How to <span className="text-gradient">Register</span>
          </h2>
          <p className="text-gray-400 mt-2">
            Follow these steps to secure your spot in the hackathon.
          </p>
        </div>

        <div
          className="max-w-3xl mx-auto bg-dark-card border border-primary/20 rounded-lg p-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h3 className="text-2xl font-bold text-white mb-6">
            For VIT Students / Participants:
          </h3>
          <ol className="relative border-l border-gray-700 space-y-8">
            {steps.map((step, index) => (
              <li key={index} className="ml-8">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-secondary rounded-full -left-4 ring-8 ring-dark-card text-white font-bold">
                  {index + 1}
                </span>
                <p className="text-light-text/90">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default HowToRegister;
