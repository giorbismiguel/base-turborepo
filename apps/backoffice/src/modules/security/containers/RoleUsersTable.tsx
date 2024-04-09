import { memo } from 'react'
import { TableProvider } from "admin-layout";
import { RoleUsersList } from "modules/security/components/RoleUsersList";
import { useRoleDetail } from "modules/security/contexts";
import { Paper } from "@mui/material";

const RoleUsersTable = () => {
    const { roleId } = useRoleDetail();
    return (
        <Paper sx={{ marginBottom: 3, padding: 4 }}>
            <TableProvider id={'role-users'}>
                <RoleUsersList roleId={roleId} />
            </TableProvider>
        </Paper>
    );

}

export default memo(RoleUsersTable);