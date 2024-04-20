import { memo, useCallback } from 'react'
import {
    IconButton,
    Button,
    Stack,
    Tooltip,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions
} from "@mui/material";
import { useTranslation } from "react-i18next";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useToggle } from "hook-utils";
import { useDeleteManyRoleBySelection } from 'modules/security/hooks/useDeleteManyRoleBySelection';
import { useParams } from "react-router";
import { LoadingButton } from 'mui-react-common';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

type UserStatusProps = {
    rowId: string
}

type DeleteActionProps = {
    open: boolean,
    onClose: () => void
    onDelete?: () => void
    title?: string
    confirmation?: string
    isLoading: boolean
}

const DeleteAction = ({
    open,
    onClose,
    onDelete,
    title = 'common:deleteConfirmation.title',
    confirmation = 'common:deleteConfirmation.confirmation',
    isLoading
}: DeleteActionProps) => {
    const { t } = useTranslation('common');

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
                <LoadingButton variant={'contained'}
                    startIcon={<DeleteOutlineIcon />}
                    color={'error'}
                    loading={isLoading}
                    onClick={handleDelete}>
                    {t('delete')}
                </LoadingButton>
            </DialogActions>
        </Dialog>
    )
}

const RoleUsersRowActions = ({ rowId }: UserStatusProps) => {
    let params = useParams();
    const { t } = useTranslation('common');
    const { isOpen, onClose, onOpen } = useToggle()
    const { isLoading, mutate } = useDeleteManyRoleBySelection(params.id || '', rowId);

    return (
        <>
            <Stack direction="row" spacing={1} sx={
                {
                    display: 'flex',
                    justifyContent: 'center',
                }
            }>
                <Tooltip title={t("delete")}>
                    <IconButton size={'small'} color={'error'} onClick={onOpen}>
                        <DeleteOutlineOutlinedIcon fontSize={'small'} />
                    </IconButton>
                </Tooltip>
            </Stack>
            <DeleteAction open={isOpen} onClose={onClose} onDelete={() => mutate()} isLoading={isLoading} />
        </>
    );
}

export default memo(RoleUsersRowActions);