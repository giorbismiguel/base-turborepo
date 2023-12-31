import React, { memo, useCallback, MouseEvent } from "react";
import MuiToggleButtonGroup, {
  ToggleButtonGroupProps as MuiToggleButtonGroupProps,
} from "@mui/material/ToggleButtonGroup";

export type ToggleButtonGroupProps = Omit<
  MuiToggleButtonGroupProps,
  "onChange"
> & {
  onChange: any;
  helperText?: any; //it just to ignore it
  inputRef?: any; //it just to ignore it
  error?: any; //it just to ignore it
  inputProps?: any; //it just to ignore it
};

const ToggleButtonGroup = ({
  value,
  onChange,
  helperText,
  inputRef,
  error,
  inputProps,
  ...props
}: ToggleButtonGroupProps) => {
  const handleChange = useCallback(
    (_event: MouseEvent<HTMLElement>, newValue: string | null) => {
      onChange?.({ target: { value: newValue } });
    },
    [onChange]
  );

  return (
    <MuiToggleButtonGroup value={value} onChange={handleChange} {...props} />
  );
};

export default memo(ToggleButtonGroup);
