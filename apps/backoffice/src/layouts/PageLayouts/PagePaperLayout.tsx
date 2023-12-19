import type { ReactNode } from "react";
import { memo } from "react";
import type { ChildrenProps } from "mui-react-common";
import { FlexBox } from "mui-react-common";
import PageLayout from "layouts/PageLayouts/PageLayout";
import { Paper, Typography } from "@mui/material";

type PagePaperLayoutProps = ChildrenProps & {
  title?: string;
  nPadding?: boolean;
  generalAction?: ReactNode;
};

const nPaddingSx = {};
const sx = {
  padding: {
    xs: 1,
    sm: 2,
    xl: 4,
  },
  paddingTop: {
    xs: 1,
    sm: 2,
    xl: 3,
  },
};

const titleSx = {};

function PagePaperLayout({ children, title, nPadding }: PagePaperLayoutProps) {
  return (
    <PageLayout>
      <Paper sx={nPadding ? nPaddingSx : sx}>
        <FlexBox
          alignItems="center"
          flexWrap="wrap"
          gap={2}
          justifyContent="space-between"
        >
          <Typography sx={titleSx} variant="h1">
            {title}
          </Typography>
          <FlexBox flexWrap="wrap" gap={2} id="page-general-actions" />
        </FlexBox>
        {children}
      </Paper>
    </PageLayout>
  );
}

export default memo(PagePaperLayout);
