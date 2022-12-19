import { FunctionComponent, useContext, useEffect } from "react";
import { ConditionIdContext } from "./condition-id-context";
import { ConditionalContext } from "./conditional-context";

interface ElseIfProps {
  condition: boolean;
  children?: any;
}

export const ElseIf: FunctionComponent<ElseIfProps> = ({
  condition,
  children,
}) => {
  const { conditionId } = useContext(ConditionIdContext);
  const { metConditions, addMetCondition, removeMetCondition } =
    useContext(ConditionalContext);

  useEffect(() => {
    if (condition) {
      addMetCondition(conditionId);
    } else {
      removeMetCondition(conditionId);
    }

    return () => removeMetCondition(conditionId);
  }, [condition, conditionId]);

  return condition && metConditions.every((id) => id >= conditionId)
    ? children
    : null;
};
