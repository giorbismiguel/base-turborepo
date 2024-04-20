import { memo, useMemo } from 'react'
import { Button, Stack } from "@mui/material";
import { useToggle } from "hook-utils";
import { TableToolbar, TableToolbarActions, TablaHeaderOptions } from "admin-layout";
import UserCreateModal from "modules/users/containers/UserCreateModal";

const useToolbarSetting = () => {
    const { isOpen, onClose, onOpen } = useToggle(false);
    const settings = useMemo<TablaHeaderOptions>(() => {
        return {
            filter: {
                disabled: true
            },
            actions: {
                createAction: onOpen,
                export: false,
            }
        }
    }, [onOpen]);

    return {
        isOpen,
        onClose,
        settings
    }
}

const UserListToolbar = () => {
    const { isOpen, settings, onClose } = useToolbarSetting();

    return (
        <>
            <TableToolbar selectActions={<Stack direction={'row'} spacing={1}>
                <Button variant={'contained'}>delete</Button>
                <Button variant={'contained'}>delete</Button>
                <Button variant={'contained'}>delete</Button>
                <Button variant={'contained'}>delete</Button>
            </Stack>}>
                <TableToolbarActions settings={settings}>
                </TableToolbarActions>
            </TableToolbar>
            <UserCreateModal open={isOpen} onClose={onClose} title='create' />
        </>
    );

}

export default memo(UserListToolbar);