import {useCallback} from 'react'
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions
} from "@mui/material";
import {useTranslation} from "react-i18next";
import { LoadingButton } from "@mui/lab";

interface DeleteActionProps {
    open: boolean,
    onClose: () => void
    onDelete?: () => void
    title?: string
    isLoading?: boolean
    confirmation?: string
}

function DeleteAction({
                          open,
                          onClose,
                          title = 'common:deleteConfirmation.title',
                          confirmation = 'common:deleteConfirmation.confirmation',
                          onDelete,
                          isLoading
                      }: DeleteActionProps) {
    const {t} = useTranslation('common');

    const handleDelete = useCallback(() => {
        onDelete?.();
        onClose();
    }, [onDelete, onClose]);

    return (
        <Dialog
            aria-describedby="alert-dialog-description"
            aria-labelledby="alert-dialog-title"
            onClose={onClose}
            open={open}
        >
            <DialogTitle id="alert-dialog-title">
                {t(title)}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {t(confirmation)}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>{t("cancel")}</Button>
                <LoadingButton color="error" loading={isLoading} onClick={handleDelete} variant="contained">
                    {t("delete")}
                </LoadingButton>
            </DialogActions>
        </Dialog>
    )
}

export default DeleteAction
