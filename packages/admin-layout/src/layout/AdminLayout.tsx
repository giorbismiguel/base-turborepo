import React, { Fragment } from "react";
import { useToggle } from "hook-utils";
import { ChildrenProps } from "mui-react-common";
import { Navbar } from "../components/Navbar";
import AdminMain from "./AdminMain";
import AdminSidebar from "./AdminSidebar";

type AdminLayoutProps = ChildrenProps;

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const { isOpen, onOpen, onClose } = useToggle(false);

  return (
    <Fragment>
      <AdminMain>{children}</AdminMain>
      <AdminSidebar onClose={onClose} open={isOpen} />
      <Navbar onOpenSidebar={onOpen} />
    </Fragment>
  );
};

AdminLayout.defaultProps = {
  children: null,
};

export default AdminLayout;
