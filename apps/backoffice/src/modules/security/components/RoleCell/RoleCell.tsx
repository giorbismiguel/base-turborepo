import { memo } from 'react'
import {
    Avatar, Chip, ListItem,
    ListItemAvatar,
    ListItemText,
} from "@mui/material";
import { ReactLink } from "security";
import SecurityIcon from "@mui/icons-material/Security";
import { IRole } from "modules/security/interfaces";

type UserCellProps = {
    role: IRole
}

const RoleAvatar = ({ size = 32, role }: { size?: number, role: IRole }) => {
    return (
        <Avatar
            alt={role?.name}
            src={`/images/roles/${role?.avatar}.png`}
            sx={{ width: size, height: size, bgcolor: 'primary.dark' }}
        >
            <SecurityIcon fontSize={'small'} />
        </Avatar>
    )
}

const RoleCell = ({ role }: UserCellProps) => {
    return (

        <ListItem>
            <ListItemAvatar>
                <RoleAvatar role={role} />
            </ListItemAvatar>

            <ListItemText
                primary={<ReactLink to={`/security/roles/${role._id}`} underline={"hover"}>{role.name}</ReactLink>}
            />
        </ListItem>

    );
}
export const RoleChip = ({ role }: UserCellProps) => {
    return <Chip
        avatar={<RoleAvatar role={role} size={24} />}
        label={<ReactLink to={`/security/roles/${role?._id}`} underline={"hover"}>{role?.name}</ReactLink>}
        variant="outlined"
    />
}

export default memo(RoleCell);