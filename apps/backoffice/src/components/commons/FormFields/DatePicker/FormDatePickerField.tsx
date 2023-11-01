import React, {FC, memo} from "react";
import FormFieldControl, {FormFieldControlProps} from "../FormFieldControl";
import DatePickerField, {DatePickerFieldProps} from "./DatePickerField";

type FormDatePickerFieldProps = FormFieldControlProps & Omit<DatePickerFieldProps, 'onChange' | 'value'>

const FormDatePickerField = (props: FormDatePickerFieldProps) => {
    return <FormFieldControl {...props} Component={DatePickerField}/>;
};

export default memo(FormDatePickerField);
