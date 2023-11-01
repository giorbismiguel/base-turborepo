import React, {memo} from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import Dialog, {DialogProps} from '@mui/material/Dialog';
import {useTheme} from '@mui/material/styles';
import {DialogTitle, DialogTitleProps, IconButton, Typography} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';


export type ResponsiveDialogProps = Omit<DialogProps, 'fullScreen' | 'title'> & {
    title?: React.ReactNode
    subtitle?: React.ReactNode
    divider?: boolean
};

type TitleProps = DialogTitleProps & {
    onClose: any,
    divider?: boolean
};

export const BootstrapDialogTitle = (props: TitleProps) => {
    const {children, onClose, divider, ...other} = props;

    return (
        <DialogTitle {...other}
                     sx={divider ? {borderBottomWidth: 1, borderBottomStyle: 'solid', borderColor: 'divider'} : {}}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={
                        {
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            // color: (theme) => theme.palette.grey[500],
                        }
                    }
                >
                    <CloseIcon/>
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

const ResponsiveDialog = ({onClose, title, subtitle, children, divider, ...props}: ResponsiveDialogProps) => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Dialog fullScreen={fullScreen} {...props} onClose={onClose}>
            {
                (title || subtitle) && (
                    <BootstrapDialogTitle onClose={onClose} divider={divider}>
                        {title}
                        {subtitle && (
                            <Typography>
                                {subtitle}
                            </Typography>
                        )
                        }
                    </BootstrapDialogTitle>
                )
            }
            {
                children
            }
        </Dialog>
    );

}

export default memo(ResponsiveDialog);