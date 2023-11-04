import React from "react";
import {Box, BoxProps} from "@mui/material";

type FlexBoxProps = BoxProps & {}

const FlexBox = ({
                     children,
                     ...props
                 }: FlexBoxProps) =>
    <Box display="flex" {...props}>
        {children}
    </Box>;

export default FlexBox;