import React, { memo } from "react";
import { Box } from "@mui/material";
import ResultBase, { ErrorTitle, ResultBaseProps } from "./ResultBase";
import { useTranslation } from "react-i18next";
import { Paragraph, Span } from "../Typography";

const NotConnectionResult = (props: ResultBaseProps) => {
  const { t } = useTranslation("results");
  return (
    <ResultBase {...props} image={"/images/no-internet.png"}>
      <Box className={"mt-4"}>
        <Span secondary>{t("notConnection.subtext")}</Span>
        <ErrorTitle>{t("notConnection.title")}</ErrorTitle>
        <Paragraph mb={2}>{t("notConnection.suggest1")}</Paragraph>
      </Box>
    </ResultBase>
  );
};

export default memo(NotConnectionResult);
