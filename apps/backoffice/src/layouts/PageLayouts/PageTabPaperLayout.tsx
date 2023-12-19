import { memo } from "react";
import PagePaperLayout from "layouts/PageLayouts/PagePaperLayout";
import { Box } from "@mui/material";
import { RouterTab, type TabRouteType } from "security";
import type { ChildrenProps } from "mui-react-common";

type PageTabPaperLayoutProps = ChildrenProps & {
  prefix: string;
  tabs: TabRouteType[];
};

function PageTabPaperLayout({
  children,
  prefix,
  tabs,
}: PageTabPaperLayoutProps) {
  return (
    <PagePaperLayout nPadding>
      <Box pt={1}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            paddingX: { xs: 0, md: 2 },
          }}
        >
          <RouterTab
            prefix={prefix}
            scrollButtons="auto"
            tabs={tabs}
            variant="scrollable"
          />
        </Box>
        <Box sx={{ padding: { xs: 2, md: 4 }, paddingTop: { xs: 2, md: 3 } }}>
          {children}
        </Box>
      </Box>
    </PagePaperLayout>
  );
}

export default memo(PageTabPaperLayout);
