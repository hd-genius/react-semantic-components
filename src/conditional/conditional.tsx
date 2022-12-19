import React, { useState } from "react";
import { FunctionComponent } from "react";
import { ConditionIdContext } from "./condition-id-context";
import {
  ConditionalContext,
  ConditionalContextValue,
} from "./conditional-context";

interface ConditonalProps {
  children?: any;
}

/**
 * the wrapper component that connects If, ElseIf, and Else components
 * @since 1.2.0
 */
export const Conditional: FunctionComponent<ConditonalProps> = ({
  children,
}) => {
  const [metConditions, setMetConditions] = useState([] as number[]);

  const addMetCondition = (conditionId: number) =>
    setMetConditions((conditions) => [...conditions, conditionId]);
  const removeMetCondition = (conditionId: number) =>
    setMetConditions((conditions) =>
      conditions.filter((id) => id !== conditionId)
    );

  const contextValue: ConditionalContextValue = {
    metConditions,
    addMetCondition,
    removeMetCondition,
  };

  const childrenToShow: any[] = children.length ? children : [children];

  return (
    <ConditionalContext.Provider value={contextValue}>
      {childrenToShow.map((child, index) => {
        return (
          <ConditionIdContext.Provider value={{ conditionId: index }}>
            {child}
          </ConditionIdContext.Provider>
        );
      })}
    </ConditionalContext.Provider>
  );
};
