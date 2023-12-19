import { memo } from "react";
import { useToggle } from "hook-utils";
import type { ChildrenProps } from "mui-react-common";
import { AdminMain } from "admin-layout";
import Sidebar from "layouts/Sidebar/Sidebar";
import Navbar from "layouts/Navbar/Navbar";

function MainLayout({ children }: ChildrenProps) {
  const { isOpen, onOpen, onClose } = useToggle(false);

  return (
    <>
      <AdminMain>{children}</AdminMain>
      <Sidebar onClose={onClose} open={isOpen} />
      <Navbar onOpenSidebar={onOpen} />
    </>
  );
}

export default memo(MainLayout);
