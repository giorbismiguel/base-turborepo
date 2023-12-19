import React, { memo } from "react";
import { FormControlLabel, Switch } from "@mui/material";
import { SwitchFieldProps } from "./CheckFields.types";

const SwitchField = ({
  value,
  name,
  onChange,
  label,
  size,
  color,
  ...props
}: SwitchFieldProps) => {
  return (
    <FormControlLabel
      control={
        <Switch
          checked={value}
          onChange={onChange}
          name={name}
          size={size}
          color={color}
        />
      }
      label={label}
      {...props}
    />
  );
};

export default memo(SwitchField);
