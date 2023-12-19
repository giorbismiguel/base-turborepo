import {
  Avatar,
  Box,
  Button,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

export interface INotificationItem {
  avatarSrc: string;
  avatarAlt?: string;
  primaryText: string;
  primaryTime: string;
  secondaryText: string;
  handleClick?: () => void;
}

const NotificationItem = ({
  avatarSrc,
  avatarAlt,
  primaryText,
  primaryTime,
  secondaryText,
  handleClick,
}: INotificationItem) => {
  return (
    <>
      <Divider component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={avatarAlt} src={avatarSrc} />
        </ListItemAvatar>
        <ListItemText
          primary={
            <Box
              sx={{
                display: {
                  sm: "block",
                  md: "flex",
                },
                alignItems: {
                  sm: "",
                  md: "center",
                },
                justifyContent: {
                  sm: "",
                  md: "space-between",
                },
              }}
            >
              {primaryText && (
                <Typography variant="subtitle2">{primaryText}</Typography>
              )}{" "}
              {primaryTime && (
                <Typography variant="caption">{primaryTime}</Typography>
              )}
            </Box>
          }
          secondary={
            secondaryText && (
              <Typography variant="body2">{secondaryText}</Typography>
            )
          }
        />
        {handleClick && (
          <Button onClick={handleClick} variant="text">
            Aceptar
          </Button>
        )}
      </ListItem>
    </>
  );
};

export default NotificationItem;
