import React, { memo, useRef } from 'react';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import { Box, Theme } from '@mui/material';
import { useToggle } from 'hook-utils';
import { H4, Span } from 'mui-react-common';
import { SpacePopover } from './SpacePopover';

const SpaceSelector = () => {
  const { isOpen, onOpen, onClose } = useToggle(false);
  const spaceRef = useRef(null);

  return (
    <React.Fragment>
      <Box sx={{ px: 2, mt: 2 }}>
        <Box
          onClick={onOpen}
          ref={spaceRef}
          sx={{
            alignItems: 'center',
            backgroundColor: (theme: Theme) => theme.palette.spaceSelector || theme.palette.secondary.light,
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'space-between',
            px: 3,
            py: '11px',
            borderRadius: 1
          }}
        >
          <div>
            <H4 color='inherit' m={0}>
              Acme Inc
            </H4>
            <Span color='secondary.500'>
              Premium
            </Span>
          </div>
          <UnfoldMoreIcon
            sx={{
              color: 'neutral.500',
              width: 14,
              height: 14
            }}
          />
        </Box>
      </Box>
      <SpacePopover
          anchorEl={spaceRef.current}
          onClose={onClose}
          open={isOpen}
      />
    </React.Fragment>
  );

};

export default memo(SpaceSelector);
