import React, { Fragment, memo, useRef } from 'react';
import { useToggle } from 'hook-utils';
import { Avatar, Box, ButtonBase } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountPopover from './AccountPopover';
import { useUser } from 'security';
import { ChildrenProps } from 'mui-react-common';

type AccountButtonProps = ChildrenProps & {
  logoutText: string
};

const AccountButton = ({ children, logoutText = 'Logout' }: AccountButtonProps) => {
  const anchorRef = useRef(null);
  const { isOpen, onOpen, onClose } = useToggle(false);
  // To get the user from the authContext, you can use
  const { user } = useUser();

  return (
    <Fragment>
      <Box
        component={ButtonBase}
        onClick={onOpen}
        ref={anchorRef}
        sx={{
          alignItems: 'center',
          display: 'flex',
          ml: 2
        }}
      >
        <Avatar
          sx={{
            height: 40,
            width: 40,
            bgcolor: 'secondary'
          }}
          color='secondary'
          src={user?.avatar}
        >
          <AccountCircleIcon fontSize='small' />
        </Avatar>
      </Box>
      <AccountPopover
        anchorEl={anchorRef.current}
        onClose={onClose}
        open={isOpen}
        logoutText={logoutText}
      >
        {children}
      </AccountPopover>
    </Fragment>
  );
};

export default memo(AccountButton);
