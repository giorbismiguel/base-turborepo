import { Box, Grid, Stack, Typography } from "@mui/material";
import { memo } from 'react'
import useUserUpdateForm from "modules/users/hooks/useUserUpdateForm";
import { FormTextField, HandlerError, Form, SkeletonForm } from "mui-react-common";
import { useTranslation } from "react-i18next";
import { ACCOUNT_ERRORS } from "modules/users/constants/account.errors";
import { useUserDetail } from "modules/users/contexts/UserDetail";
import { LoadingButton } from "@mui/lab";

function UserGeneralInfo() {
    const { user, isLoading: isLoadingUser } = useUserDetail();

    const { t } = useTranslation(["common", "account"]);
    const { control, onSubmit, isLoading, error } = useUserUpdateForm(user)

    if (isLoadingUser) {
        return (
            <SkeletonForm itemHeight={15} numberItemsToShow={4} />
        )
    }

    return (
        <>
            <Typography mb={3} variant="h3">
                {t('account:tabs.general')}
            </Typography>

            <HandlerError error={error} errors={ACCOUNT_ERRORS} />

            <Form control={control} isLoading={isLoading} onSubmit={onSubmit}>
                <Box>
                    <Grid columns={{ xs: 4, sm: 8, md: 12 }} container spacing={{ xs: 2, md: 3 }}>
                        <Grid item md={6} xs={12}>
                            <FormTextField
                                fullWidth
                                label={t('common:firstName')}
                                name="firstName"
                                placeholder="Value"
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <FormTextField
                                fullWidth
                                label={t('common:lastName')}
                                name="lastName"
                                placeholder="Value"
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <FormTextField
                                fullWidth
                                label={t('common:phone')}
                                name="phone"
                                placeholder="Value"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormTextField
                                fullWidth
                                label={t('common:email')}
                                name="email"
                                placeholder="Value"
                            />
                        </Grid>
                    </Grid>

                    <Box py={2}>
                        <Stack alignItems="flex-end">
                            <LoadingButton loading={isLoading} type="submit" variant="contained">
                                {t('common:saveChange')}
                            </LoadingButton>
                        </Stack>
                    </Box>
                </Box>
            </Form>
        </>
    );
}

export default memo(UserGeneralInfo);
