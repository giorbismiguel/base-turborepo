import {memo} from 'react'
import UserDetailContainer from "modules/users/containers/UserDetailContainer";
import {CenterPageLayout} from "layouts";


function UserDetails() {

    return (
        <CenterPageLayout>
            <UserDetailContainer/>
        </CenterPageLayout>
    );

}

export default memo(UserDetails);
