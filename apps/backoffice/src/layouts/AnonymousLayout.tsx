// @ts-nocheck
import { memo } from "react";
import { useToggle } from "hook-utils";
import type { ChildrenProps } from "mui-react-common";
import { Navbar } from "admin-layout";
import { Paper } from "@mui/material";
import CenterPageLayout from "./PageLayouts/CenterPageLayout";

function AnonymousLayout({ children }: ChildrenProps) {
  const { onOpen } = useToggle(false);

  return (
    <>
      <Navbar onOpenSidebar={onOpen} />
      <CenterPageLayout top>
        <Paper sx={{ padding: 4 }}>
          <div>{children}</div>
        </Paper>
      </CenterPageLayout>
    </>
  );
}

export default memo(AnonymousLayout);
