import React, { memo } from "react";
import { Badge } from "@mui/material";
import SelectFilter from "./SelectFilter";
import { FilterProps } from "../../types";

const FixedListFilter = ({
  filter,
  value,
  onChange,
  title,
  options,
}: FilterProps & { options?: any[] }) => {
  return (
    <Badge badgeContent={value?.length} color="primary">
      <SelectFilter
        options={options || (filter.options as any[])}
        value={(value as string[] | undefined) || []}
        title={title}
        onChange={onChange}
      />
    </Badge>
  );
};

export default memo(FixedListFilter);
