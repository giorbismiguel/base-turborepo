import { memo } from "react";
import type { ChildrenProps } from "mui-react-common";
import type { BoxProps } from "@mui/material";
import { Box } from "@mui/material";

type PageLayoutProps = ChildrenProps & BoxProps;

function PageLayout({ children, ...boxProps }: PageLayoutProps) {
  return (
    <Box mt={3} {...boxProps}>
      {children}
    </Box>
  );
}

export default memo(PageLayout);
