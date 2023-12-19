import React, { memo } from "react";
import FormFieldControl, { FormFieldControlProps } from "../FormFieldControl";
import ToggleButtonGroup, { ToggleButtonGroupProps } from "./ToggleButtonGroup";

const FormToggleButtonGroup = (
  props: FormFieldControlProps & Omit<ToggleButtonGroupProps, "onChange">
) => {
  return <FormFieldControl {...props} Component={ToggleButtonGroup} />;
};

export default memo(FormToggleButtonGroup);
