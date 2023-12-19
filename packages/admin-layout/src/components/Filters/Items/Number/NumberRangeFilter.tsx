import React, { memo } from "react";
import { Badge } from "@mui/material";
import { FilterProps } from "../../types";
import NumberFilter from "./NumberFilter";

const NumberRangeFilter = ({ value, onChange, title }: FilterProps) => {
  return (
    <Badge badgeContent={value ? 1 : 0} color="primary">
      <NumberFilter
        value={(value as string | undefined) || ""}
        title={title}
        onChange={onChange}
      />
    </Badge>
  );
};

export default memo(NumberRangeFilter);
