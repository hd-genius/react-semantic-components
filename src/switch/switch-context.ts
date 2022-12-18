import { createContext } from "react";

export interface SwitchContextValue {
  value: any;
  satisfiedCases: string[];
  addSatisfiedCase: (caseId: string) => void;
  removeSatisfiedCase: (caseId: string) => void;
}

export const SwitchContext = createContext<SwitchContextValue>({
  value: null,
  satisfiedCases: [],
  addSatisfiedCase: () => {},
  removeSatisfiedCase: () => {},
});
