import { memo } from "react";
import { H1 } from "mui-react-common";
import SignUpContainer from "modules/authentication/container/SignUpContainer";
import { useTranslation } from "react-i18next";

function SignUp() {
  const { t } = useTranslation("authentication");

  return (
    <>
      <H1 textAlign="center">{t("loginTitle")}</H1>
      <SignUpContainer />
    </>
  );
}

export default memo(SignUp);
