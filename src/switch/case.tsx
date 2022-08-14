import { ReactComponentElement, useContext } from "react";
import { SwitchContext } from "./switch-context";

export const Case = ({
    value,
    children,
}) => {
    const { value: switchValue } = useContext(SwitchContext);
    
    if (switchValue === value) {
        return children;
    } else {
        return null;
    }
};

export const DefaultCase = ({
    children,
}) => {
    const { isCaseSatisfied } = useContext(SwitchContext);
    if (isCaseSatisfied) {
        return children;
    } else {
        return null;
    }
};
