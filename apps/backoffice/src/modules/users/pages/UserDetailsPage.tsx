import {memo} from 'react'
import UserDetailContainer from "modules/users/containers/UserDetailContainer";
import {CenterPageLayout} from "layouts";


function UserDetailsPage() {

    return (
        <CenterPageLayout>
            <UserDetailContainer/>
        </CenterPageLayout>
    );

}

export default memo(UserDetailsPage);
