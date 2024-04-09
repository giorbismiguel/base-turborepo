import { memo } from 'react'
import { Table } from "admin-layout";
import Box from "@mui/material/Box";
import { useFindUsersByRole } from "modules/users/hooks/useFindUsersByRole";
import { userColumns } from "modules/security/constants/role-user.columns";
import { RoleUserListToolbar } from "modules/security/components/RoleUserListToolbar";

type RoleUsersListProps = {
    roleId: string
}

const RoleUsersList = ({ roleId }: RoleUsersListProps) => {
    const { isLoading, error, data } = useFindUsersByRole(roleId)
    return (
        <Box>
            <RoleUserListToolbar roleId={roleId} />
            <Table
                columns={userColumns}
                data={data?.data}
                total={data?.total}
                isLoading={isLoading}
                error={error}
                select
            />
        </Box>
    );
}

export default memo(RoleUsersList);