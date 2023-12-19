import { memo } from "react";
import { useTranslation } from "react-i18next";
import { H1 } from "mui-react-common";
import RecoveryInitContainer from "modules/authentication/container/RecoveryInitContainer";

function RecoveryInit() {
  const { t } = useTranslation("authentication");

  return (
    <>
      <H1 textAlign="center">{t("forgetPasswordTitle")}</H1>
      <RecoveryInitContainer />
    </>
  );
}

export default memo(RecoveryInit);
