import {memo} from 'react'
import {useParams} from "react-router-dom";
import {RoleDetailProvider} from "modules/security/contexts";
import RoleDetailsContainer from "modules/security/containers/RoleDetailsContainer";

const RoleDetails = () => {
    const {id} = useParams();

    return (
        <RoleDetailProvider roleId={id as string}>
            <RoleDetailsContainer/>
        </RoleDetailProvider>
    );

}

export default memo(RoleDetails);