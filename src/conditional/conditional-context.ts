import { Context, createContext } from "react";

export interface ConditionalContextValue {
  isConditionMet: boolean;
  setIsCondtionMet: (isMet: boolean) => void;
}

export const ConditionalContext: Context<ConditionalContextValue> =
  createContext({
    isConditionMet: true,
    setIsCondtionMet: () => {},
  } as ConditionalContextValue);
