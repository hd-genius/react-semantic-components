import React from "react";

export interface SwitchContextValue {
    value: any,
    isCaseSatisfied: boolean,
}

export const SwitchContext = React.createContext({
    value: null,
    isCaseSatisfied: false,
} as SwitchContextValue);
