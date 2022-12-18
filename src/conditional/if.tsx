import React, { useContext, useEffect } from "react";
import { ConditionalContext } from "./conditional-context";

interface IfProps {
  /** whether or not the contents should be shown */
  condition: boolean;
  /** the content to show */
  children: any;
}

/**
 * A component that conditionally shows or hides its content
 */
export const If = ({ condition, children }: IfProps) => {
  const { setIsCondtionMet } = useContext(ConditionalContext);

  useEffect(() => {
    setIsCondtionMet(condition);
  }, [condition]);

  return condition ? <>{children}</> : null;
};
