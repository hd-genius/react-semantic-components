import { FunctionComponent, useContext } from "react";
import { TryCatchContext } from "./try-catch-context";

interface CatchProps {
  /** the content to show when an error is encountered */
  children: any;
}

/**
 * g
 */
export const Catch: FunctionComponent<CatchProps> = ({ children }) => {
  const { hasError } = useContext(TryCatchContext);
  return hasError ? children : null;
};
