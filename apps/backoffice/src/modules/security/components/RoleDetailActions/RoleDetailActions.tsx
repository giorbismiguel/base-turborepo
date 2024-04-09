import { memo } from 'react'
import { Button, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";
import RoleDetailEditModal from "modules/security/containers/RoleDetailEditModal";
import { useToggle } from "@dfl/hook-utils";
import { DeleteAction } from 'components/DeleteAction';
import { useParams } from 'react-router';
import { useDeleteRole } from 'modules/security/hooks/useDeleteRole';
import { useNavigate } from "react-router-dom";

const RoleDetailActions = () => {
    let { id } = useParams();
    let navigate = useNavigate();

    const { t } = useTranslation('role');
    const { isOpen, onOpen, onClose } = useToggle(false)
    const { isOpen: isOpenDelete, onClose: handleOnCloseDelete, onOpen: handleOnOpenDelete } = useToggle()

    const onDelete = () => {
        navigate('/security/roles');
    }

    const { mutate } = useDeleteRole(id || '', onDelete)

    return (
        <>
            <Stack spacing={2} p={2} pt={4}>
                <Button variant={"outlined"} onClick={onOpen}>{t('edit')}</Button>
                <Button variant={"outlined"} color={'error'} onClick={handleOnOpenDelete}>{t('delete')}</Button>
            </Stack>
            <RoleDetailEditModal isOpen={isOpen} onClose={onClose} />
            <DeleteAction
                open={isOpenDelete}
                onClose={handleOnCloseDelete}
                onDelete={mutate}
            />
        </>
    );

}

export default memo(RoleDetailActions);