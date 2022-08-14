import { ReactComponentElement, useContext } from "react";
import { SwitchContext } from "./switch-context";

interface CaseProps {
    value: any,
    children: any,
}

export const Case = ({
    value,
    children,
}: CaseProps) => {
    const { value: switchValue } = useContext(SwitchContext);
    
    if (switchValue === value) {
        return children;
    } else {
        return null;
    }
};

interface DefaultCaseProps {
    children: any,
}

export const DefaultCase = ({
    children,
}: DefaultCaseProps) => {
    const { isCaseSatisfied } = useContext(SwitchContext);
    if (isCaseSatisfied) {
        return children;
    } else {
        return null;
    }
};
