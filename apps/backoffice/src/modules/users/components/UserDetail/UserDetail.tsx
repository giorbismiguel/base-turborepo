import { memo } from 'react'
import { Stack, Typography } from "@mui/material";
import { USER_DETAILS_SUMMARY } from "modules/users/constants";
import { DetailStack, HandlerError } from "mui-react-common";
import { useUserDetail } from 'modules/users/contexts/UserDetail';
import AvatarUser from "modules/users/components/AvatarUser/AvatarUser";
import { SummaryWithAvatarSkeleton } from "components/CommonLoadings";
import { IUser } from "modules/users/interfaces/IUser";

const UserDetail = () => {
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
            <Stack direction="column" alignItems="center" spacing={0}>
                <AvatarUser user={user as IUser} />
                <Typography variant={'h3'} children={user?.fullName} mt={1} />
                <Typography color={'text.secondary'} children={user?.email} />
            </Stack>

            <DetailStack details={USER_DETAILS_SUMMARY} data={user} />
        </Stack>
    );

}

export default memo(UserDetail);
