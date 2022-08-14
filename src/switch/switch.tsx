import React from "react";
import { SwitchContext } from "./switch-context";

interface SwitchProps {
    children: any
}

export const Switch = ({
    children
}: SwitchProps) => {
    const switchContext = {
        value: null,
        isCaseSatisfied: false,
    };
    return <SwitchContext.Provider value={switchContext}>
        {children}
    </SwitchContext.Provider>;
};
