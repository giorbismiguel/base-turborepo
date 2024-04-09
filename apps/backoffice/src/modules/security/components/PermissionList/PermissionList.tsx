import React, { memo } from 'react';
import { FlexBox } from "mui-react-common";
import PermissionItem, { InlineChipProps } from "modules/security/components/PermissionList/PermissionItem";

type PermissionListProps = InlineChipProps & {
    permissions: string[] | undefined
}

const PermissionList = ({ permissions = [], inline }: PermissionListProps) => {
    return (
        <FlexBox flexWrap={"wrap"}>
            {
                permissions.map(permission => (
                    <PermissionItem label={permission} key={permission} inline={inline} />
                ))
            }
        </FlexBox>
    );
}


export default memo(PermissionList)