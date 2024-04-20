import {memo} from 'react'
import {UserGeneralInfo} from "modules/users/components/UserGeneralInfo";

function AccountGeneral() {

    return (
        <UserGeneralInfo/>
    );

}

export default memo(AccountGeneral);
