import React, { memo, useCallback, useState } from "react";
import { Badge, IconButton, IconButtonProps, Tooltip } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

type NotificationsButtonProps = {
  tooltipTitle: string;
  handleClick: () => void;
  hideBadge: boolean;
};

const NotificationsButton = ({
  tooltipTitle,
  handleClick,
  hideBadge,
  ...props
}: NotificationsButtonProps & IconButtonProps) => {
  const [invisible, setInvisible] = useState(hideBadge);

  const onClick = useCallback(() => {
    if (handleClick) {
      handleClick();
    }

    if (!invisible) {
      setInvisible(true);
    }
  }, [setInvisible, handleClick]);

  return (
    <>
      <Tooltip title={tooltipTitle}>
        <IconButton color="secondary" onClick={onClick} {...props}>
          <Badge color="secondary" invisible={invisible} variant="dot">
            <NotificationsIcon fontSize="small" />
          </Badge>
        </IconButton>
      </Tooltip>
    </>
  );
};

export default memo(NotificationsButton);
