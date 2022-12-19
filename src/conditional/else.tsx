import { FunctionComponent, useContext } from "react";
import { ConditionalContext } from "./conditional-context";

interface ElseProps {
  children?: any;
}

/**
 * the component that is rendered when all If and ElseIf conditions are false
 * @since 1.2.0
 */
export const Else: FunctionComponent<ElseProps> = ({ children }) => {
  const { metConditions } = useContext(ConditionalContext);
  return metConditions.length === 0 ? children : null;
};
