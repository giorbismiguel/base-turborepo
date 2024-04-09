import { memo } from 'react'
import { Avatar, Stack, Typography } from "@mui/material";
import { FlexBox } from "mui-react-common";
import { ReactLink } from "security";

type UserCellProps = {
    userId: string,
    name: string,
    email?: string,
    avatar: string,
}

const avatarSx = { marginRight: 1 };

const UserCell = ({ userId, name, email, avatar }: UserCellProps) => {
    return (
        <ReactLink to={`/users/${userId}/general`} underline={"hover"}>
            <FlexBox alignItems={'center'}>
                <Avatar alt={name} sx={avatarSx} src={avatar} />
                <Stack>
                    <Typography>{name}</Typography>
                    <Typography color={'text.secondary'} sx={{ textDecoration: 'none!important' }}>{email}</Typography>
                </Stack>
            </FlexBox>
        </ReactLink>
    );

}

export default memo(UserCell);