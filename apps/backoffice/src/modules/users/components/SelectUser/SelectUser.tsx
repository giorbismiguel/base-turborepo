import { memo } from 'react'
import { Avatar, Checkbox, ListItemAvatar, ListItemText } from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { FormAsyncSelectAutocompleteField } from "mui-react-common";
import UserServices from "modules/users/services/user.services";
import { USERS_LIST_KEY } from "modules/users/constants/queries";

type SelectUserProps = {
    name: string
    placeholder?: string
    label?: string
    multiple?: boolean
}

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const isOptionEqualToValue = (option: any, value: any) => {
    const optionId = option?._id || option;
    const valueId = value?._id || value;
    return optionId === valueId;
}

const SelectUser = ({ name, placeholder, multiple = true, label }: SelectUserProps) => {
    return (
        <FormAsyncSelectAutocompleteField
            multiple={multiple}
            name={name}
            fetchFunc={UserServices.search}
            fetchValueFunc={UserServices.search}
            loadValue
            disableCloseOnSelect={multiple}
            label={label}
            queryKey={USERS_LIST_KEY}
            autoHighlight
            id={`multiple-${name}`}
            isOptionEqualToValue={isOptionEqualToValue}
            getOptionLabel={(option) => option.fullName}
            renderOption={(props, option, { selected }) => (
                <li {...props} key={option._id}>

                    <ListItemAvatar>
                        <Avatar
                            alt={option.fullName}
                            src={option.avatar}
                        />
                    </ListItemAvatar>

                    <ListItemText primary={option.fullName}
                        secondary={option.email} />
                    <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8 }}
                        checked={selected}
                    />

                </li>
            )}
            placeholder={placeholder}
        />
    );
}

export default memo(SelectUser);