import { FunctionComponent, useContext } from "react"
import { ConditionalContext } from "./conditional-context"

interface ElseProps {
    children: any,
}

export const Else: FunctionComponent<ElseProps> = ({ children }) => {
    const { isConditionMet } = useContext(ConditionalContext);
    return isConditionMet ? null : children;
}