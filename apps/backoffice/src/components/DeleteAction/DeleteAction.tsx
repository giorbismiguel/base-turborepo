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
import {LoadingButton} from "@dfl/mui-react-common";

type DeleteActionProps = {
    open: boolean,
    onClose: () => void
    onDelete?: () => void
    title?: string
    isLoading?: boolean
    confirmation?: string
}

const DeleteAction = ({
                          open,
                          onClose,
                          title = 'common:deleteConfirmation.title',
                          confirmation = 'common:deleteConfirmation.confirmation',
                          onDelete,
                          isLoading
                      }: DeleteActionProps) => {
    const {t} = useTranslation('common');

    const handleDelete = useCallback(() => {
        onDelete?.();
        onClose?.();
    }, [onDelete, onClose]);

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
                <DialogContentText id="alert-dialog-description">
                    {t(confirmation)}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>{t("cancel")}</Button>
                <LoadingButton onClick={handleDelete} autoFocus variant={"contained"} color={'error'} loading={isLoading}>
                    {t("delete")}
                </LoadingButton>
            </DialogActions>
        </Dialog>
    )
}

export default DeleteAction
