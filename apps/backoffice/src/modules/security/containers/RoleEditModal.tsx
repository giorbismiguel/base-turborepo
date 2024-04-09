import { memo, useCallback } from 'react';
import RoleCreateModal from "modules/security/containers/RoleCreateModal";
import { useSearchParams } from "react-router-dom";
import { useFindOneRoles } from "modules/security/hooks/useFindOneRoles";

const RoleEditModal = () => {
    let [searchParams, setSearchParams] = useSearchParams();
    const entityId = searchParams.get('edit');
    const {isLoading, data, error} = useFindOneRoles(entityId);
    const handleCloseEdit = useCallback(() => {
        const params = Object.fromEntries(searchParams.entries());
        delete params.edit;
        setSearchParams(params);
    }, [searchParams, setSearchParams]);

    return (
        <RoleCreateModal
            title={'edit'}
            open={!!entityId}
            onClose={handleCloseEdit}
            initValue={data}
            loadingInitData={isLoading}
            dataError={error}
        />
    );

}

export default memo(RoleEditModal);