import React, {memo} from "react";
import {InputAdornment} from "@mui/material";
import TextField from "./TextField";
import SearchIcon from '@mui/icons-material/Search';
import {PasswordFieldProps} from "./text.types";

const iconSetting = (
    <InputAdornment position="start">
        <SearchIcon/>
    </InputAdornment>
);


const SearchField = ({hideIcon, ...props}: PasswordFieldProps) => {
    return (
        <TextField
            {...props}
            type={"search"}
            InputProps={{
                startAdornment: !hideIcon && iconSetting,
            }}
        />
    );
};

export default memo(SearchField);
