import { memo } from 'react'
import { Stack } from "@mui/material";
import { useToggle } from "hook-utils";
import { DeleteRowAction, EditRowActions } from 'admin-layout';
import { useParamsLink } from 'security';
import { useDeleteUser } from 'modules/users/hooks/useDeleteUser';

interface UserStatusProps {
    rowId: string
}

function UserRowActions({ rowId }: UserStatusProps) {
    const { isOpen, onClose, onOpen } = useToggle();

    const { mutate, isLoading, error } = useDeleteUser(rowId, onClose);

    const handleEdit = useParamsLink({ edit: rowId });

    return (
        <Stack direction="row" spacing={1}>
            <EditRowActions
                onClick={handleEdit}
            />

            <DeleteRowAction
                error={error}
                isLoading={isLoading}
                isOpen={isOpen}
                onClose={onClose}
                onDelete={mutate}
                onOpen={onOpen}
            />
        </Stack>
    );

}

export default memo(UserRowActions);