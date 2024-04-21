import { useCallback, memo } from 'react'
import { useSearchParams } from 'react-router-dom';
import { useSearchParamsChange } from "security";
import { useFindOneUsers } from '../hooks/useFindOneUsers';
import UserCreateModal from './UserCreateModal'

function UserEditModal() {
    const [searchParams] = useSearchParams();
    const entityId = searchParams.get('edit');
    const { isLoading, data, error } = useFindOneUsers(entityId);
    const { removeField } = useSearchParamsChange('edit');

    const handleCloseEdit = useCallback(() => {
        removeField('edit')
    }, [removeField]);

    return (
        <UserCreateModal
            dataError={error}
            initValue={data}
            loadingInitData={isLoading}
            onClose={handleCloseEdit}
            open={Boolean(entityId)}
            title='edit'
            userId={entityId}
        />
    )
}

export default memo(UserEditModal);