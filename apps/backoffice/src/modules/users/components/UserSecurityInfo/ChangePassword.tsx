import { memo } from 'react'
import { Box, Grid, Stack, Typography } from "@mui/material";
import { useUser } from "security";
import { HandlerError, Form, FormPasswordField } from "mui-react-common";
import { useTranslation } from "react-i18next";
import { ACCOUNT_ERRORS } from "modules/users/constants/account.errors";
import useUserPasswordForm from "modules/users/hooks/useUserPasswordForm";
import { LoadingButton } from '@mui/lab';

function ChangePassword() {
    const { user } = useUser();
    const { t } = useTranslation(["common", "account"]);
    const { control, onSubmit, isLoading, error } = useUserPasswordForm(user);

    return (
        <>
            <Typography mb={3} variant="h3">
                {t('account:securityTab.changePassword')}
            </Typography>

            <HandlerError error={error} errors={ACCOUNT_ERRORS} />

            <Form control={control} isLoading={isLoading} onSubmit={onSubmit}>
                <Box>
                    <Grid columns={{ xs: 4, sm: 8, md: 12 }} container spacing={{ xs: 2, md: 3 }}>
                        <Grid item xs={12}>
                            <FormPasswordField
                                fullWidth
                                name="lastPassword"
                                placeholder={t('account:password')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormPasswordField
                                fullWidth
                                name="password"
                                placeholder={t('account:newPassword')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormPasswordField
                                fullWidth
                                name="confirm"
                                placeholder={t('account:confirmPassword')}
                            />
                        </Grid>
                    </Grid>

                    <Box py={2}>
                        <Stack alignItems="flex-end">
                            <LoadingButton loading={isLoading} type="submit" variant="contained">
                                {t('saveChange')}
                            </LoadingButton>
                        </Stack>
                    </Box>
                </Box>
            </Form>
        </>
    )
}

export default memo(ChangePassword)