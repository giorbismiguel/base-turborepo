import { memo, useCallback } from 'react'
import {
    Button,
    Box,
    DialogActions,
    DialogContent,
} from "@mui/material";
import { Trans, useTranslation } from "react-i18next";
import { useRoleDetail } from "modules/security/contexts";
import { DialogForm, Form, HandlerError } from "mui-react-common";
import { SelectUser } from "modules/users/components/SelectUser";
import useRoleAddUsersForm from "modules/security/hooks/useRoleAddUsersForm";
import { LoadingButton } from '@mui/lab';

type AddPermissionToRoleModalProps = {
    open: boolean,
    onClose: () => void,
}

const components = {
    bold: <strong />
};

const AddUserToRoleModal = ({
    open,
    onClose,
}: AddPermissionToRoleModalProps) => {
    const { t } = useTranslation('role');

    const { data: role } = useRoleDetail();
    const { isLoading, reset, onSubmit, control, error } = useRoleAddUsersForm(role, onClose);

    const handleClose = useCallback(() => {
        onClose?.();
        reset();
    }, [onClose, reset])

    return (
        <DialogForm
            open={open}
            maxWidth={'xs'}
            onClose={handleClose}
            title={t('addUser')}
            subtitle={<Trans i18nKey={'role:addUserSubtitle'} values={{ role: role?.name }} components={components} />}
            aria-labelledby={'add-user-to-role-title'}>

            <DialogContent>
                <HandlerError error={error} />
                <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'large'}
                    id={'form-add-users-to-role'}>
                    <Box mt={1}>
                        <SelectUser name={'users'} placeholder={t('userList')} />
                    </Box>
                </Form>
            </DialogContent>

            <DialogActions>
                <Button onClick={handleClose}>
                    {t('common:cancel')}
                </Button>
                <LoadingButton variant="contained" type={'submit'}
                    loading={isLoading}
                    form="form-add-users-to-role">
                    {t('common:save')}
                </LoadingButton>
            </DialogActions>
        </DialogForm>
    );
}

export default memo(AddUserToRoleModal);