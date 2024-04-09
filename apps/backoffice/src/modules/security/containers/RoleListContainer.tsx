import { memo } from 'react'
import { Table } from "admin-layout";
import Box from "@mui/material/Box";
import { useFindRolesTable } from "modules/security/hooks/useFindRoles";
import { roleColumns } from "modules/security/constants/role.columns";
import { RoleListToolbar } from "modules/security/components/RoleListToolbar";
import RoleEditModal from "modules/security/containers/RoleEditModal";
import AddPermissionToRoleModalWithData from "modules/security/containers/AddPermissionToRoleModalWithData";
import { RoleRowPermissionProvider } from "modules/security/contexts/RoleRowPermissionContext";

const RoleListContainer = () => {
    const { isLoading, error, data } = useFindRolesTable()
    return (
        <Box>
            <RoleRowPermissionProvider>
                <RoleListToolbar />
                <Table columns={roleColumns} data={data?.data} total={data?.total} isLoading={isLoading} error={error}
                    select />
                <RoleEditModal />
                <AddPermissionToRoleModalWithData />
            </RoleRowPermissionProvider>
        </Box>
    );

}

export default memo(RoleListContainer);