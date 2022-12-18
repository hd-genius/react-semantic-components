import { createContext } from "react";

export interface TryCatchContextValue {
  setHasError: (hasError: boolean) => void;
  hasError: boolean;
}

export const TryCatchContext = createContext<TryCatchContextValue>({
  setHasError: () => {},
  hasError: false,
});
