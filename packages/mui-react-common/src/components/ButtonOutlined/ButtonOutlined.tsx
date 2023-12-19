import React, { memo } from "react";
import { Button, ButtonProps, styled } from "@mui/material";

const ButtonSt = styled(Button)<ButtonProps>(({ theme }) => ({
  background: theme.palette.background.paper,
}));

const ButtonOutlined = (props: ButtonProps) => {
  // @ts-ignore
  return <ButtonSt variant={"outlined"} {...props} />;
};

export default memo(ButtonOutlined);
