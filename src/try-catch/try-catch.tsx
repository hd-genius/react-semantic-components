import React, { FunctionComponent, useState } from "react";
import { TryCatchContext } from "./try-catch-context";

interface TryCatchProps {
  children: any;
}

/**
 * a wrapper that enables a Try instance and a Catch instance
 */
export const TryCatch: FunctionComponent<TryCatchProps> = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  const contextValue = {
    hasError,
    setHasError,
  };

  return (
    <TryCatchContext.Provider value={contextValue}>
      {children}
    </TryCatchContext.Provider>
  );
};
