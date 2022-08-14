import React from "react";
import { SwitchContext } from "./switch-context";

interface SwitchProps {
    value: any,
    children: any
}

export const Switch = ({
    value,
    children,
}: SwitchProps) => {
    const switchContext = {
        value,
        isCaseSatisfied: false,
    };
    return <SwitchContext.Provider value={switchContext}>
        {children}
    </SwitchContext.Provider>;
};
