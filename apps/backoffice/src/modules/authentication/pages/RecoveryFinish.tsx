import {memo} from 'react'
import {useParams} from "react-router";
import ResetPasswordContainer from "modules/authentication/container/ResetPasswordContainer";

const RecoveryFinish = () => {
    let params = useParams();

    return <ResetPasswordContainer verifyKey={params.key as string}/>;

}

export default memo(RecoveryFinish);