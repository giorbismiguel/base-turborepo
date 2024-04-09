import {memo} from 'react'
import {Box, Skeleton} from "@mui/material";


const Loading = () => {

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Skeleton variant="circular" width={50} height={50} sx={{
                mt: 2,
            }}/>

            <Skeleton variant="text" width={200} height={20} sx={{
                my: 2,
            }}/>

            <Skeleton variant="rectangular" width={200} height={50} sx={{
                mb: 2,
            }}/>
        </Box>
    );

}

export default memo(Loading);