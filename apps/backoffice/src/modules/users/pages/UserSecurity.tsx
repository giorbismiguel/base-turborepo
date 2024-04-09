import { memo } from 'react'
import AccountSecurity from "modules/users/containers/AccountSecurity";
import { CenterPageLayout } from "layouts";


const UserSecurity = () => {

    return (
        <CenterPageLayout>
            <AccountSecurity />
        </CenterPageLayout>
    );

}

export default memo(UserSecurity);
