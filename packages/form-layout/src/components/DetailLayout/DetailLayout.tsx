import React from 'react';
import { Box, BoxProps, styled } from '@mui/material';

type DetailLayoutProps = BoxProps & {
  space?: number
}

const DetailLayout = styled(Box)<DetailLayoutProps>(({ theme, space = 25 }) => ({
  display: 'flex',
  flexDirection: 'column',
  '&>div:first-of-type': {
    marginBottom: space
  },
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    '&>div:first-of-type': {
      marginRight: space,
      marginBottom: 0
    }
  }
}));


export default DetailLayout;
