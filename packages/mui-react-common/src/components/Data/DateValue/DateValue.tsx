import React, { memo, useMemo } from "react";
import dateFormat from "date-fns/format";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { useDateSettings } from "../../../contexts/DateSettingsContext";

type DateProps = {
  value?: number | Date | string;
  now?: boolean;
  format?: string;
  fromNow?: boolean;
  defaultValue?: any;
};

const DateValue = ({
  value,
  now,
  format,
  fromNow,
  defaultValue,
}: DateProps) => {
  const { locale, defaultFormat } = useDateSettings();
  const date = useMemo(
    () =>
      now && !value
        ? new Date()
        : typeof value === "string"
        ? new Date(value)
        : value,
    [now, value]
  );

  if (!date) return <>{defaultValue || "-"}</>;

  if (fromNow)
    return (
      <>
        {formatDistanceToNow(date, {
          locale: locale,
        })}
      </>
    );

  return (
    <>
      {dateFormat(date, format || defaultFormat || "PP", {
        locale: locale,
      })}
    </>
  );
};

export default memo(DateValue);
