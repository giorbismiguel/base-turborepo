import {FormControl, InputLabel, Select, styled} from "@mui/material";
import React, {memo, ReactNode} from "react";
import {SelectFieldProps} from "./SelectField.types";
import FormHelperText from '@mui/material/FormHelperText';
import {styledField} from "../styledField";
import FormLabel, {useFormLabel} from "../FormLabel";

const scapeId = (label?: ReactNode | null) => {
    return typeof label === 'string' ? (label.replace(/ /g, '-') || '') : '';
}
const SelectDarkField = styled(Select)<SelectFieldProps>(styledField);

const SelectField = ({labelId, label, id, helperText, error, size, dark, ...rest}: SelectFieldProps) => {
    const idSelect = id || scapeId(label);
    const idLabel = labelId || idSelect + '-label';
    const {label: inputLabel, formLabel} = useFormLabel(label, dark);

    return (
        <FormLabel label={formLabel} required={rest.required}>
            <FormControl fullWidth error={error} size={size}>
                {inputLabel && <InputLabel id={idLabel}>{inputLabel}</InputLabel>}
                <SelectDarkField
                    variant={'outlined'}
                    dark={dark}
                    labelId={idLabel}
                    id={idSelect}
                    label={inputLabel}
                    {...rest}
                />
                {helperText && <FormHelperText>{helperText}</FormHelperText>}
            </FormControl>
        </FormLabel>
    );
};

export default memo(SelectField);
