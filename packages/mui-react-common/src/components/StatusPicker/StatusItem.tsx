import React, { JSXElementConstructor, ReactElement } from "react";
import { Chip, ChipProps, styled } from "@mui/material";

export type IStatus = {
  _id: string;
  title: string;
  color: string;
  icon?: ReactElement<any, string | JSXElementConstructor<any>> | undefined;
};

export const ThemeType: { [key: string]: string } = {
  primary: "primary",
  secondary: "secondary",
  error: "error",
  info: "info",
  success: "success",
  warning: "warning",
};

type StatusProps = ChipProps & {
  value: IStatus;
  statusColor?: string;
  fullWidth?: boolean;
  pointer?: boolean;
  size?: "small" | "medium" | undefined;
};

const WrapperChip = ({
  statusColor,
  fullWidth,
  pointer,
  ...props
}: StatusProps) => {
  // @ts-ignore
  return <Chip {...props} />;
};

export const Status = styled(WrapperChip)<{
  statusColor?: string;
  fullWidth: boolean;
  pointer: boolean;
}>(({ statusColor, fullWidth, pointer }) => ({
  cursor: "pointer",
  ...(fullWidth ? { width: "100%" } : {}),
  ...(statusColor ? { background: statusColor } : {}),
  ...(pointer ? { cursor: "pointer" } : {}),
}));

export const StatusItem = ({
  value,
  fullWidth,
  pointer,
  size = "small",
}: StatusProps) => {
  let statusColor: string | undefined = value.color;
  let type;
  if (ThemeType[value.color]) {
    statusColor = undefined;
    type = value.color;
  }
  return (
    <Status
      label={value.title}
      icon={value.icon}
      size={size}
      // @ts-ignore
      pointer={pointer}
      statusColor={statusColor}
      // @ts-ignore
      color={type || "primary"}
      variant={"filled"}
      // @ts-ignore
      fullWidth={fullWidth}
    />
  );
};
