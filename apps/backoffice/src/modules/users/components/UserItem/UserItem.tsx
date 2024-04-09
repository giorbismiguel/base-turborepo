import { memo } from 'react'
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import { IUser } from "modules/users/interfaces/IUser";
import { ReactLink } from "security";

type UserItemProps = {
    user: IUser
    sx?: any
}

const UserItem = ({ user, sx }: UserItemProps) => {

    const userName = <ReactLink to={`/users/${user?._id}`} underline={"hover"}>
        {user?.fullName}
    </ReactLink>

    return (
        <ListItem sx={sx}>
            <ListItemAvatar>
                <Avatar src={user?.avatar} />
            </ListItemAvatar>
            <ListItemText primary={userName}
                secondary={user?.email} />
        </ListItem>
    );
}

export default memo(UserItem);