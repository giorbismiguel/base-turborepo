import React, {memo} from "react";
import FormFieldControl, {FormFieldControlProps} from "../FormFieldControl";
import RadioGroupField, {RadioGroupFieldProps} from "./RadioGroupField";


const FormRadioGroupField = (props: FormFieldControlProps & Omit<RadioGroupFieldProps, 'onChange'>) => {
    return <FormFieldControl {...props} Component={RadioGroupField}/>;
};

export default memo(FormRadioGroupField);
