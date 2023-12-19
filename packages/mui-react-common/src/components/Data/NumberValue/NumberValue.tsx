import React, { memo, ReactNode, useMemo } from "react";
import { Typography, TypographyProps } from "@mui/material";

type NumberValueProps = TypographyProps & {
  value: number | string;
  locale?: string;
  options?: any;
  prefix?: ReactNode;
  suffix?: ReactNode;
};
const numberFormat = new Intl.NumberFormat("en");

export const defaultLocale = "en";

const NumberValue = ({
  value,
  locale,
  options,
  fontSize = "inherit",
  fontWeight = "inherit",
  prefix,
  suffix,
  ...props
}: NumberValueProps) => {
  const formatter = useMemo(
    () =>
      locale || options
        ? new Intl.NumberFormat(locale || defaultLocale, options)
        : numberFormat,
    [locale, options]
  );

  return (
    <Typography {...props} fontSize={fontSize} fontWeight={fontWeight}>
      {prefix}
      {formatter.format(Number(value))}
      {suffix}
    </Typography>
  );
};

export default memo(NumberValue);
