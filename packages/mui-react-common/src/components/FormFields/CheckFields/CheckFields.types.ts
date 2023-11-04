import {FormFieldControlProps} from "../FormFieldControl";
import {FormControlLabelProps, SwitchProps} from "@mui/material";

export type SwitchFieldProps = Omit<SwitchProps, 'checkedIcon'> & Omit<FormControlLabelProps, 'control'> & {
    label?: any;
    value?: boolean;
}

export type RadioFieldProps = {
    label?: string;
    value?: boolean;
    checkValue?: any;
    onChange?: (event?: any) => void;
};

export type FormSwitchFieldProps = SwitchFieldProps & FormFieldControlProps

export type CheckBoxFieldProps = {
    label?: any;
    sx?: any;
    value?: boolean;
    onChange?: (event?: any) => void;
    checked?: boolean;
};

export type FormCheckFieldProps = FormFieldControlProps & CheckBoxFieldProps;

export type FormRadioFieldProps = FormFieldControlProps & RadioFieldProps;
