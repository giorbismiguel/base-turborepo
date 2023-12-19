import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import { Paragraph, Span } from "../Typography";
import ResultBase, { ErrorTitle } from "./ResultBase";

type SimpleNotResultProps = {
  title: string;
  suggest?: string;
};

const SimpleNotResult = ({
  title,
  suggest,
  ...props
}: SimpleNotResultProps) => {
  const { t } = useTranslation("results");

  return (
    <ResultBase {...props} image={"/images/no-results.png"}>
      <div>
        <Span secondary>{t("notSearchResult.subtext")}</Span>

        <ErrorTitle>{t(title)}</ErrorTitle>

        {suggest && (
          <Paragraph mb={2} fontWeight={"bold"}>
            {t(suggest)}
          </Paragraph>
        )}
      </div>
    </ResultBase>
  );
};

export default memo(SimpleNotResult);
