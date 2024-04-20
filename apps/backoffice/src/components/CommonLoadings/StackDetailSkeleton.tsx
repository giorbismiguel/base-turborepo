import {memo} from 'react'
import {BoxProps, Skeleton} from "@mui/material";
import {FlexBox} from "mui-react-common";
import Box from "@mui/material/Box";

const widths = ['50%', '40%', '60%', '45%']

const StackDetailSkeleton = ({row = 4, children, ...props}: BoxProps & { row?: number }) => {
    const rows = [];
    for (let i = 0; i < row; i++) {
        rows.push(
            <FlexBox gap={1} mb={3} key={i} justifyContent={"space-between"}>
                <Skeleton width={'30%'}/>
                <Skeleton animation="wave" width={widths[i % widths.length]}/>
            </FlexBox>
        )
    }
    return (
        <Box {...props} >
            {children}
            {rows}
        </Box>
    );

}

export default memo(StackDetailSkeleton);