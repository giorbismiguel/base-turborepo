import {memo} from 'react'
import {RoleInfoDetail} from "modules/security/components/RoleInfoDetail";
import {RoleDetailActions} from "modules/security/components/RoleDetailActions";
import {useRoleDetail} from '../contexts';
import {SummaryWithAvatarSkeleton} from "components/CommonLoadings";

const RoleDetailsSummary = () => {
    const {isLoading} = useRoleDetail();

    if (isLoading) {
        return (
            <SummaryWithAvatarSkeleton/>
        )
    }

    return (
        <>
            <RoleInfoDetail/>
            <RoleDetailActions/>
        </>
    );
}

export default memo(RoleDetailsSummary);