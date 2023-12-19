import React, { memo } from "react";
import { Grid, Skeleton } from "@mui/material";
import { range } from "lodash";

type SkeletonListProps = {
  numberItemsToShow: number;
  itemHeight?: number | string;
  itemWidth?: number | string;
};

const SkeletonForm = ({
  numberItemsToShow: n,
  itemHeight = 35,
  itemWidth = "100%",
}: SkeletonListProps) => {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 4 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {range(1, n).map((value) => {
        const labelId = `skeleton-${value}`;

        return (
          <Grid item xs={12} mt={value == 1 ? 2 : 0} key={labelId}>
            <Skeleton
              variant="rectangular"
              height={itemHeight}
              width={itemWidth}
              animation="wave"
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default memo(SkeletonForm);
