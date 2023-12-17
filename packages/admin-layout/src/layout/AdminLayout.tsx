import React, { Fragment } from 'react';
import { useToggle } from 'hook-utils';
import { ChildrenProps } from 'mui-react-common';
import { Navbar } from '../components/Navbar';
import { AdminSidebar } from './AdminSidebar';
import { AdminMain } from './AdminMain';

type AdminLayoutProps = ChildrenProps;


export const AdminLayout = ({ children }: AdminLayoutProps) => {
  const { isOpen, onOpen, onClose } = useToggle(false);

  return (
    <Fragment>
      <AdminMain>
        {children}
      </AdminMain>
      <AdminSidebar onClose={onClose} open={isOpen} />
      <Navbar onOpenSidebar={onOpen} />
    </Fragment>
  );
};
