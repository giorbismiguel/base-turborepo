import React from 'react';
import {
  Avatar,
  Box,
  Divider,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Popover,
  Typography
} from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { ChildrenProps, Span } from 'mui-react-common';
import { useAuth, useUser } from 'security';

type AccountPopoverProps = ChildrenProps & {
  anchorEl: any;
  onClose: () => void;
  open: boolean;
  logoutText: string;
};

const AccountPopover = (props: AccountPopoverProps) => {
  const { anchorEl, onClose, open, children,logoutText, ...other } = props;
  const { user } = useUser();
  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      onClose?.();
      await logout();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{
        horizontal: 'center',
        vertical: 'bottom'
      }}
      keepMounted
      onClose={onClose}
      open={!!open}
      PaperProps={{ sx: { width: 300 } }}
      transitionDuration={0}
      {...other}>
      <Box
        sx={{
          alignItems: 'center',
          p: 2,
          display: 'flex'
        }}
      >
        <Avatar
          src={user?.avatar}
          sx={{
            height: 40,
            width: 40
          }}
        >
          <AccountCircleIcon fontSize='small' />
        </Avatar>
        <Box
          sx={{
            ml: 1,
            overflow: 'hidden'
          }}
        >
          <Span block textTransform={'none'}>
            {user?.fullName}
          </Span>
          <Span secondary block textTransform={'none'} ellipsis fontSize={14}>
            {user?.email}
          </Span>
        </Box>
      </Box>
      <Divider />
      <Box sx={{ my: 1 }}>
        {children}
        <Divider />
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <LogoutIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText
            primary={(
              <Typography variant='body1'>
                {logoutText}
              </Typography>
            )}
          />
        </MenuItem>
      </Box>
    </Popover>
  );
};

export default AccountPopover;
