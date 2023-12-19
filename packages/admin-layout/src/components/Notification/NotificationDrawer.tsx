import React, { memo } from "react";
import Drawer, { DrawerProps } from "@mui/material/Drawer";
import ListItem from "@mui/material/ListItem";
import {
  Avatar,
  ListItemAvatar,
  Typography,
  List,
  Divider,
  ListItemText,
} from "@mui/material";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import NotificationItem, { INotificationItem } from "./NotificationItem";
import { SimpleNotResult, SkeletonList } from "mui-react-common";

type NotificationDrawerProps = {
  headerText: string;
  headerActionText: string;
  handleActionText: () => void;
  open: boolean;
  onClose: () => void;
  notifications: INotificationItem[];
  isLoading: boolean;
};

const NotificationDrawer = ({
  headerText,
  headerActionText,
  handleActionText,
  notifications,
  isLoading,
  open,
  onClose: handleClose,
}: NotificationDrawerProps & DrawerProps) => {
  let content = null;

  if (isLoading) {
    content = <SkeletonList numberItemsToShow={4} />;
  } else if (!notifications.length) {
    content = <SimpleNotResult title="notFound.notifications" />;
  } else {
    content = (
      <>
        <List sx={{ width: "100%", bgColor: "background.paper" }}>
          {notifications.map(
            ({
              avatarSrc,
              avatarAlt,
              primaryText,
              primaryTime,
              secondaryText,
            }) => (
              <NotificationItem
                avatarSrc={avatarSrc}
                avatarAlt={avatarAlt}
                primaryText={primaryText}
                primaryTime={primaryTime}
                secondaryText={secondaryText}
              />
            )
          )}
        </List>
      </>
    );
  }

  return (
    <Drawer anchor="right" open={open} onClose={handleClose}>
      <Box
        sx={{
          width: {
            xs: "100%",
            sm: "300px",
          },
          p: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="subtitle2">{headerText}</Typography>
          <Button variant="text" onClick={handleActionText}>
            {headerActionText}
          </Button>
        </Box>

        <Divider />

        {content}
      </Box>
    </Drawer>
  );
};

export default memo(NotificationDrawer);
