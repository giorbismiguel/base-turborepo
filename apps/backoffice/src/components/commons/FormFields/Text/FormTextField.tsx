import React, {FC, memo} from "react";
import FormFieldControl, {FormFieldControlProps} from "../FormFieldControl";
import TextField, {TextFieldProps} from "./TextField";
import createDarkComponentField from "./DarkField";

export type FormTextFieldProps = FormFieldControlProps & TextFieldProps;

const FormTextField: FC<FormTextFieldProps> = (props) => {
    return <FormFieldControl {...props} Component={TextField}/>;
};

export const {DarkField: DarkTextField, FormDarkField: FormDarkTextField} = createDarkComponentField(TextField);

export default memo(FormTextField);

