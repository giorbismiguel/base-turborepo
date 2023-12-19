import { memo, useMemo } from "react";
import type { ChildrenProps } from "mui-react-common";
import PageLayout from "layouts/PageLayouts/PageLayout";

type CenterPageLayoutProps = ChildrenProps & {
  top?: boolean;
};

const sx = {
  margin: "24px auto 0",
  width: "100%",
  maxWidth: "1220px",
};

function CenterPageLayout({ children, top }: CenterPageLayoutProps) {
  const style = useMemo(() => {
    if (top) return { ...sx, paddingTop: "64px" };
    return sx;
  }, [top]);

  return <PageLayout sx={style}>{children}</PageLayout>;
}

export default memo(CenterPageLayout);
