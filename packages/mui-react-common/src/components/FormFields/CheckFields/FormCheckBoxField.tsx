import React, { memo } from "react";
import FormFieldControl from "./FormCheckFieldControl";
import CheckBoxField from "./CheckBoxField";
import { FormCheckFieldProps } from "./CheckFields.types";

const FormCheckBoxField = (props: FormCheckFieldProps) => {
  return <FormFieldControl {...props} Component={CheckBoxField} />;
};

export default memo(FormCheckBoxField);
