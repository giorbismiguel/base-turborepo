import React, {memo} from 'react'
import {
    IconButton,
    Tooltip,
} from "@mui/material";

type RowActionsProps = {
    tooltip?: string
    disabled?: boolean
    color?: "inherit" | "default" | "primary" | "secondary" | "error" | "info" | "success" | "warning"
    onClick?: () => any
    icon?: any
}

const RowActions = ({onClick, tooltip = 'edit', icon, color, disabled}: RowActionsProps) => {
    const OwnIcon = icon;
    return (
        <Tooltip title={tooltip}>
            <IconButton size={'small'} onClick={onClick} color={color} disabled={disabled}>
                <OwnIcon/>
            </IconButton>
        </Tooltip>
    );
}

export default memo(RowActions);