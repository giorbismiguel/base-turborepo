import React, { memo } from "react";
import FormFieldControl from "./FormCheckFieldControl";
import RadioField from "./RadioField";
import { FormRadioFieldProps } from "./CheckFields.types";

const FormRadioField = (props: FormRadioFieldProps) => {
  return <FormFieldControl {...props} Component={RadioField} />;
};

export default memo(FormRadioField);
