import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { Skeleton } from "@mui/material";
import { range } from "lodash";

type SkeletonListProps = {
  numberItemsToShow: number;
};

const SkeletonList = ({ numberItemsToShow: n }: SkeletonListProps) => (
  <List dense sx={{ width: "100%" }}>
    {range(1, n).map((value) => {
      const labelId = `checkbox-list-secondary-label-${value}`;

      return (
        <ListItem key={value} disablePadding>
          <ListItemAvatar>
            <Skeleton
              animation="wave"
              variant="circular"
              width={40}
              height={40}
            />
          </ListItemAvatar>
          <ListItemText
            id={labelId}
            primary={
              <Skeleton
                animation="wave"
                height={15}
                width="45%"
                style={{ marginBottom: 6 }}
              />
            }
            secondary={
              <Skeleton
                animation="wave"
                height={15}
                width="90%"
                style={{ marginBottom: 6 }}
              />
            }
          />
        </ListItem>
      );
    })}
  </List>
);

export default SkeletonList;
