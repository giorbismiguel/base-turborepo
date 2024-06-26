import { memo } from 'react'
import {
    List,
} from "@mui/material";
import RoleItem from "modules/users/components/UserSummary/RoleItem";
import { InterfaceRole } from "modules/security/interfaces";

type RoleListProps = {
    roles: InterfaceRole[]
    userId: string
}

const RoleList = ({ roles, userId }: RoleListProps) => {
    return (
        <List dense>
            {
                roles?.map((role) => (
                    <RoleItem key={role?._id} role={role} roles={roles} userId={userId} />
                ))
            }
        </List>
    )
}

export default memo(RoleList);