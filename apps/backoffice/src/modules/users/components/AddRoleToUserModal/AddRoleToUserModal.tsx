import { memo, useCallback } from 'react'
import {
    Button,
    Box,
    DialogActions,
    DialogContent,
    Checkbox,
    TextField,
} from "@mui/material";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { Trans, useTranslation } from "react-i18next";
import { DialogForm, Form, FormSelectAutocompleteField, HandlerError, LoadingButton } from "mui-react-common";
import type { IUser } from 'modules/users/interfaces/IUser';
import { useFindRoles } from 'modules/security/hooks/useFindRoles';
import useAddRoleToUserForm from 'modules/users/hooks/useAddRoleToUserForm';

interface AddRoleToUserModalProps {
    open: boolean,
    user: IUser | undefined,
    onClose: () => void,
}

const components = {
    bold: <strong />
};

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

function AddRoleToUserModal({
    open,
    onClose,
    user,
}: AddRoleToUserModalProps) {
    const { t } = useTranslation('users');
    const { data: roles, isLoading: loadingRoles } = useFindRoles('', { size: 1000 });

    const { isLoading, reset, onSubmit, control, error, isError } = useAddRoleToUserForm(user, onClose);

    const handleClose = useCallback(() => {
        onClose();
        reset();
    }, [onClose, reset]);

    if (loadingRoles) {
        return (
            <></>
        )
    }

    return (
        <DialogForm
            aria-labelledby="add-role-to-user-title"
            maxWidth="xs"
            onClose={handleClose}
            open={open}
            subtitle={<Trans components={components} i18nKey="users:addRolesSubtitle"
                values={{ user: user?.fullName }} />}
            title={t('addRoles')}>

            <DialogContent>
                <HandlerError error={error} />
                <Form control={control} id="form-add-roles-to-user" isLoading={isLoading} onSubmit={onSubmit}
                    size="large">
                    <Box mt={1}>
                        <FormSelectAutocompleteField
                            disableCloseOnSelect
                            error={isError}
                            getOptionLabel={(option) => option.name}
                            isOptionEqualToValue={(option, value) => option._id === value._id}
                            multiple
                            name="roles"
                            options={roles?.data || []}
                            renderInput={(params) => (
                                <TextField {...params} placeholder={t('roles')} />
                            )}
                            renderOption={(props, option, { selected }) => (
                                <li {...props}>
                                    <Checkbox
                                        checked={selected}
                                        checkedIcon={checkedIcon}
                                        icon={icon}
                                        style={{ marginRight: 8 }}
                                    />
                                    {option.name}
                                </li>
                            )}
                        />
                    </Box>
                </Form>
            </DialogContent>

            <DialogActions>
                <Button onClick={handleClose}>
                    {t('common:cancel')}
                </Button>
                <LoadingButton form="form-add-roles-to-user" loading={isLoading}
                    type="submit"
                    variant="contained">
                    {t('common:save')}
                </LoadingButton>
            </DialogActions>
        </DialogForm>
    );
}

export default memo(AddRoleToUserModal)