import {SelectProps} from "@mui/material";
import {StyledFieldProps} from "../styledField";
import {ReactNode} from "react";

export type SelectFieldProps = StyledFieldProps & SelectProps & {
    labelId?: string;
    helperText?: string;
    error?: boolean;
    label?: ReactNode | null;
}
