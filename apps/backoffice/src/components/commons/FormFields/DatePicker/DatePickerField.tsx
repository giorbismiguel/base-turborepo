//@ts-nocheck
import React, {memo, ReactNode} from "react";
import FormLabel, {useFormLabel} from "../FormLabel";
import {StyledFieldProps} from "../styledField";
import {DatePicker, DatePickerProps} from "@mui/x-date-pickers";
import {MuiTextFieldDarkField} from "../Text/TextField";

export type DatePickerFieldProps = Omit<DatePickerProps, 'renderInput'> & StyledFieldProps & {
    size?: 'small' | 'medium',
    error?: boolean,
    required?: boolean,
    helperText?: ReactNode,
};

const DatePickerField = ({label, dark, size, error, helperText, ...props}: DatePickerFieldProps) => {
    const {label: inputLabel, formLabel} = useFormLabel(label, dark);
    return (
        <FormLabel label={formLabel} required={props.required}>
            <DatePicker label={inputLabel}
                        {...props}
                        renderInput={(params) => <MuiTextFieldDarkField
                            dark={dark} {...params} size={size}
                            error={error}
                            helperText={helperText}
                            fullWidth/>}/>
        </FormLabel>
    );
};

export default memo(DatePickerField);
