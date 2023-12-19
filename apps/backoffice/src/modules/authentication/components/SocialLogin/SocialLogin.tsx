import { memo } from "react";
import Grid from "@mui/material/Grid";
import { FacebookButton, GoogleButton } from "mui-react-common";
import { useTranslation } from "react-i18next";

type SocialLoginProps = {
  isLoading: boolean;
};

const SocialLogin = ({ isLoading }: SocialLoginProps) => {
  const { t } = useTranslation(["authentication"]);

  return (
    <Grid container columnSpacing={2} rowSpacing={2} mt={2}>
      <Grid item xs={12} sm={6}>
        <GoogleButton
          fullWidth
          disabled={isLoading}
          variant={"outlined"}
          size={"large"}
        >
          {t("signGoogle")}
        </GoogleButton>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FacebookButton
          fullWidth
          disabled={isLoading}
          variant={"outlined"}
          size={"large"}
        >
          {t("signFacebook")}
        </FacebookButton>
      </Grid>
    </Grid>
  );
};

export default memo(SocialLogin);
