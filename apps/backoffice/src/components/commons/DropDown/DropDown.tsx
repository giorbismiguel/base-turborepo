import React, {ReactNode} from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {LoadingButton} from "@mui/lab";
import DropDownBase, {DropDownBaseProps} from "./DropDownBase";
import {LoadingButtonProps} from "@mui/lab/LoadingButton";

export type DropDownProps = Omit<DropDownBaseProps,'button'> & {
    label: ReactNode,
    variant?: 'text' | 'outlined' | 'contained'
    buttonProps?: LoadingButtonProps
}


const DropDown = ({
                      label,
                      variant = 'contained',
                      buttonProps,
                      ...props
                  }: DropDownProps) => {

    return (
        <DropDownBase {...props} button={
            <LoadingButton
                disableElevation
                variant={variant}
                endIcon={<KeyboardArrowDownIcon/>}
                {...buttonProps}
            >
                <span>{label}</span>
            </LoadingButton>
        }/>
    );
}


export default DropDown;