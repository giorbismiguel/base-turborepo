import React, {memo} from 'react'
import {ResponsiveDialog} from "../ResponsiveDialog";
import {Skeleton} from "@mui/material";
import {ResponsiveDialogProps} from "../ResponsiveDialog/ResponsiveDialog";

type DialogFormProps = ResponsiveDialogProps & {
    isLoading?: boolean
};

const DialogForm = ({
                        children,
                        open,
                        onClose,
                        isLoading,
                        title,
                        subtitle,
                        maxWidth='sm',
                        ...props
                    }: DialogFormProps) => {

    return (
        <ResponsiveDialog
            open={open}
            onClose={onClose}
            fullWidth
            maxWidth={maxWidth}
            title={isLoading ? <Skeleton variant="text" width="40%"/> : title}
            subtitle={isLoading ? undefined : subtitle}
            {...props}>

            {children}

        </ResponsiveDialog>
    );

}

export default memo(DialogForm);