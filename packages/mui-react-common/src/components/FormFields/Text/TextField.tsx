import React from "react";
import {
  styled,
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from "@mui/material";
import { styledField, StyledFieldProps } from "../styledField";
import FormLabel, { useFormLabel } from "../FormLabel";

export type TextFieldProps = MuiTextFieldProps & StyledFieldProps;

//component base to fix a Dom attribute warning
const MuiTextFieldBase = ({ className, dark, ...props }: TextFieldProps) => {
  return <MuiTextField className={className} {...props} />;
};

export const MuiTextFieldDarkField =
  styled(MuiTextFieldBase)<TextFieldProps>(styledField);

const TextField = ({ dark, label, ...props }: TextFieldProps) => {
  const { label: inputLabel, formLabel } = useFormLabel(label, dark);

  return (
    <FormLabel label={formLabel} required={props.required}>
      <MuiTextFieldDarkField label={inputLabel} dark={dark} {...props} />
    </FormLabel>
  );
};

export default TextField;
