import React, { memo } from "react";
import { Badge } from "@mui/material";
import { FilterProps } from "../../types";
import DateFilter from "./DateFilter";
import { IDateRangeOption } from "./types";

export type DateRangeFilterProps = FilterProps & {
  options?: Array<IDateRangeOption | string>;
};

const DateRangeFilter = ({
  filter,
  value,
  onChange,
  title,
  ...rest
}: DateRangeFilterProps) => {
  return (
    <Badge badgeContent={value ? 1 : 0} color="primary">
      <DateFilter
        {...rest}
        options={(filter.options as IDateRangeOption[]) || undefined}
        value={(value as string | undefined) || ""}
        title={title}
        onChange={onChange}
      />
    </Badge>
  );
};

export default memo(DateRangeFilter);
