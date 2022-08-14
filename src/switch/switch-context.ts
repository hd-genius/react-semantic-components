import React from "react";

export interface SwitchContextValue {
  value: any;
  satisfiedCases: string[];
  addSatisfiedCase: (caseId: string) => void;
  removeSatisfiedCase: (caseId: string) => void;
}

export const SwitchContext = React.createContext({
  value: null,
  satisfiedCases: [],
  addSatisfiedCase: () => {},
  removeSatisfiedCase: () => {},
} as SwitchContextValue);
