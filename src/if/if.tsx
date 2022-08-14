import React from "react";

interface IfProps {
  condition: boolean;
  children: any;
}

export const If = ({ condition, children }: IfProps) => {
  return condition ? <>{children}</> : null;
};
