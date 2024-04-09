import { Box, Grid, Stack, Typography } from "@mui/material";
import { memo } from 'react'
import useUserUpdateForm from "modules/users/hooks/useUserUpdateForm";
import { FormTextField, HandlerError, LoadingButton, Form, SkeletonForm } from "mui-react-common";
import { useTranslation } from "react-i18next";
import { ACCOUNT_ERRORS } from "modules/users/constants/account.errors";
import { useUserDetail } from "modules/users/contexts/UserDetail";

const UserGeneralInfo = () => {
    const { user, isLoading: isLoadingUser } = useUserDetail();

    const { t } = useTranslation(["common", "account"]);
    const { control, onSubmit, isLoading, error } = useUserUpdateForm(user)

    if (isLoadingUser) {
        return (
            <SkeletonForm numberItemsToShow={4} itemHeight={15} />
        )
    }

    return (
        <>
            <Typography variant={'h3'} mb={3}>
                {t('account:tabs.general')}
            </Typography>

            <HandlerError error={error} errors={ACCOUNT_ERRORS} />

            <Form onSubmit={onSubmit} isLoading={isLoading} control={control}>
                <Box>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        <Grid item xs={12} md={6}>
                            <FormTextField
                                fullWidth
                                name="firstName"
                                label={t('common:firstName')}
                                placeholder="Value"
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FormTextField
                                fullWidth
                                name="lastName"
                                label={t('common:lastName')}
                                placeholder="Value"
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FormTextField
                                fullWidth
                                name="phone"
                                label={t('common:phone')}
                                placeholder="Value"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormTextField
                                fullWidth
                                name="email"
                                label={t('common:email')}
                                placeholder="Value"
                            />
                        </Grid>
                    </Grid>

                    <Box py={2}>
                        <Stack alignItems="flex-end">
                            <LoadingButton variant="contained" type={'submit'} loading={isLoading}>
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
