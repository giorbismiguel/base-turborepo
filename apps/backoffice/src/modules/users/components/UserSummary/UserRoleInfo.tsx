import { useToggle } from "@dfl/hook-utils";
import { Box, Button, Skeleton } from "@mui/material";
import { useUserDetail } from "modules/users/contexts/UserDetail";
import { memo } from 'react';
import { useTranslation } from "react-i18next";
import AddRoleToUserModal from "../AddRoleToUserModal/AddRoleToUserModal";
import RoleList from "modules/users/components/UserSummary/RoleList";
import { FlexBox } from "mui-react-common";
import { IRole } from "modules/security/interfaces";

const UserRoleInfo = () => {
    const { t } = useTranslation('users');
    const { isOpen, onOpen, onClose } = useToggle(false)
    const { isLoading, user } = useUserDetail()

    if (isLoading) {
        return (
            <FlexBox px={2} my={3} gap={2} flexDirection={'column'}>
                <FlexBox justifyContent={"space-between"}>
                    <Skeleton width={100} />
                    <Skeleton width={16} />
                </FlexBox>
                <FlexBox justifyContent={"space-between"}>
                    <Skeleton width={100} />
                    <Skeleton width={16} />
                </FlexBox>
            </FlexBox>
        )
    }

    return (
        <>
            {
                !!user?.roles?.length && <RoleList roles={user?.roles as IRole[]} userId={user?._id as string} />
            }

            <Box px={2}>
                <Button
                    onClick={onOpen}
                    variant="text"
                    color={'primary'}
                    size="medium">
                    {t('changeRole')}
                </Button>
            </Box>

            <AddRoleToUserModal user={user} open={isOpen} onClose={onClose} />
        </>
    );
}

export default memo(UserRoleInfo);
