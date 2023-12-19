import React, { memo } from "react";
import { Stack, StackProps } from "@mui/material";
import DetailStackItem, { DetailStackItemRecord } from "./DetailStackItem";
import { ResponsiveStyleValue } from "@mui/system";

type DetailStackProps = StackProps & {
  details: DetailStackItemRecord[];
  itemDirection?: ResponsiveStyleValue<
    "row" | "row-reverse" | "column" | "column-reverse"
  >;
  data: any;
  inverse?: boolean;
};

const DetailStack = ({
  details = [],
  direction = "column",
  itemDirection,
  justifyContent,
  alignItems,
  spacing = 1,
  p = 1,
  data,
  inverse,
  ...stackProps
}: DetailStackProps) => {
  return (
    <Stack {...stackProps} p={p} direction={direction} spacing={spacing}>
      {details.map((item) => (
        <DetailStackItem
          {...item}
          key={item.label}
          inverse={inverse}
          data={data}
          itemDirection={itemDirection}
          justifyContent={justifyContent}
          alignItems={alignItems}
        />
      ))}
    </Stack>
  );
};

export default memo(DetailStack);
