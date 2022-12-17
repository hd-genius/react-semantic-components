import { useContext } from "react";
import { SwitchContext } from "./switch-context";

interface DefaultCaseProps {
    children: any;
}

export const DefaultCase = ({ children }: DefaultCaseProps) => {
    const { satisfiedCases } = useContext(SwitchContext);
    const isCaseSatisfied = satisfiedCases.length > 0;
    return isCaseSatisfied ? null : children;
};
