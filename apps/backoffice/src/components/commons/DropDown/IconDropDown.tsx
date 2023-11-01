import React, {ReactNode} from "react";
import {ButtonProps} from '@mui/material/Button';
import DropDownBase, {DropDownBaseProps} from "./DropDownBase";
import {IconButton, Tooltip} from "@mui/material";

export type DropDownProps = Omit<DropDownBaseProps,'button'> & {
    tooltip: string,
    buttonProps?: ButtonProps
    icon: ReactNode
}


const IconDropDown = ({
                          tooltip,
                          buttonProps,
                          icon,
                          ...props
                      }: DropDownProps) => {

    return (
        <DropDownBase {...props} button={
            <Tooltip title={tooltip}>
                <IconButton
                    {...buttonProps}
                >
                    {icon}
                </IconButton>
            </Tooltip>
        }/>
    );
}


export default IconDropDown;