import { memo, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import { useFindUsers } from "modules/users/hooks/useFindUsersTable";
import { SkeletonList } from 'mui-react-common';

type SelectUserListProps = {
    search: string
}

const SelectUserList = ({ search }: SelectUserListProps) => {
    const [checked, setChecked] = useState<string[]>([]);
    const { isLoading, data } = useFindUsers(search);

    const handleToggle = (value: string) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    if (isLoading) {
        return <SkeletonList numberItemsToShow={9} />
    }

    return (
        <List dense sx={{ width: '100%' }}>
            {data?.data?.map((user) => {
                const value: string = user._id as string;
                const labelId = `checkbox-list-secondary-label-${value}`;
                const selected = checked.indexOf(value) !== -1;
                const handleChange = handleToggle(value);

                return (
                    <ListItem
                        key={value}
                        secondaryAction={
                            <Checkbox
                                edge="end"
                                onChange={handleChange}
                                checked={selected}
                                inputProps={{ 'aria-labelledby': labelId }}
                            />
                        }
                        disablePadding
                    >
                        <ListItemButton selected={selected} onClick={handleChange}>
                            <ListItemAvatar>
                                <Avatar
                                    alt={user.fullName}
                                    src={user.avatar}
                                />
                            </ListItemAvatar>
                            <ListItemText id={labelId} primary={user.fullName}
                                secondary={user.email} />
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </List>
    );
}

export default memo(SelectUserList)