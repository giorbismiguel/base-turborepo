import { memo, useCallback } from 'react'
import { Button, DialogActions, DialogContent } from "@mui/material";
import { ConditionContainer, DialogForm, HandlerError } from "mui-react-common";
import { useTranslation } from "react-i18next";
import useRoleCreateForm from "modules/security/hooks/useRoleCreateForm";
import { InterfaceRole } from "modules/security/interfaces";
import { RoleForm } from "modules/security/components/RoleForm";
import { SIGNUP_ERRORS } from "modules/authentication/constants/login.errors";
import { mapGetOneErrors } from "constants/errors";
import { SkeletonForm } from 'mui-react-common';
import { LoadingButton } from '@mui/lab';

type RoleCreateModalProps = {
    open: boolean,
    loadingInitData?: boolean,
    title?: string,
    dataError?: any,
    initValue?: InterfaceRole,
    onClose: () => void,
}
const RoleCreateModal = ({
    title = 'create',
    open,
    onClose,
    dataError,
    initValue,
    loadingInitData
}: RoleCreateModalProps) => {
    const { t } = useTranslation('role');
    const { control, onSubmit, isLoading, reset, error } = useRoleCreateForm(onClose, initValue);
    const handleClose = useCallback(() => {
        onClose?.();
        reset();
    }, [onClose, reset])

    return (
        <DialogForm
            open={open}
            onClose={handleClose}
            isLoading={loadingInitData}
            title={t(title)}
            aria-labelledby={'role-creation-title'}>

            <DialogContent>
                {
                    dataError && <HandlerError error={dataError}
                        errors={SIGNUP_ERRORS}
                        mapError={mapGetOneErrors} />
                }

                {
                    !dataError &&
                    <ConditionContainer active={!loadingInitData} alternative={<SkeletonForm numberItemsToShow={3} />}>
                        <RoleForm error={error}
                            isLoading={isLoading}
                            control={control}
                            onSubmit={onSubmit} />
                    </ConditionContainer>
                }
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>
                    {t('common:cancel')}
                </Button>
                <LoadingButton variant="contained" type={'submit'}
                    loading={isLoading || loadingInitData}
                    disabled={Boolean(dataError)}
                    form="form">
                    {t('common:save')}
                </LoadingButton>
            </DialogActions>
        </DialogForm>
    );

}

export default memo(RoleCreateModal
)
    ;