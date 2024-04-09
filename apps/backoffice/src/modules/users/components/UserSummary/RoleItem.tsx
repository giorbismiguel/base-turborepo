import {memo} from 'react'
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
import {useDeleteRolesUser} from "modules/users/hooks/useDeleteRolesUser";
import {useTranslation} from "react-i18next";
import SecurityIcon from '@mui/icons-material/Security';
import {IRole} from "modules/security/interfaces";

type RoleListProps = {
    role: IRole
    roles: IRole[]
    userId: string
}

const RoleItem = ({role, roles, userId}: RoleListProps) => {
    const {t} = useTranslation('common');
    const {isLoading, mutate} = useDeleteRolesUser(userId, roles);


    return (
        <ListItem
            key={role?._id}
            secondaryAction={
                <Tooltip title={t('delete')}>
                    <IconButton onClick={() => mutate(role?._id as string)} size={"small"} disabled={isLoading}>
                        {isLoading ? <CircularProgress size={16}/> : <CloseIcon fontSize={'small'}/>}
                    </IconButton>
                </Tooltip>
            }
        >
            <ListItemAvatar>
                <Avatar
                    alt={role?.name}
                    src={`/images/roles/${role?.avatar}.png`}
                    sx={{width: 32, height: 32, bgcolor: 'primary.dark'}}
                >
                    <SecurityIcon fontSize={'small'}/>
                </Avatar>
            </ListItemAvatar>

            <ListItemText
                primary={role?.name}
            />
        </ListItem>

    )
}

export default memo(RoleItem);