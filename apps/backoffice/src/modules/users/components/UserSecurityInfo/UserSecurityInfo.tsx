import { memo } from 'react'
import { useSecurity, useUser } from 'security';
import { useParams } from 'react-router';
import ChangePassword from './ChangePassword';
import RetypePassword from './RetypePassword';

function UserSecurityInfo() {
    const { hasPermission } = useSecurity();
    const { user, isLoading } = useUser();
    const { id } = useParams();

    //todo handle loading
    if (isLoading)
        return <>loading</>

    if (user?.id === id) {
        return <ChangePassword />
    }

    return (
        <>
            {hasPermission('ADMIN') && <RetypePassword />}
        </>
    );
}

export default memo(UserSecurityInfo);
