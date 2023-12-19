import React, { FC, memo } from "react";
import { ConditionContainerProps } from "./ConditionContainer.types";

const ConditionContainer: FC<ConditionContainerProps> = ({
  active,
  children,
  alternative,
}) => {
  if (active) return children;
  return alternative || "";
};

export default memo(ConditionContainer);
