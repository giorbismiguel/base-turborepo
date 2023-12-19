import {
  Box,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  Paper,
  Stack,
  Theme,
  Tooltip,
} from "@mui/material";
import { get, map, truncate } from "lodash";
import React, { memo, useMemo, useState, MouseEvent } from "react";

type TableTagListFieldPreviewProps = {
  value: any;
  limit?: number;
  ownChip?: React.FC;
  propertyItemToShow?: string;
};

export type OwnChipProps = {
  text?: string;
};

const showItem = (
  item: any,
  key: string,
  tag: boolean,
  OwnChip: React.FC<OwnChipProps> | undefined,
  propertyItemToShow?: string
) => {
  const text = propertyItemToShow ? get(item, propertyItemToShow) : item;
  const truncateText = truncate(text, { length: 24 });
  if (!!OwnChip) {
    return <OwnChip text={text} key={key} />;
  } else if (tag) {
    return (
      <Tooltip key={key} title={text} arrow>
        <Chip label={truncateText} />
      </Tooltip>
    );
  } else {
    return text;
  }
};

const TagList = ({
  value,
  limit,
  ownChip,
  propertyItemToShow,
}: TableTagListFieldPreviewProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toShow = useMemo(
    () => (limit ? (value ? [...value]?.splice(0, limit) : []) : value),
    [value, limit]
  );
  const restToShow = useMemo(
    () =>
      limit ? (value ? [...value]?.splice(limit, value?.length || 0) : []) : [],
    [value, limit]
  );

  const tagList = useMemo(() => {
    return map(toShow, (item, i) =>
      showItem(
        item,
        `table-item-${item?._id || i}`,
        true,
        ownChip,
        propertyItemToShow
      )
    );
  }, [toShow, ownChip, propertyItemToShow]);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  // className='flex items-center gap-1'
  return (
    <Stack spacing={1} direction={"row"}>
      {tagList}
      {!!restToShow.length && (
        <>
          <Paper
            elevation={0}
            component={"div"}
            sx={{
              backgroundColor: (theme: Theme) => theme.palette.primary.light,
              padding: "0.2rem",
              cursor: "pointer",
            }}
            id="more-chip"
            onClick={handleClick}
          >
            {`+ ${restToShow.length}`}
          </Paper>
          <Dialog open={open} onClose={handleClose} scroll={"paper"}>
            <DialogContent dividers>
              <Box
                component={"div"}
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignContent: "center",
                }}
              >
                {map(restToShow, (item, i) => (
                  <Box
                    component={"div"}
                    key={`table-item-${item?._id || i}`}
                    sx={{
                      m: 1,
                    }}
                  >
                    {showItem(
                      item,
                      item?._id,
                      true,
                      ownChip,
                      propertyItemToShow
                    )}
                  </Box>
                ))}
              </Box>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Close</Button>
            </DialogActions>
          </Dialog>
        </>
      )}
    </Stack>
  );
};

export default memo(TagList);

export const renderTagList = (
  value: any,
  limit: number = 3,
  item?: React.FC,
  propertyName?: string
) => {
  return (
    <TagList
      value={value}
      limit={limit}
      ownChip={item}
      propertyItemToShow={propertyName}
    />
  );
};
