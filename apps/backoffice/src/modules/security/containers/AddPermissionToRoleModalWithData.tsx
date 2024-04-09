import {memo} from 'react'
import {AddPermissionToRoleModal} from "modules/security/components/AddPermissionToRoleModal";
import {useRoleRowPermission} from "modules/security/contexts/RoleRowPermissionContext";

const AddPermissionToRoleModalWithData = () => {

    const {role, onClose, isOpen} = useRoleRowPermission();

    return (
        <AddPermissionToRoleModal role={role} open={isOpen} onClose={onClose}/>
    );
}

export default memo(AddPermissionToRoleModalWithData)