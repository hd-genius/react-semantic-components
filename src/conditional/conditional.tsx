import React, { useState } from "react";
import { FunctionComponent } from "react";
import { ConditionalContext, ConditionalContextValue } from "./conditional-context";

interface ConditonalProps {
    children: any,
}

export const Conditional: FunctionComponent<ConditonalProps> = ({ children }) => {
    const [isConditionMet, setIsCondtionMet] = useState(true);
    const contextValue: ConditionalContextValue = {
        isConditionMet,
        setIsCondtionMet,
    };
    return <ConditionalContext.Provider value={contextValue}>
        {children}
    </ConditionalContext.Provider>;
};
