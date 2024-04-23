import { memo } from 'react'
import { Stack, Typography } from "@mui/material";
import { USER_DETAILS_SUMMARY } from "modules/users/constants";
import { DetailStack, HandlerError } from "mui-react-common";
import { useUserDetail } from 'modules/users/contexts/UserDetail';
import AvatarUser from "modules/users/components/AvatarUser/AvatarUser";
import { SummaryWithAvatarSkeleton } from "components/CommonLoadings";
import type { InterfaceUser } from "modules/users/interfaces/IUser";

function UserDetail() {
    const { user, isLoading, error } = useUserDetail();
    if (isLoading) {
        return (
            <SummaryWithAvatarSkeleton />
        )
    }
    if (error) {
        return (
            <HandlerError error={error} />
        )
    }

    return (
        <Stack p={2} pt={5} spacing={2}>
            <Stack alignItems="center" direction="column" spacing={0}>
                <AvatarUser user={user as InterfaceUser} />
                <Typography mt={1} variant="h3">{user?.fullName}</Typography>
                <Typography color="text.secondary" title={user?.fullName}>{user?.email}</Typography>
            </Stack>

            <DetailStack data={user} details={USER_DETAILS_SUMMARY} />
        </Stack>
    );

}

export default memo(UserDetail);
