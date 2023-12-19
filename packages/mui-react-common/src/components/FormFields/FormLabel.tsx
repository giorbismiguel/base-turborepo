import React, { memo, ReactNode } from "react";
import { H6 } from "../Typography";
import { ChildrenProps } from "../../types";
import { styled } from "@mui/material";

type FormLabelProps = ChildrenProps & {
  label?: ReactNode | null;
  required?: boolean;
};

export const Label = styled(H6)<{ required?: boolean }>(({ required }) => {
  return required
    ? {
        "&:after": {
          content: "'*'",
          marginTop: "-3px",
        },
      }
    : {};
});

const FormLabel = ({ children, label, required }: FormLabelProps) => {
  return (
    <React.Fragment>
      {label && (
        <Label mb={1} mt={0} required={required} className={"DFL-FormLabel"}>
          {label}
        </Label>
      )}
      {children}
    </React.Fragment>
  );
};

export default memo(FormLabel);

export const useFormLabel = (
  label: ReactNode | null | undefined,
  dark: boolean | null | undefined
) => ({
  label: dark ? "" : label,
  formLabel: dark ? label : "",
});
