import { memo } from 'react'
import { FormAsyncSelectAutocompleteField } from "mui-react-common";
import { IRole } from "modules/security/interfaces";
import { RoleService } from "modules/security/services";
import { ROLES_LIST_KEY } from "modules/security/constants/queries";
import { Checkbox } from "@mui/material";

type SelectRoleProps = {
    name: string,
    label?: string,
    placeholder?: string,
    multiple?: boolean
}

const renderLabel = (option: IRole) => option.name || '';

const renderOption = (props: any, option: IRole, { selected }: any) => {
    return (
        <li {...props} key={option._id as string}>
            <Checkbox
                style={{ marginRight: 8 }}
                checked={selected}
            />
            {option.name}
        </li>
    );
};

const SelectRole = ({ name, multiple, label, placeholder }: SelectRoleProps) => {

    return (
        <FormAsyncSelectAutocompleteField
            multiple={multiple}
            label={label}
            placeholder={placeholder}
            name={name}
            disableCloseOnSelect={multiple}
            fetchFunc={RoleService.search}
            queryKey={ROLES_LIST_KEY}
            autoHighlight
            id="select-roles"
            getOptionLabel={renderLabel}
            renderOption={renderOption}
        />
    );

}

export default memo(SelectRole);