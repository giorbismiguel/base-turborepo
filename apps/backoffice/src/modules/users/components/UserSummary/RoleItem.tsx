import { memo } from 'react'
import {
    Avatar,
    ListItem,
    ListItemAvatar,
    ListItemText,
    IconButton,
    Tooltip,
    CircularProgress
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useDeleteRolesUser } from "modules/users/hooks/useDeleteRolesUser";
import { useTranslation } from "react-i18next";
import SecurityIcon from '@mui/icons-material/Security';
import type { InterfaceRole } from "modules/security/interfaces";

interface RoleListProps {
    role: InterfaceRole
    roles: InterfaceRole[]
    userId: string
}

function RoleItem({ role, roles, userId }: RoleListProps) {
    const { t } = useTranslation('common');
    const { isLoading, mutate } = useDeleteRolesUser(userId, roles);


    return (
        <ListItem
            key={role?._id}
            secondaryAction={
                <Tooltip title={t('delete')}>
                    <IconButton disabled={isLoading} onClick={() => mutate(role?._id as unknown as string)} size="small">
                        {isLoading ? <CircularProgress size={16} /> : <CloseIcon fontSize="small" />}
                    </IconButton>
                </Tooltip>
            }
        >
            <ListItemAvatar>
                <Avatar
                    alt={role?.name}
                    src={`/images/roles/${String(role?.avatar)}.png`}
                    sx={{ width: 32, height: 32, bgcolor: 'primary.dark' }}
                >
                    <SecurityIcon fontSize="small" />
                </Avatar>
            </ListItemAvatar>

            <ListItemText
                primary={role?.name}
            />
        </ListItem>

    )
}

export default memo(RoleItem);