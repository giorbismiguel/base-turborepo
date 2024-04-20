
import { memo, useCallback } from 'react'
import { Button, DialogActions, DialogContent, Grid } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import {
    Form,
    FormTextField,
    HandlerError,
    DialogForm,
    ConditionContainer,
 SkeletonForm } from "mui-react-common";
import { useTranslation } from "react-i18next";
import useUserCreateForm from "modules/users/hooks/useUserCreateForm";
import { SIGNUP_ERRORS } from 'modules/authentication/constants/login.errors';
import type { IUser } from 'modules/users/interfaces/IUser';
import { useNavigate } from 'react-router';
import { SelectRole } from "modules/security/components/SelectRole";
import { mapGetOneErrors } from 'constants/errors';

interface UserCreateModalProps {
    open: boolean,
    onClose: () => void,
    title: string,
    dataError?: any,
    initValue?: IUser,
    loadingInitData?: boolean,
    userId?: string | null,
}

function UserCreateModal({ open, onClose, title, dataError, initValue, loadingInitData, userId }: UserCreateModalProps) {
    const { t } = useTranslation('users');
    const { control, onSubmit, isLoading, error } = useUserCreateForm(initValue, onClose);
    const navigate = useNavigate();

    const handleAdvancedEditClick = useCallback(() => {
        navigate(`/users/${String(userId)}/general`)
    }, [userId, navigate]);

    return (
        <DialogForm
            aria-labelledby="user-creation-title"
            isLoading={loadingInitData}
            onClose={onClose}
            open={open}
            title={t(title)}>
            <DialogContent>
                {
                    dataError ? <HandlerError error={dataError}
                        errors={SIGNUP_ERRORS}
                        mapError={mapGetOneErrors} /> : null
                }

                {!dataError &&
                    <ConditionContainer active={!loadingInitData} alternative={<SkeletonForm numberItemsToShow={5} />}>
                        <HandlerError error={error} />
                        <Form control={control}
                            dark
                            id="user-form"
                            isLoading={isLoading}
                            onSubmit={onSubmit}
                            size="small"
                        >
                            <Grid columns={{ xs: 4, sm: 8, md: 12 }} container spacing={{ xs: 1, md: 2 }}>
                                <Grid item md={6} xs={12}>
                                    <FormTextField
                                        fullWidth
                                        label={t('common:firstName')}
                                        name="firstName"
                                        placeholder={t('common:firstName')}
                                        required
                                    />
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <FormTextField
                                        fullWidth
                                        label={t('common:lastName')}
                                        name="lastName"
                                        placeholder={t('common:lastName')}
                                        required
                                    />
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <FormTextField
                                        fullWidth
                                        label={t('common:email')}
                                        name="email"
                                        placeholder="example@gmail.com"
                                        required
                                    />
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <FormTextField
                                        fullWidth
                                        label={t('common:phone')}
                                        name="phone"
                                        placeholder="+5355555555"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <SelectRole
                                        label={t('roles')}
                                        multiple
                                        name="roles"
                                        placeholder={t('selectRoles')}
                                    />
                                </Grid>
                            </Grid>
                        </Form>
                    </ConditionContainer>
                }
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>
                    {t('common:cancel')}
                </Button>
                {Boolean(userId) && <Button onClick={handleAdvancedEditClick} variant="outlined">
                    {t('advancedEdit')}
                </Button>}
                <LoadingButton form="user-form" loading={isLoading} type="submit" variant="contained">
                    {t('common:save')}
                </LoadingButton>
            </DialogActions>
        </DialogForm>
    );

}

export default memo(UserCreateModal);