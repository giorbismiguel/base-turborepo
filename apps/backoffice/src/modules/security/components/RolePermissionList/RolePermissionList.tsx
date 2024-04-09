import { memo } from 'react'
import { useRoleDetail } from "modules/security/contexts";
import { PermissionList } from "modules/security/components/PermissionList";
import { Button, Paper, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { FlexBox } from "mui-react-common";
import AddPermissionToRoleModalWithFetch from 'modules/security/containers/AddPermissionToRoleModalWithFetch';
import { useToggle } from '@dfl/hook-utils';
import SecurityIcon from '@mui/icons-material/Security';

const RolePermissionList = () => {
    const { data: role, isLoading } = useRoleDetail();
    const { t } = useTranslation('role');

    const { isOpen, onClose, onOpen } = useToggle(false);

    return (
        <Paper sx={{ marginBottom: 3, padding: 4, paddingTop: 3 }}>
            <FlexBox alignItems={'center'} justifyContent={"space-between"} mb={3}>
                <Typography variant={'h2'}>{t('permissions')}</Typography>
                <Button onClick={onOpen} variant={"contained"} disabled={isLoading}><SecurityIcon fontSize={'small'} sx={{ mr: 1 }} />  {t('permissionManage')}</Button>
            </FlexBox>
            <PermissionList permissions={role?.permissions} />
            <AddPermissionToRoleModalWithFetch open={isOpen} onClose={onClose} />
        </Paper>
    );
}

export default memo(RolePermissionList);