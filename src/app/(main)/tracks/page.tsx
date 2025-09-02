"use client";

import { TRACK_1_PROBLEMS, TRACK_2_PROBLEMS } from "@/lib/data";
import { FaLink } from "react-icons/fa";
import { useBranch } from "@/context/BranchContext"; // <-- The correct import
import BranchSelector from "@/components/ui/BranchSelector"; // <-- The UI component

// --- Track 1 Component (No changes needed here) ---
const Track1 = () => (
  <div>
    <h2 className="text-3xl font-bold mb-2 text-secondary">
      Track 1: Implementing AIML in Agriculture
    </h2>
    <p className="text-light-text/70 mb-8">
      Specialized for Data Science students. Solve data-centric challenges in
      collaboration with ARI.
    </p>
    <div className="space-y-8">
      {TRACK_1_PROBLEMS.map((problem, index) => (
        <div
          key={index}
          className="p-6 bg-dark-card rounded-lg border border-secondary/30"
        >
          <h3 className="text-2xl font-bold text-secondary mb-3">
            {problem.title}
          </h3>
          <p className="text-light-text/80 mb-4">{problem.description}</p>
          <h4 className="font-bold text-lg mb-2 text-primary">
            Expected Outcomes:
          </h4>
          <ul className="list-disc list-inside space-y-1 mb-4 text-light-text/80">
            {problem.outcomes.map((outcome, i) => (
              <li key={i}>{outcome}</li>
            ))}
          </ul>
          {problem.datasets && problem.datasets.length > 0 && (
            <>
              <h4 className="font-bold text-lg mb-2 text-primary">Datasets:</h4>
              <div className="flex flex-wrap gap-4">
                {problem.datasets.map((link, i) => (
                  <a
                    href={link}
                    key={i}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:underline"
                  >
                    <FaLink /> Link {i + 1}
                  </a>
                ))}
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  </div>
);

// --- Track 2 Component (No changes needed here) ---
const Track2 = () => (
  <div>
    <h2 className="text-3xl font-bold mb-2 text-accent">
      Track 2: Agriculture 4.0: From Farm to Fork
    </h2>
    <p className="text-light-text/70 mb-8">
      For full-stack developers and AI enthusiasts. Build end-to-end
      applications that solve real-world agricultural problems.
    </p>
    <div className="space-y-8">
      {TRACK_2_PROBLEMS.map((problem, index) => (
        <div
          key={index}
          className="p-6 bg-dark-card rounded-lg border border-accent/30"
        >
          <h3 className="text-2xl font-bold text-accent mb-3">
            {problem.title}
          </h3>
          <p className="text-light-text/80 mb-4">{problem.description}</p>
          <h4 className="font-bold text-lg mb-2 text-primary">
            Expected Outcomes:
          </h4>
          <ul className="list-disc list-inside space-y-1 mb-4 text-light-text/80">
            {problem.outcomes.map((outcome, i) => (
              <li key={i}>{outcome}</li>
            ))}
          </ul>
          {problem.datasets && problem.datasets.length > 0 && (
            <>
              <h4 className="font-bold text-lg mb-2 text-primary">Datasets:</h4>
              <div className="flex flex-wrap gap-4">
                {problem.datasets.map((link, i) => (
                  <a
                    href={link}
                    key={i}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:underline"
                  >
                    <FaLink /> Link {i + 1}
                  </a>
                ))}
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  </div>
);

const TracksPage = () => {
  const { branch } = useBranch(); // <-- The correct hook to get the user's choice

  return (
    <div className="py-32 bg-dark-bg">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-4 text-primary">
          Hackathon Tracks
        </h1>
        <p className="text-center text-xl text-light-text/80 mb-16 max-w-3xl mx-auto">
          Dive deep into the problem statements. Choose the track that ignites
          your passion.
        </p>

        {/* This ensures the user can see and change their selection here too */}
        <BranchSelector />

        {/* This will now correctly render based on the saved choice */}
        {branch === "datascience" && <Track1 />}
        {branch === "other" && <Track2 />}
      </div>
    </div>
  );
};

export default TracksPage;
