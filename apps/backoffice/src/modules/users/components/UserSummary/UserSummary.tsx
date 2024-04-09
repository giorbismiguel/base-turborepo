import {Divider, Stack} from '@mui/material';
import UserRoleInfo from "modules/users/components/UserSummary/UserRoleInfo";
import {memo} from 'react';
import {UserActions} from "modules/users/components/UserActions";
import {UserDetail} from "modules/users/components/UserDetail";

const UserSummary = () =>(
    <Stack direction={'column'} divider={<Divider orientation="horizontal" light/>} spacing={0}>
        <UserDetail/>
        <UserRoleInfo/>
        <UserActions/>
    </Stack>
);

export default memo(UserSummary);
