import { memo } from 'react'
import ChangePassword from './ChangePassword';
import RetypePassword from './RetypePassword';
import { useSecurity, useUser } from 'security';
import { useParams } from 'react-router';

const UserSecurityInfo = () => {
    const { hasPermission } = useSecurity();
    const { user, isLoading } = useUser();
    let { id } = useParams();

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
