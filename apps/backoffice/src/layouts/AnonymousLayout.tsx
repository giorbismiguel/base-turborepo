// @ts-nocheck
import { memo } from "react";
import { useToggle } from "hook-utils";
import type { ChildrenProps } from "mui-react-common";
import { Navbar } from "admin-layout";
import { CenterPageLayout } from "layouts/index";
import { Paper } from "@mui/material";

function AnonymousLayout({ children }: ChildrenProps) {
  const { onOpen } = useToggle(false);

  return (
    <>
      <Navbar onOpenSidebar={onOpen} sx={{}} />
      <CenterPageLayout top>
        <Paper sx={{ padding: 4 }}>
          <div>{children}</div>
        </Paper>
      </CenterPageLayout>
    </>
  );
}

export default memo(AnonymousLayout);
