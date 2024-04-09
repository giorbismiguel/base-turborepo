import {memo} from 'react';
import RoleCreateModal from "modules/security/containers/RoleCreateModal";
import {useRoleDetail} from "modules/security/contexts";

type RoleDetailEditModalProps = {
    onClose: () => void
    isOpen: boolean
}
const RoleDetailEditModal = ({onClose, isOpen}: RoleDetailEditModalProps) => {
    const {data, isLoading} = useRoleDetail();

    return (
        <RoleCreateModal
            title={'edit'}
            open={isOpen}
            onClose={onClose}
            initValue={data}
            loadingInitData={isLoading}
        />
    );

}

export default memo(RoleDetailEditModal);