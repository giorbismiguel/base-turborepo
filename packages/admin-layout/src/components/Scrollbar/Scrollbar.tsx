import React, { forwardRef } from "react";
import "simplebar/dist/simplebar.min.css";
import SimpleBar from "simplebar-react";
import { styled, Theme } from "@mui/material";
import { ChildrenProps } from "mui-react-common";
import { SxProps } from "@mui/system";

type ScrollProps = ChildrenProps & {
  sx: SxProps<Theme>;
};

const ScrollbarRoot = styled(SimpleBar)``;

// eslint-disable-next-line react/display-name
export const Scrollbar = forwardRef((props: ScrollProps, ref) => {
  // @ts-ignore
  return <ScrollbarRoot ref={ref} {...props} />;
});
