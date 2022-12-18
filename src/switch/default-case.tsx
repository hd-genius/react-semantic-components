import { useContext } from "react";
import { SwitchContext } from "./switch-context";
import PropTypes from "prop-types";

interface DefaultCaseProps {
    children: any;
}

/**
 * The case that is shown when no other case is used
 */
export const DefaultCase = ({ children }: DefaultCaseProps) => {
    const { satisfiedCases } = useContext(SwitchContext);
    const isCaseSatisfied = satisfiedCases.length > 0;
    return isCaseSatisfied ? null : children;
};

DefaultCase.propTypes = {
    /** the content to show */
    children: PropTypes.any,
};
