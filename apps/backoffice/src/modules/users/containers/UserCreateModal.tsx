import { memo, useCallback } from 'react'
import { Button, DialogActions, DialogContent, Grid } from "@mui/material";
import {
    Form,
    LoadingButton,
    FormTextField,
    HandlerError,
    DialogForm,
    ConditionContainer,
} from "mui-react-common";
import { useTranslation } from "react-i18next";
import useUserCreateForm from "modules/users/hooks/useUserCreateForm";
import { mapGetOneErrors } from 'constants/errors';
import { SIGNUP_ERRORS } from 'modules/authentication/constants/login.errors';
import { IUser } from 'modules/users/interfaces/IUser';
import { SkeletonForm } from 'mui-react-common';
import { useNavigate } from 'react-router';
import { SelectRole } from "modules/security/components/SelectRole";

type UserCreateModalProps = {
    open: boolean,
    onClose: () => void,
    title: string,
    dataError?: any,
    initValue?: IUser,
    loadingInitData?: boolean,
    userId?: string | null,
}

const UserCreateModal = ({ open, onClose, title, dataError, initValue, loadingInitData, userId }: UserCreateModalProps) => {
    const { t } = useTranslation('users');
    const { control, onSubmit, isLoading, error } = useUserCreateForm(initValue, onClose);
    let navigate = useNavigate();

    const handleAdvancedEditClick = useCallback(() => {
        navigate(`/users/${userId}/general`)
    }, [userId, navigate]);

    return (
        <DialogForm
            isLoading={loadingInitData}
            open={open}
            onClose={onClose}
            title={t(title)}
            aria-labelledby={'user-creation-title'}>
            <DialogContent>
                {
                    dataError && <HandlerError error={dataError}
                        errors={SIGNUP_ERRORS}
                        mapError={mapGetOneErrors} />
                }

                {!dataError &&
                    <ConditionContainer active={!loadingInitData} alternative={<SkeletonForm numberItemsToShow={5} />}>
                        <HandlerError error={error} />
                        <Form onSubmit={onSubmit}
                            control={control}
                            isLoading={isLoading}
                            size={'small'}
                            id={'user-form'}
                            dark
                        >
                            <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                                <Grid item xs={12} md={6}>
                                    <FormTextField
                                        fullWidth
                                        autoFocus
                                        required
                                        name="firstName"
                                        label={t('common:firstName')}
                                        placeholder={t('common:firstName')}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <FormTextField
                                        fullWidth
                                        name="lastName"
                                        required
                                        label={t('common:lastName')}
                                        placeholder={t('common:lastName')}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <FormTextField
                                        fullWidth
                                        name="email"
                                        required
                                        label={t('common:email')}
                                        placeholder="example@gmail.com"
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <FormTextField
                                        fullWidth
                                        name="phone"
                                        label={t('common:phone')}
                                        placeholder="+5355555555"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <SelectRole
                                        name="roles"
                                        multiple
                                        label={t('roles')}
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
                {!!userId && <Button onClick={handleAdvancedEditClick} variant={'outlined'}>
                    {t('advancedEdit')}
                </Button>}
                <LoadingButton variant="contained" type={'submit'} loading={isLoading} form="user-form">
                    {t('common:save')}
                </LoadingButton>
            </DialogActions>
        </DialogForm>
    );

}

export default memo(UserCreateModal);