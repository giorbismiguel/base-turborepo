import { memo } from 'react'
import { Table } from "admin-layout";
import { useFindUsersTable } from "modules/users/hooks/useFindUsersTable";
import { UserListToolbar } from "modules/users/components/UserListToolbar";
import Box from "@mui/material/Box";
import { userColumns } from "modules/users/constants/user.columns";
import UserEditModal from './UserEditModal';
import { UserTabsFilter } from "modules/users/components/UserTabsFilter";

const UserListContainer = () => {
    const { isLoading, error, data } = useFindUsersTable()

    return (
        <Box>
            <UserTabsFilter />
            <UserListToolbar />
            <Table columns={userColumns} data={data?.data} total={data?.total} isLoading={isLoading} error={error}
                select />
            <UserEditModal />
        </Box>
    );

}

export default memo(UserListContainer);