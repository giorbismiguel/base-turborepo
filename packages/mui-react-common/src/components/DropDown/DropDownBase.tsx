import React, {ReactNode, useCallback, useMemo, useState} from "react";
import {ButtonProps} from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Box from "@mui/material/Box";
import {BoxProps} from "@mui/material";
import {LoadingButton} from "@mui/lab";

export type DropDownBaseProps = BoxProps & {
    id?: string
    menuProps?: any
    open?: boolean
    onOpen?: () => void
    onClose?: () => void
    button: ReactNode
}


const DropDownBase = ({
                      id,
                      children,
                      className = '',
                      menuProps,
                      open,
                      onOpen,
                      onClose,
                      button,
                      ...props
                  }: DropDownBaseProps) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const {menuID, controls} = useMemo(() => {
        const menuID = id || 'menuid' + new Date().getTime() + Math.random();
        const controls = menuID + 'controls';
        return {
            menuID,
            controls
        }
    }, [id])

    const handleClick = useCallback((event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
        onOpen?.()
    }, [onOpen]);

    return (
        <Box {...props}>
            <div
                className={'Mui-DropDown ' + className}
                id={menuID}
                aria-controls={open ? controls : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                {button}
            </div>
            <Menu
                id={controls}
                MenuListProps={{
                    'aria-labelledby': menuID,
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={onClose}
                {...menuProps}
            >
                {
                    children
                }
            </Menu>
        </Box>
    );
}


export default DropDownBase;