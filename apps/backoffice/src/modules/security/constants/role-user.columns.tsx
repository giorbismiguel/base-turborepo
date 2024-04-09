import { UserStatus } from "modules/users/components/UserStatus";
import { UserCell } from "modules/users/components/UserCell";
import { HeadCell } from "admin-layout";
import { RoleUsersRowActions } from "../components/RoleUsersRowActions";


export const userColumns: HeadCell[] = [
    {
        field: 'fullName',
        headerName: 'users:name',
        disablePadding: true,
        renderCell: (name, user) => <UserCell userId={user._field} name={user.fullName} avatar={user.avatar}
            email={user?.email} />,
    },
    {
        field: 'status',
        headerName: 'users:status',
        component: UserStatus,
    },
    {
        field: 'actions',
        sortable: false,
        width: 100,
        headerName: 'actions',
        disablePadding: true,
        component: RoleUsersRowActions
    },
];