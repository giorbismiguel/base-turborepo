import { RoleRowActions } from "modules/security/components/RoleRowActions";
import { CellType, HeadCell } from "admin-layout";
import { OwnChipProps, renderTagList } from "mui-react-common";
import PermissionItem from "modules/security/components/PermissionList/PermissionItem";
import { RoleCell } from "modules/security/components/RoleCell";


const Text = ({ text }: OwnChipProps) => {
    return (<PermissionItem label={text} inline />);
}

export const roleColumns: HeadCell[] = [
    {
        field: 'name',
        headerName: 'role:name',
        disablePadding: true,
        renderCell: (name, data) => <RoleCell role={data} />
    },
    {
        field: 'description',
        headerName: 'common:description',
    },
    {
        field: 'permissions',
        headerName: 'role:permissions',
        disablePadding: true,
        renderCell: (permissions) => renderTagList(permissions, 3, Text)
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
        headerName: 'common:actions',
        disablePadding: true,
        renderCell: (_, row) => <RoleRowActions {...row} />
    },
];