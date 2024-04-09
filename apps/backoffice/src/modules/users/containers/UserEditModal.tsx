import { useCallback, memo } from 'react'
import { useSearchParams } from 'react-router-dom';
import { useFindOneUsers } from '../hooks/useFindOneUsers';
import UserCreateModal from './UserCreateModal'
import { useSearchParamsChange } from "security";

const UserEditModal = () => {
    let [searchParams] = useSearchParams();
    const entityId = searchParams.get('edit');
    const { isLoading, data, error } = useFindOneUsers(entityId);
    const { removeField } = useSearchParamsChange('edit');

    const handleCloseEdit = useCallback(() => {
        removeField('edit')
    }, [removeField]);

    return (
        <UserCreateModal
            title='edit'
            open={!!entityId}
            onClose={handleCloseEdit}
            initValue={data}
            loadingInitData={isLoading}
            dataError={error}
            userId={entityId}
        />
    )
}

export default memo(UserEditModal);