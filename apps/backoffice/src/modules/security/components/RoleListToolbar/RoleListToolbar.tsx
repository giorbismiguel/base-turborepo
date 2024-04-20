import { memo, useMemo } from 'react'
import { Stack } from "@mui/material";
import { useToggle } from "hook-utils";
import { TableToolbar, TableToolbarActions, TablaHeaderOptions } from "admin-layout";
import RoleCreateModal from "modules/security/containers/RoleCreateModal";
import DeleteButton from "components/DeleteAction/DeleteButton";
import { useDeleteManyRoles } from "modules/security/hooks/useDeleteManyRoles";

const useToolbarSetting = () => {
    const { isOpen, onClose, onOpen } = useToggle(false);
    const settings = useMemo<TablaHeaderOptions>(() => {
        return {
            actions: {
                createAction: onOpen,
                export: true
            }
        }
    }, [onOpen]);

    return {
        isOpen,
        onClose,
        settings
    }
}

const RoleListToolbar = () => {
    const { isOpen, settings, onClose } = useToolbarSetting();
    const { mutate, isLoading } = useDeleteManyRoles();
    return (
        <>
            <TableToolbar selectActions={<Stack direction={'row'} spacing={1}>
                <DeleteButton isLoading={isLoading} onDelete={mutate} many />
            </Stack>}>
                <TableToolbarActions settings={settings} />
            </TableToolbar>
            <RoleCreateModal open={isOpen} onClose={onClose} />
        </>
    );

}

export default memo(RoleListToolbar);