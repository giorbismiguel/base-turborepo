import React, { memo, ReactNode } from 'react';
import FormCard from '../FormCard';

type HorizontalLayoutProps = {
  children: ReactNode
}

const HorizontalLayout = ({ children }: HorizontalLayoutProps) => {

  return (
    <div className={'flex flex-row h-full'}>
      <div className={'flex-grow'}>a</div>
      <FormCard >
        <div className={'max-w-xl m-auto'}>
          {children}
        </div>
      </FormCard>
    </div>
  );

};

export default memo(HorizontalLayout);
