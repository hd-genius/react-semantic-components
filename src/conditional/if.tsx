import React from "react";

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
  return condition ? <>{children}</> : null;
};
