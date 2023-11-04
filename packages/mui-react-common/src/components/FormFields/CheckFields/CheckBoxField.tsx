import React, {FC, memo} from "react";
import {FormControlLabel, Checkbox} from "@mui/material";
import {CheckBoxFieldProps} from "./CheckFields.types";

const CheckBoxField: FC<CheckBoxFieldProps> = ({value, label, ...rest}) => {
    return (
        <FormControlLabel
            control={<Checkbox checked={value} {...rest} />}
            label={label}
        />
    );
};

export default memo(CheckBoxField);
