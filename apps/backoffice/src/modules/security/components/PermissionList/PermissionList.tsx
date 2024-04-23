import React, { memo } from 'react';
import { FlexBox } from "mui-react-common";
import type { InlineChipProps } from "modules/security/components/PermissionList/PermissionItem";
import PermissionItem from "modules/security/components/PermissionList/PermissionItem";
import type { IPermission } from 'modules/users/interfaces/IPermission';

type PermissionListProps = InlineChipProps & {
    permissions: IPermission[] | undefined
}

function PermissionList({ permissions = [], inline }: PermissionListProps) {
    return (
        <FlexBox flexWrap="wrap">
            {
                permissions.map(permission => (
                    <PermissionItem inline={inline} key={permission._id} label={permission.name} />
                ))
            }
        </FlexBox>
    );
}


export default memo(PermissionList)