import { Context, createContext } from "react";

export interface ConditionalContextValue {
  metConditions: number[];
  addMetCondition: (conditionId: number) => void;
  removeMetCondition: (conditionId: number) => void;
}

export const ConditionalContext: Context<ConditionalContextValue> =
  createContext({
    metConditions: [],
    addMetCondition: (conditionId: number) => {},
    removeMetCondition: (conditionId: number) => {},
  } as ConditionalContextValue);
