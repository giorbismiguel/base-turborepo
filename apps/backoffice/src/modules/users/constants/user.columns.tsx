import { UserStatus } from "modules/users/components/UserStatus";
import { UserCell } from "modules/users/components/UserCell";
import { UserRowActions } from "modules/users/components/UserRowActions";
import type { HeadCell } from "admin-layout";
import { CellType } from "admin-layout";
import { renderTagList } from "mui-react-common";
import { RoleChip } from "modules/security/components/RoleCell/RoleCell";
import { styled } from "@mui/material";
import type { InterfaceRole } from "modules/security/interfaces";
import type { InterfaceRoleSetting } from "../interfaces/IRoleSetting";


export const RolesCell = styled('div')(({ theme }) => ({
    '.MuiPaper-root': {
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: '63px',
        width: '32px',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
    }
}));


function Text({ text }: { text?: InterfaceRoleSetting }) {
    return (<RoleChip role={text?.role as InterfaceRole} />);
}


export const userColumns: HeadCell[] = [
    {
        field: 'fullName',
        headerName: 'users:name',
        disablePadding: true,
        renderCell: (name: string, user: any) => <UserCell avatar={user.avatar} name={user.fullName}
            userId={user._id} />,
    },
    {
        field: 'email',
        headerName: 'common:email',
    },
    {
        field: 'phone',
        headerName: 'common:phone',
    },
    {
        field: 'status',
        disablePadding: true,
        headerName: 'users:status',
        component: UserStatus,
    },
    {
        field: 'roles',
        headerName: 'users:roles',
        disablePadding: true,
        renderCell: (roles) => <RolesCell>{renderTagList(roles, 2, Text)}</RolesCell>
    },
    {
        field: 'createdAt',
        type: CellType.DATE,
        headerName: 'common:createdAt',
    },
    {
        field: 'actions',
        sortable: false,
        width: 100,
        headerName: 'actions',
        disablePadding: true,
        component: UserRowActions
    },
];