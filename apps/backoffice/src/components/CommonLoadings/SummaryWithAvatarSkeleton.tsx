import {memo} from 'react'
import {FlexBox} from "mui-react-common";
import {Skeleton} from "@mui/material";
import StackDetailSkeleton from "./StackDetailSkeleton";

const SummaryWithAvatarSkeleton = () => {

    return (
        <>
            <StackDetailSkeleton row={2} sx={{padding: {xs: 1, md: 2}}}>
                <FlexBox  flexDirection={'column'} alignItems={"center"}>
                    <Skeleton variant="circular" width={100} height={100} sx={{mb: 2}}/>
                    <Skeleton width={'30%'} sx={{mb: 3}}/>
                </FlexBox>
            </StackDetailSkeleton>
        </>
    );

}

export default memo(SummaryWithAvatarSkeleton);