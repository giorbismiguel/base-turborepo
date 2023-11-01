import React, { memo } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { styled } from '@mui/material';
import { BoxProps } from '@mui/material/Box/Box';

type ContainerStyleProps = BoxProps & {
  size: 'screen' | 'page' | number
}

type ContainerProps = BoxProps & {
  size?: 'screen' | 'page' | number
}

const Container = styled(Box)(({ size }: ContainerStyleProps) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: typeof size === 'number' ? `${size}px` : (size === 'screen' ? '100vh' : 'calc( 100vh - 110px)')
}));

const PageLoader = ({ size = 'page', ...props }: ContainerProps) => {
  return (
    <Container size={size} {...props}>
      <CircularProgress />
    </Container>
  );
};

export default memo(PageLoader);
