import React, { FC, memo } from "react";
import FormFieldControl, { FormFieldControlProps } from "../FormFieldControl";
import { TextFieldProps } from "@mui/material";
import SearchField from "./SearchField";

const FormTextField: FC<FormFieldControlProps & TextFieldProps> = (props) => {
  return <FormFieldControl {...props} Component={SearchField} />;
};

export default memo(FormTextField);
