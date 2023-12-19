import { memo } from "react";
import {
  Paragraph,
  LoadingButton,
  HandlerError,
  FormPasswordField,
  Span,
  Form,
} from "mui-react-common";
import Grid from "@mui/material/Grid";
import { useTranslation } from "react-i18next";
import useResetPasswordForm from "modules/authentication/hooks/useResetPasswordForm";
import { LOGIN_ERRORS } from "modules/authentication/constants";
import { ReactLink } from "security";
import Box from "@mui/material/Box";

interface RecoveryFinishFormProps {
  disable: boolean;
  verifyKey: string;
}

function RecoveryFinishForm({ disable, verifyKey }: RecoveryFinishFormProps) {
  const { t } = useTranslation(["authentication", "common"]);
  const { onSubmit, control, isLoading, error, isSuccess, isPaused } =
    useResetPasswordForm(verifyKey);

  const loading = isLoading || isSuccess;
  const isDisable = disable || loading;
  return (
    <div>
      <HandlerError
        error={error}
        errors={LOGIN_ERRORS}
        networkError={isPaused}
      />
      <Paragraph>{t("recovery.newPasswordHelpText")}</Paragraph>
      <Form control={control} isLoading={isLoading} onSubmit={onSubmit}>
        <Grid columnSpacing={2} container rowSpacing={4}>
          <Grid item xs={12}>
            <FormPasswordField
              disabled={isDisable}
              label={t("common:password")}
              name="password"
            />
          </Grid>
          <Grid item xs={12}>
            <FormPasswordField
              disabled={isDisable}
              label={t("confirmPassword")}
              name="confirmPassword"
            />
          </Grid>
        </Grid>
        <div className="mt-8">
          <LoadingButton
            disabled={disable}
            fullWidth
            loading={loading}
            size="large"
            type="submit"
            variant="contained"
          >
            {t("common:save")}
          </LoadingButton>
        </div>
      </Form>
      <Box mt={2} textAlign="center">
        <Span color="text.secondary" mt={3}>
          {t("havePassword")}
          <ReactLink to="/auth/login" underline="hover">
            {t("login")}
          </ReactLink>
        </Span>
      </Box>
    </div>
  );
}

export default memo(RecoveryFinishForm);
