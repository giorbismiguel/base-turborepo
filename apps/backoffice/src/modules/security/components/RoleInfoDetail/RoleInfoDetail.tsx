import { memo } from 'react'
import { Stack, Typography } from "@mui/material";
import { useRoleDetail } from "modules/security/contexts";
import { DetailStack } from "mui-react-common";
import { ROLE_DETAILS_SUMMARY } from "modules/security/constants";
import AvatarUploadBase from "components/UploadFiles/AvatarUploadBase";
import { useToggle } from "@dfl/hook-utils";
import SecurityIcon from "@mui/icons-material/Security";
import UpdateIconRoleModal from "modules/security/containers/UpdateIconRoleModal";


const RoleInfoDetail = () => {
    const { data: role } = useRoleDetail();
    const { isOpen, onOpen, onClose } = useToggle();
    return (
        <Stack p={2} pt={5} spacing={2}>
            <Stack direction="column" alignItems="center" spacing={0}>
                <AvatarUploadBase
                    sx={{ bgColor: 'primary.dark' }}
                    src={`/images/roles/${role?.avatar}.png`}
                    onClick={onOpen}>
                    <SecurityIcon sx={{ fontSize: 50 }} />
                </AvatarUploadBase>
                <Typography variant={'h2'} children={role?.name} />
                <Typography color={'text.secondary'} children={role?.description} />
            </Stack>
            <DetailStack details={ROLE_DETAILS_SUMMARY} data={role} />
            <UpdateIconRoleModal open={isOpen} onClose={onClose} />
        </Stack>
    );

}

export default memo(RoleInfoDetail);