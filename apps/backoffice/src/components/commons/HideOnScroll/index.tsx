import React, {FC, memo} from "react";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import {HideOnScrollProps} from "./HideOnScroll.types";

const HideOnScroll: FC<HideOnScrollProps> = (props) => {
  const {children} = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

export default memo(HideOnScroll);
