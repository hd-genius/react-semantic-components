import React, { useState } from "react";
import { FunctionComponent } from "react";
import {
  ConditionalContext,
  ConditionalContextValue,
} from "./conditional-context";

interface ConditonalProps {
  children: any;
}

/**
 * the wrapper component that connects If, ElseIf, and Else components
 * @since 1.2.0
 */
export const Conditional: FunctionComponent<ConditonalProps> = ({
  children,
}) => {
  const [isConditionMet, setIsCondtionMet] = useState(true);
  const contextValue: ConditionalContextValue = {
    isConditionMet,
    setIsCondtionMet,
  };
  return (
    <ConditionalContext.Provider value={contextValue}>
      {children}
    </ConditionalContext.Provider>
  );
};
