import {useCallback, useState, useEffect, memo} from 'react'
import {List, ListItem, ListItemText, Skeleton, Switch, Typography} from "@mui/material";
import {useUserDetail} from "modules/users/contexts/UserDetail";
import {useTranslation} from 'react-i18next';
import {Box} from '@mui/system';
import {useUpdateUser} from 'modules/users/hooks/useUpdateUser';
import type { IUser } from 'modules/users/interfaces/IUser';

function UserActions() {
    const {t} = useTranslation('users');
    const {user, setUser, isLoading} = useUserDetail();
    const [checkedLocked, setCheckedLocked] = useState(false);
    const [checkedVerified, setCheckedVerified] = useState(false);
    const {mutate} = useUpdateUser(user as unknown as IUser);

    useEffect(() => {
        setCheckedLocked(Boolean(user?.lock));
        setCheckedVerified(Boolean(user?.verified));
    }, [user?.lock, user?.verified]);

    const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        mutate({
            _id: user?._id,
            [event.target.name]: event.target.checked,
        });

        user && setUser && setUser({
            ...user,
            [event.target.name]: event.target.checked,
        });
    }, [setUser, user, mutate]);

    if (isLoading) {
        return (
            <>
                {
                    [...Array(2)].map((_, index) => (
                        <Box key={index} sx={{
                            my: 2,
                            mx: 2
                        }}>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                mb: 3
                            }}>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                }}>
                                    <Skeleton height={25} variant="text" width="35%"/>
                                    <Skeleton height={20} variant="circular" width={20}/>
                                </Box>

                                <Skeleton height={15} variant="text" width="80%"/>
                                <Skeleton height={15} variant="text" width="80%"/>
                            </Box>
                        </Box>
                    ))
                }
            </>
        )
    }

    return (
        <List dense>
            <ListItem key="switch-list-label-lock">
                <ListItemText
                    id="switch-list-label-lock"
                    primary={t('locked')}
                    secondary={<Typography color="text.secondary"
                                           fontSize="small">{t('lockedDescription')}</Typography>}
                />
                <Switch
                    checked={checkedLocked}
                    color="primary"
                    edge="end"
                    name='lock'
                    onChange={handleChange}
                />
            </ListItem>
            <ListItem key="switch-list-label-verify">
                <ListItemText
                    id="switch-list-label-verify"
                    primary={t('verified')}
                    secondary={<Typography color="text.secondary"
                                           fontSize="small">{t('verifiedDescription')}</Typography>}
                />
                <Switch
                    checked={checkedVerified}
                    color="primary"
                    edge="end"
                    name='verified'
                    onChange={handleChange}
                />
            </ListItem>
        </List>
    );
}

export default memo(UserActions);
