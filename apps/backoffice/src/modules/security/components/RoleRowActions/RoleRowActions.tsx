import { memo, useCallback } from 'react'
import { Stack } from "@mui/material";
import { useToggle } from "hook-utils";
import { useParamsLink } from "security";
import { useDeleteRole } from "modules/security/hooks/useDeleteRole";
import { DeleteRowAction, EditRowActions, RowActions } from "admin-layout";
import SecurityIcon from '@mui/icons-material/Security';
import { useRoleRowPermission } from "modules/security/contexts/RoleRowPermissionContext";
import { IRole } from "modules/security/interfaces";
import { useTranslation } from 'react-i18next';

const SecurityIconRole = () => {
    return (<SecurityIcon fontSize={'small'} />);
}

const RoleRowActions = (data: IRole) => {
    const rowId = data._id as string;
    const { isOpen, onClose, onOpen } = useToggle();
    const { t } = useTranslation('role');
    const { onOpen: openPermissions } = useRoleRowPermission();

    const handleEdit = useParamsLink({ edit: rowId });

    const { mutate, isLoading, error } = useDeleteRole(rowId, onClose);

    const handleOpen = useCallback(() => {
        openPermissions(data)
    }, [data, openPermissions])


    return (
        <Stack direction="row" spacing={1}>
            <RowActions
                tooltip={t('role:permissionManage')}
                onClick={handleOpen}
                icon={SecurityIconRole}
            />

            <EditRowActions
                onClick={handleEdit}
            />

            <DeleteRowAction
                isOpen={isOpen}
                onOpen={onOpen}
                onClose={onClose}
                error={error}
                isLoading={isLoading}
                onDelete={mutate}
            />
        </Stack>
    );
}

export default memo(RoleRowActions);