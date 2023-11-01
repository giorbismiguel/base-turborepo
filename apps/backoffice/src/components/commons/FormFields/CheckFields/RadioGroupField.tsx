import React, {memo} from "react";
import {RadioGroup, RadioGroupProps} from "@mui/material";

export type RadioGroupFieldProps = Omit<RadioGroupProps, 'onChange'> & {
    helperText?: any,//it just to ignore it
    inputRef?: any,//it just to ignore it
    error?: any,//it just to ignore it
    inputProps?: any,//it just to ignore it
    fullWidth?: any,//it just to ignore it
}

const RadioGroupField = ({
                             helperText,
                             inputRef,
                             error,
                             fullWidth,
                             inputProps,
                             ...props
                         }: RadioGroupFieldProps) => {
    return <RadioGroup {...props}/>;
};

export default memo(RadioGroupField);