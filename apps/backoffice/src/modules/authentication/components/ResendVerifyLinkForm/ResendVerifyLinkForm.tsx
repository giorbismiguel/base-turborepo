import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Form, FormTextField, HandlerError, LoadingButton, Span } from "mui-react-common";
import Grid from "@mui/material/Grid";
import FormHelperText from "@mui/material/FormHelperText";
import { ERRORS, LOGIN_ERRORS } from "modules/authentication/constants";
import useResendConfirmationForm from "modules/authentication/hooks/useResendConfirmationForm";
import type { DFLError} from "security";
import { ReactLink } from "security";
import Box from "@mui/material/Box";

const useMapError = (error: DFLError) =>
    useMemo(() => {
        if (error.name === "NOTFOUNDERROR")
            error.reference = ERRORS.USER_NOT_FOUND_OR_VERIFIED;
        return error;
    }, [error]); ///backend issue

function ResendVerifyLinkForm() {
    const { t } = useTranslation(["authentication", "common"]);
    const { onSubmit, control, isLoading, error } = useResendConfirmationForm();

    const mappedError = useMapError(error as DFLError);

    return (
        <>
            <HandlerError error={mappedError} errors={LOGIN_ERRORS} />
            <Form control={control} isLoading={isLoading} onSubmit={onSubmit}>
                <Grid columnSpacing={2} container rowSpacing={4}>
                    <Grid item xs={12}>
                        <FormTextField
                            aria-describedby="email-helper-text"
                            disabled={isLoading}
                            label={t("common:email")}
                            name="identifier"
                        />
                        <FormHelperText id="email-helper-text">
                            {t('confirmation.newLink')}
                        </FormHelperText>
                    </Grid>
                </Grid>

                <Box mt={2}>
                    <LoadingButton
                        fullWidth
                        loading={isLoading}
                        size="large"
                        type="submit"
                        variant="contained"
                    >
                        {t("confirmation.resend")}
                    </LoadingButton>
                </Box>
            </Form>
            <Box mt={2} textAlign="center">
                <Span color='text.secondary' mt={3}>
                    {t('haveAccount')}
                    <ReactLink to='/auth/login' underline='hover'>
                        {t('login')}
                    </ReactLink>
                </Span>
            </Box>
        </>
    );
}

export default ResendVerifyLinkForm;
