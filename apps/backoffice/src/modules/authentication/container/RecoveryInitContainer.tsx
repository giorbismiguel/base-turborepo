import { memo } from "react";
import {
  FormTextField,
  Span,
  LoadingButton,
  HandlerError,
  Paragraph,
  ConditionContainer,
  Form,
} from "mui-react-common";
import Grid from "@mui/material/Grid";
import { useTranslation } from "react-i18next";
import { ReactLink } from "security";
import Box from "@mui/material/Box";
import useRecoveryPasswordInitForm from "modules/authentication/hooks/useRecoveryPasswordInitForm";
import { LOGIN_ERRORS } from "modules/authentication/constants";
import { RecoveryPasswordSent } from "modules/authentication/components/RecoveryPasswordSent";

function RecoveryInitContainer() {
  const { t } = useTranslation(["authentication", "common"]);
  const { onSubmit, control, isLoading, error, isSuccess, data, reset } =
    useRecoveryPasswordInitForm();

  return (
    <div>
      <ConditionContainer
        active={!isSuccess}
        alternative={
          <RecoveryPasswordSent
            email={data?.email}
            isLoading={isLoading}
            reset={reset}
          />
        }
      >
        <HandlerError error={error} errors={LOGIN_ERRORS} />
        <Paragraph>{t("recovery.helpText")}</Paragraph>
        <Form control={control} onSubmit={onSubmit}>
          <Grid columnSpacing={2} container rowSpacing={4}>
            <Grid item xs={12}>
              <FormTextField
                disabled={isLoading}
                label={t("common:email")}
                name="identifier"
              />
            </Grid>
          </Grid>
          <Box mt={4}>
            <LoadingButton
              fullWidth
              loading={isLoading}
              size="large"
              type="submit"
              variant="contained"
            >
              {t("resetPassword")}
            </LoadingButton>
          </Box>
        </Form>
      </ConditionContainer>
      <Box mt={2} textAlign="center">
        <Span color="text.secondary" mt={3}>
          {t("notHaveAccount")}
          <ReactLink to="/auth/signup" underline="hover">
            {t("createAccount")}
          </ReactLink>
        </Span>
      </Box>
    </div>
  );
}

export default memo(RecoveryInitContainer);
