import React, {memo} from "react";
import FormFieldControl, {FormFieldControlProps} from "../FormFieldControl";
import SelectField from "./SelectField";
import {SelectFieldProps} from "./SelectField.types";

const FormSelectField = (props: FormFieldControlProps & SelectFieldProps) => {
    return <FormFieldControl {...props} Component={SelectField}/>;
};

export default memo(FormSelectField);
