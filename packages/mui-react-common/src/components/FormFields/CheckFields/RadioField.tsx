import React, { memo} from "react";
import {FormControlLabel, Radio} from "@mui/material";
import {RadioFieldProps} from "./CheckFields.types";

const RadioField = ({label, onChange, value, checkValue, ...rest}: RadioFieldProps) => {
    return (
        <FormControlLabel
            control={
                <Radio
                    value={checkValue}
                    checked={checkValue === value}
                    onChange={onChange}
                    {...rest}
                />
            }
            label={label}
        />
    );
};

export default memo(RadioField);
