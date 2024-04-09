import {memo} from 'react'
import UserDetailContainer from "modules/users/containers/UserDetailContainer";
import {CenterPageLayout} from "layouts";


const UserDetails = () => {

    return (
        <CenterPageLayout>
            <UserDetailContainer/>
        </CenterPageLayout>
    );

}

export default memo(UserDetails);
