import { createContext } from "react";

interface TryCatchContextValue {
    setHasError: (hasError: boolean) => void,
    hasError: boolean,
}

export const TryCatchContext = createContext<TryCatchContextValue>({
    setHasError: () => {},
    hasError: false,
});