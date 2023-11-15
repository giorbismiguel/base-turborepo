import { memo } from "react";
import {
    Paragraph,
    LoadingButton,
    HandlerError,
    FormPasswordField, Span,
} from "mui-react-common";
import Grid from "@mui/material/Grid";
import { useTranslation } from "react-i18next";
import useResetPasswordForm from "modules/authentication/hooks/useResetPasswordForm";
import { LOGIN_ERRORS } from "modules/authentication/constants";
import { ReactLink } from "security";
import Box from "@mui/material/Box";

type RecoveryFinishFormProps = {
    disable: boolean
    verifyKey: string
}

const RecoveryFinishForm = ({ disable, verifyKey }: RecoveryFinishFormProps) => {
    const { t } = useTranslation(["authentication", "common"]);
    const {
        onSubmit,
        control,
        isLoading,
        error,
        isSuccess,
        isPaused
    } = useResetPasswordForm(verifyKey);

    const loading = isLoading || isSuccess;
    const isDisable = disable || loading;
    return (
        <div>
            <HandlerError error={error} errors={LOGIN_ERRORS} networkError={isPaused} />
            <Paragraph>{t("recovery.newPasswordHelpText")}</Paragraph>
            <form onSubmit={onSubmit}>
                <Grid container columnSpacing={2} rowSpacing={4}>
                    <Grid item xs={12}>
                        <FormPasswordField
                            name="password"
                            label={t("common:password")}
                            control={control}
                            disabled={isDisable}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormPasswordField
                            name="confirmPassword"
                            label={t("confirmPassword")}
                            control={control}
                            disabled={isDisable}
                        />
                    </Grid>
                </Grid>
                <div className={"mt-8"}>
                    <LoadingButton
                        fullWidth
                        type="submit"
                        variant="contained"
                        loading={loading}
                        size={"large"}
                        disabled={disable}
                    >
                        {t("common:save")}
                    </LoadingButton>
                </div>
            </form>
            <Box mt={2} textAlign={"center"}>
                <Span mt={3} color='text.secondary'>
                    {t("havePassword")}
                    <ReactLink to='/auth/login' underline='hover'>
                        {t('login')}
                    </ReactLink>
                </Span>
            </Box>
        </div>
    );
};

export default memo(RecoveryFinishForm);