import React from "react";
import { FunctionComponent } from "react";
import { ConditionalContext } from "./conditional-context";

interface ConditonalProps {
    children: any,
}

export const Conditional: FunctionComponent<ConditonalProps> = ({ children }) => {
    const contextValue = {};
    return <ConditionalContext.Provider value={contextValue}>
        {children}
    </ConditionalContext.Provider>;
};
