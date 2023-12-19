// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { memo, useEffect } from "react";
import LoginContainer from "modules/authentication/container/LoginContainer";
import { useTranslation } from "react-i18next";
import { H1 } from "components/Typography";
import { useSecurity } from "security";
import { useNavigate } from "react-router-dom";

function Login() {
  const { t } = useTranslation("authentication");
  const { isAuthenticated } = useSecurity();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated, navigate]);

  return (
    <>
      <H1 textAlign="center">{t("loginTitle")}</H1>
      <LoginContainer />
    </>
  );
}

export default memo(Login);
