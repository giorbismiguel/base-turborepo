import React, { memo } from 'react';
import FormCard from '../FormCard';
import { Stack, StackProps } from '@mui/material';

const CenterLayout = ({ children, maxWidth, ...props }: StackProps) => {

  return (
    <Stack alignItems={'center'} justifyContent={'center'} {...props}>
      <FormCard rounded maxWidth={maxWidth}>
        <div>
          {children}
        </div>
      </FormCard>
    </Stack>
  );

};

export default memo(CenterLayout);
