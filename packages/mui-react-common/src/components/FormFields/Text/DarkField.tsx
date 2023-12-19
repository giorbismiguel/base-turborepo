import React from "react";
import { styled, TextFieldProps, Theme } from "@mui/material";
import { H6 } from "../../Typography";
import FormFieldControl, { FormFieldControlProps } from "../FormFieldControl";

const styleFun = ({ theme }: { theme: Theme }) => ({
  "&:hover, & .MuiOutlinedInput-root:hover": {
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.primary.main,
    },
  },
  "& .MuiOutlinedInput-input": {
    fontSize: 12,
    minHeight: 20,
    fontWeight: 500,
    color: theme.palette.text.primary,
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "transparent",
    borderWidth: "1px !important",
  },
  "& .MuiInputBase-root": {
    backgroundColor:
      theme.palette.mode === "light" ? "#e5eaf2" : theme.palette.divider,
  },
});
const createDarkComponentField = (component: any) => {
  const StyledDarkField = styled(component)(styleFun);
  const DarkField = ({ label, ...props }: TextFieldProps) => {
    return (
      <React.Fragment>
        <H6 mb={1} mt={0}>
          {label}
        </H6>
        <StyledDarkField {...props} />
      </React.Fragment>
    );
  };
  const FormDarkField = (props: FormFieldControlProps & TextFieldProps) => {
    return <FormFieldControl {...props} Component={DarkField} />;
  };

  return {
    DarkField,
    FormDarkField,
  };
};

export default createDarkComponentField;
