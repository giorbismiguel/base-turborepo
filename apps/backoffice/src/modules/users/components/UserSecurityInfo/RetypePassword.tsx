import { memo } from 'react'
import { Box, FormControlLabel, Grid, Radio, Stack, Typography } from "@mui/material";
import { Form, FormPasswordField, FormCheckBoxField, FormRadioGroupField } from "mui-react-common";
import { useTranslation } from "react-i18next";
import useUserResetPasswordForm from 'modules/users/hooks/useUserResetPasswordForm';
import { useUserDetail } from 'modules/users/contexts/UserDetailContext';
import { PasswordType } from "modules/users/interfaces/IChangePassword";
import { LoadingButton } from '@mui/lab';


function RetypePassword() {
    const { user } = useUserDetail();
    const { t } = useTranslation(["common", "account"]);

    const { control, onSubmit, isLoading, typePassword } = useUserResetPasswordForm(user);

    return (
        <>
            <Typography mb={3} variant="h3">
                {t('account:securityTab.resetPassword')}
            </Typography>

            <Form control={control} isLoading={isLoading} onSubmit={onSubmit}>
                <Box>
                    <Grid columns={{ xs: 4, sm: 8, md: 12 }} container spacing={{ xs: 2, md: 3 }}>
                        <Grid item xs={12}>
                            <FormRadioGroupField
                                name='typePassword'
                            >
                                <FormControlLabel
                                    control={<Radio />}
                                    label={t('account:generatePassword')}
                                    value={PasswordType.GENERATE}
                                />

                                <FormControlLabel
                                    control={<Radio />}
                                    label={t('account:createPassword')}
                                    value={PasswordType.RETYPE}
                                />
                            </FormRadioGroupField>
                        </Grid>

                        <Grid item md={6} xs={12}>
                            <FormPasswordField
                                fullWidth
                                name="password"
                                placeholder={t('account:newPassword')}
                                readOnly={typePassword === PasswordType.GENERATE}
                            />
                        </Grid>

                        <Grid item md={6} xs={12}>
                            <FormPasswordField
                                fullWidth
                                name="confirm"
                                placeholder={t('account:retypePassword')}
                                readOnly={typePassword === PasswordType.GENERATE}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <FormCheckBoxField
                                label={t('account:changePasswordRequire')}
                                name="changePasswordRequire"
                            />
                        </Grid>
                    </Grid>

                    <Box py={2}>
                        <Stack alignItems="flex-end">
                            <LoadingButton loading={isLoading} type="submit" variant="contained">
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