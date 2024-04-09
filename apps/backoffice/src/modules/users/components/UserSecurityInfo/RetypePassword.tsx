import { memo } from 'react'
import { Box, FormControlLabel, Grid, Radio, Stack, Typography } from "@mui/material";
import { LoadingButton, Form, FormPasswordField, FormCheckBoxField } from "mui-react-common";
import { useTranslation } from "react-i18next";
import useUserResetPasswordForm from 'modules/users/hooks/useUserResetPasswordForm';
import { FormRadioGroupField } from 'mui-react-common';
import { useUserDetail } from 'modules/users/contexts/UserDetail';
import { PasswordType } from "modules/users/interfaces/IChangePassword";


const RetypePassword = () => {
    const { user } = useUserDetail();
    const { t } = useTranslation(["common", "account"]);

    const { control, onSubmit, isLoading, typePassword } = useUserResetPasswordForm(user);

    return (
        <>
            <Typography variant={'h3'} mb={3}>
                {t('account:securityTab.resetPassword')}
            </Typography>

            <Form onSubmit={onSubmit} isLoading={isLoading} control={control}>
                <Box>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        <Grid item xs={12}>
                            <FormRadioGroupField
                                name='typePassword'
                            >
                                <FormControlLabel
                                    value={PasswordType.GENERATE}
                                    control={<Radio />}
                                    label={t('account:generatePassword')}
                                />

                                <FormControlLabel
                                    value={PasswordType.RETYPE}
                                    control={<Radio />}
                                    label={t('account:createPassword')}
                                />
                            </FormRadioGroupField>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <FormPasswordField
                                fullWidth
                                readOnly={typePassword === PasswordType.GENERATE}
                                name="password"
                                placeholder={t('account:newPassword')}
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <FormPasswordField
                                fullWidth
                                readOnly={typePassword === PasswordType.GENERATE}
                                name="confirm"
                                placeholder={t('account:retypePassword')}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <FormCheckBoxField
                                name={'changePasswordRequire'}
                                label={t('account:changePasswordRequire')}
                            />
                        </Grid>
                    </Grid>

                    <Box py={2}>
                        <Stack alignItems="flex-end">
                            <LoadingButton variant="contained" type={'submit'} loading={isLoading}>
                                {t('account:resetPassword')}
                            </LoadingButton>
                        </Stack>
                    </Box>
                </Box>
            </Form>
        </>
    )
}

export default memo(RetypePassword)