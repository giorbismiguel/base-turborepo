import { memo, useMemo } from 'react'
import { Stack } from "@mui/material";
import { useToggle } from "@dfl/hook-utils";
import { TableToolbar, TableToolbarActions, TablaHeaderOptions } from "admin-layout";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useTranslation } from "react-i18next";
import AddUserToRoleModal from "modules/security/containers/AddUserToRoleModal";
import { useDeleteManyRoleBySelection } from "modules/security/hooks/useDeleteManyRoleBySelection";
import { LoadingButton } from "mui-react-common";

const useToolbarSetting = () => {
    const { isOpen, onClose, onOpen } = useToggle(false);
    const settings = useMemo<TablaHeaderOptions>(() => {
        return {
            actions: {
                createAction: onOpen
            }
        }
    }, [onOpen]);

    return {
        isOpen,
        onClose,
        settings
    }
}
const RoleUserListToolbar = ({ roleId }: { roleId: string }) => {
    const { isOpen, settings, onClose } = useToolbarSetting();
    const { t } = useTranslation('common');
    const { isLoading, mutate } = useDeleteManyRoleBySelection(roleId);

    return (
        <>
            <TableToolbar selectActions={
                <Stack direction={'row'} spacing={1}>
                    <LoadingButton variant={'contained'}
                        startIcon={<DeleteOutlineIcon />}
                        color={'error'}
                        loading={isLoading}
                        onClick={() => mutate()}>
                        {t('delete')}
                    </LoadingButton>
                </Stack>
            }>
                <TableToolbarActions settings={settings} />
            </TableToolbar>
            <AddUserToRoleModal open={isOpen} onClose={onClose} />
        </>
    );
}


export default memo(RoleUserListToolbar);