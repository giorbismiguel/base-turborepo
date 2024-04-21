import { memo } from 'react'
import {
    Avatar, Chip, ListItem,
    ListItemAvatar,
    ListItemText,
} from "@mui/material";
import { ReactLink } from "security";
import SecurityIcon from "@mui/icons-material/Security";
import type { IRole } from "modules/security/interfaces";

interface UserCellProps {
    role: IRole
}

function RoleAvatar({ size = 32, role }: { size?: number, role: IRole }) {
    return (
        <Avatar
            alt={role?.name}
            src={`/images/roles/${String(role?.avatar ?? '')}.png`}
            sx={{ width: size, height: size, bgcolor: 'primary.dark' }}
        >
            <SecurityIcon fontSize="small" />
        </Avatar>
    )
}

function RoleCell({ role }: UserCellProps) {
    return (

        <ListItem>
            <ListItemAvatar>
                <RoleAvatar role={role} />
            </ListItemAvatar>

            <ListItemText
                primary={<ReactLink to={`/security/roles/${String(role._id)}`} underline="hover">{role.name}</ReactLink>}
            />
        </ListItem>

    );
}
export function RoleChip({ role }: UserCellProps) {
    return <Chip
        avatar={<RoleAvatar role={role} size={24} />}
        label={<ReactLink to={`/security/roles/${String(role?._id)}`} underline="hover">{role?.name}</ReactLink>}
        variant="outlined"
    />
}

export default memo(RoleCell);