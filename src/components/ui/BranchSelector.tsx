"use client";

import { useBranch } from "@/context/BranchContext";
import AnimatedButton from "./AnimatedButton";

const BranchSelector = () => {
  const { branch, setBranch } = useBranch();

  // If a branch is already selected, show a message with a clear reset option.
  if (branch) {
    return (
      <div className="text-center p-4 bg-dark-card border border-primary/20 rounded-lg mb-12">
        <p className="text-light-text/80">
          You are currently viewing tracks for:{" "}
          <strong className="text-primary">
            {branch === "datascience" ? "CS (Data Science)" : "Other Branches"}
          </strong>
        </p>

        {/* THIS IS THE UPDATED RESET BUTTON */}
        <button
          onClick={() => setBranch(null)} // Calling setBranch(null) clears the selection
          className="text-sm font-semibold text-secondary hover:underline mt-2 transition-colors"
        >
          &larr; Choose a different branch
        </button>
      </div>
    );
  }

  // If no branch is selected, show the initial selection buttons.
  return (
    <div className="text-center p-8 bg-dark-card border border-primary/20 rounded-lg mb-12">
      <h3 className="text-2xl font-bold text-primary mb-4">
        Please Select Your Branch to View Tracks
      </h3>
      <div className="flex justify-center gap-4">
        <AnimatedButton
          onClick={() => setBranch("datascience")}
          className="bg-secondary border-secondary"
        >
          CS (Data Science)
        </AnimatedButton>
        <AnimatedButton
          onClick={() => setBranch("other")}
          className="bg-accent border-accent"
        >
          Other Branches
        </AnimatedButton>
      </div>
    </div>
  );
};

export default BranchSelector;
