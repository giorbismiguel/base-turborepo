import React, { memo, useCallback } from 'react'
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { HandlerError, LoadingButton } from "mui-react-common";

type DeleteDialogActionProps = {
    open: boolean,
    onClose: () => void
    onDelete?: () => void
    title?: string
    confirmation?: string
    isLoading?: boolean
    error?: any
    errors?: any
}

const DeleteDialogAction = ({
    open,
    onClose,
    title = 'common:deleteConfirmation.title',
    confirmation = 'common:deleteConfirmation.confirmation',
    onDelete,
    error,
    errors,
    isLoading
}: DeleteDialogActionProps) => {
    const { t } = useTranslation('common');

    const handleDelete = useCallback(() => {
        onDelete?.();
    }, [onDelete]);

    return (
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {t(title)}
            </DialogTitle>
            <DialogContent>
                <HandlerError error={error} errors={errors} />
                <DialogContentText id="alert-dialog-description">
                    {t(confirmation)}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>{t("cancel")}</Button>
                <LoadingButton onClick={handleDelete}
                    autoFocus
                    variant={"contained"}
                    color={'error'}
                    loading={isLoading}>
                    {t("delete")}
                </LoadingButton>
            </DialogActions>
        </Dialog>
    )
}

export default memo(DeleteDialogAction);