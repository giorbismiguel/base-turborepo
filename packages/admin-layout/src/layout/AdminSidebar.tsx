import React, { useEffect } from 'react';
import { Box, Drawer, Theme, useMediaQuery } from '@mui/material';
import { Scrollbar } from '../components/Scrollbar';
import { useLocation } from 'react-router';
import { ChildrenProps } from 'mui-react-common';

type AdminSidebarProps = ChildrenProps & {
  onClose: () => void,
  open: boolean,
}

export const AdminSidebar = ({ onClose, open , children}: AdminSidebarProps) => {
  const { pathname } = useLocation();
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'), {
    noSsr: true
  });
  // const lgUp=true;

  const handlePathChange = () => {
    if (open) {
      onClose?.();
    }
  };

  useEffect(
    handlePathChange,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [pathname]
  );

  const content = (
    <>
      <Scrollbar
        sx={{
          height: '100%',
          '& .simplebar-content': {
            height: '100%'
          }
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%'
          }}
        >
          {
            children
          }
        </Box>
      </Scrollbar>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor='left'
        open
        PaperProps={{
          sx: {
              backgroundColor: (theme:Theme) => theme.palette.sidebar.background,
              borderRightColor: 'divider',
              borderRightStyle: 'solid',
              borderRightWidth: 1, //(theme) => (theme.palette.mode === 'dark' ? 1 : 0),
              width: 280
          }
        }}
        variant='permanent'
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor='left'
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: (theme:Theme) => theme.palette.sidebar.background,
          width: 280
        }
      }}
      sx={{ zIndex: (theme:Theme) => theme.zIndex.appBar + 100 }}
      variant='temporary'
    >
      {content}
    </Drawer>
  );
};
