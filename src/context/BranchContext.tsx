"use client";

import {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";

type BranchContextType = {
  branch: string | null;
  setBranch: (branch: string | null) => void;
};

// Create the context with a default value
const BranchContext = createContext<BranchContextType | undefined>(undefined);

// Create the provider component
export const BranchProvider = ({ children }: { children: ReactNode }) => {
  const [branch, setBranchState] = useState<string | null>(null);

  // On initial load, try to get the branch from local storage
  useEffect(() => {
    const savedBranch = localStorage.getItem("studentBranch");
    if (savedBranch) {
      setBranchState(savedBranch);
    }
  }, []);

  // Function to update state and local storage
  const setBranch = (newBranch: string | null) => {
    setBranchState(newBranch);
    if (newBranch) {
      localStorage.setItem("studentBranch", newBranch);
    } else {
      localStorage.removeItem("studentBranch");
    }
  };

  return (
    <BranchContext.Provider value={{ branch, setBranch }}>
      {children}
    </BranchContext.Provider>
  );
};

// Create a custom hook to easily use the context
export const useBranch = () => {
  const context = useContext(BranchContext);
  if (context === undefined) {
    throw new Error("useBranch must be used within a BranchProvider");
  }
  return context;
};
