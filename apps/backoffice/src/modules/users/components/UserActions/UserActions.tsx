import {useCallback, useState, useEffect, memo} from 'react'
import {List, ListItem, ListItemText, Skeleton, Switch, Typography} from "@mui/material";
import {useUserDetail} from "modules/users/contexts/UserDetail";
import {useTranslation} from 'react-i18next';
import {Box} from '@mui/system';
import {useUpdateUser} from 'modules/users/hooks/useUpdateUser';

const UserActions = () => {
    const {t} = useTranslation('users');
    const {user, setUser, isLoading} = useUserDetail();
    const [checkedLocked, setCheckedLocked] = useState(false);
    const [checkedVerified, setCheckedVerified] = useState(false);
    const {mutate} = useUpdateUser(user);

    useEffect(() => {
        setCheckedLocked(!!user?.lock);
        setCheckedVerified(!!user?.verified);
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
                                    <Skeleton height={25} width="35%" variant="text"/>
                                    <Skeleton width={20} height={20} variant="circular"/>
                                </Box>

                                <Skeleton height={15} width="80%" variant="text"/>
                                <Skeleton height={15} width="80%" variant="text"/>
                            </Box>
                        </Box>
                    ))
                }
            </>
        )
    }

    return (
        <List dense>
            <ListItem key={`switch-list-label-lock`}>
                <ListItemText
                    id={`switch-list-label-lock`}
                    primary={t('locked')}
                    secondary={<Typography fontSize={'small'}
                                           color={'text.secondary'}>{t('lockedDescription')}</Typography>}
                />
                <Switch
                    name='lock'
                    color={'primary'}
                    edge="end"
                    checked={checkedLocked}
                    onChange={handleChange}
                />
            </ListItem>
            <ListItem key={`switch-list-label-verify`}>
                <ListItemText
                    id={`switch-list-label-verify`}
                    primary={t('verified')}
                    secondary={<Typography fontSize={'small'}
                                           color={'text.secondary'}>{t('verifiedDescription')}</Typography>}
                />
                <Switch
                    name='verified'
                    color={'primary'}
                    edge="end"
                    checked={checkedVerified}
                    onChange={handleChange}
                />
            </ListItem>
        </List>
    );
}

export default memo(UserActions);
