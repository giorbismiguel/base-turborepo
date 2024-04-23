import { useToggle } from "hook-utils";
import { Box, Button, Skeleton } from "@mui/material";
import { useUserDetail } from "modules/users/contexts/UserDetail";
import { memo } from 'react';
import { useTranslation } from "react-i18next";
import RoleList from "modules/users/components/UserSummary/RoleList";
import { FlexBox } from "mui-react-common";
import type { InterfaceRole } from "modules/security/interfaces";
import AddRoleToUserModal from "../AddRoleToUserModal/AddRoleToUserModal";

function UserRoleInfo() {
    const { t } = useTranslation('users');
    const { isOpen, onOpen, onClose } = useToggle(false)
    const { isLoading, user } = useUserDetail()

    if (isLoading) {
        return (
            <FlexBox flexDirection="column" gap={2} my={3} px={2}>
                <FlexBox justifyContent="space-between">
                    <Skeleton width={100} />
                    <Skeleton width={16} />
                </FlexBox>
                <FlexBox justifyContent="space-between">
                    <Skeleton width={100} />
                    <Skeleton width={16} />
                </FlexBox>
            </FlexBox>
        )
    }

    return (
        <>
            {
                Boolean(user?.roles?.length) && <RoleList roles={user?.roles as InterfaceRole[]} userId={user?._id as string} />
            }

            <Box px={2}>
                <Button
                    color="primary"
                    onClick={onOpen}
                    size="medium"
                    variant="text">
                    {t('changeRole')}
                </Button>
            </Box>

            <AddRoleToUserModal onClose={onClose} open={isOpen} user={user} />
        </>
    );
}

export default memo(UserRoleInfo);
