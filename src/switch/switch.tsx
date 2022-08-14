import React, { useState } from "react";
import { SwitchContext } from "./switch-context";

interface SwitchProps {
    value: any,
    children: any
}

export const Switch = ({
    value,
    children,
}: SwitchProps) => {
    const [satisfiedCases, setSatisfiedCases] = useState([] as string[]);

    const addSatisfiedCase = (id: string) => setSatisfiedCases([...satisfiedCases, id]);
    const removeSatisfiedCase = (id: string) => setSatisfiedCases(satisfiedCases.filter(x => x !== id));
    const switchContext = {
        value,
        satisfiedCases,
        addSatisfiedCase,
        removeSatisfiedCase,
    };

    return <SwitchContext.Provider value={switchContext}>
        {children}
    </SwitchContext.Provider>;
};
