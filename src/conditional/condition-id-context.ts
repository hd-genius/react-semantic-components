import { Context, createContext } from "react";

export interface ConditionIdContextValue {
  conditionId: number;
}

export const ConditionIdContext: Context<ConditionIdContextValue> =
  createContext({
    conditionId: 0,
  } as ConditionIdContextValue);
