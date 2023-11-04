import React, {FC, memo} from "react";
import FormFieldControl from "./FormCheckFieldControl";
import SwitchField from "./SwitchField";
import {FormSwitchFieldProps} from "./CheckFields.types";

const FormSwitchField = (props: FormSwitchFieldProps) => {
  return <FormFieldControl {...props} Component={SwitchField} />;
};

export default memo(FormSwitchField);
