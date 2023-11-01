import React, {memo} from "react";
import FormFieldControl, {FormFieldControlProps} from "../FormFieldControl";
import PasswordField from "./PasswordField";
import {PasswordFieldProps} from "./text.types";

const FormTextField= (props:FormFieldControlProps & PasswordFieldProps) => {
  return <FormFieldControl {...props} Component={PasswordField} />;
};

export default memo(FormTextField);
