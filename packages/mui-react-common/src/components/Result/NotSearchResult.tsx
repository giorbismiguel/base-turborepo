import React, { memo } from "react";
import ResultBase, { ErrorTitle, ResultBaseProps } from "./ResultBase";
import { useTranslation } from "react-i18next";
import { Paragraph, Span } from "../Typography";

const NotSearchResult = (props: ResultBaseProps) => {
  const { t } = useTranslation("results");
  return (
    <ResultBase {...props} image={"/images/no-results.png"}>
      <div>
        <Span secondary>{t("notSearchResult.subtext")}</Span>
        <ErrorTitle>{t("notSearchResult.title")}</ErrorTitle>
        <Paragraph mb={2} fontWeight={"bold"}>
          {t("suggest")}
        </Paragraph>
        <Paragraph>{t("notSearchResult.suggest1")}</Paragraph>
        <Paragraph>{t("notSearchResult.suggest2")}</Paragraph>
      </div>
    </ResultBase>
  );
};

export default memo(NotSearchResult);
