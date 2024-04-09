import { memo, useCallback, useState } from 'react'
import { Avatar, Badge, Box, Button, DialogActions, DialogContent, } from "@mui/material";
import { Trans, useTranslation } from "react-i18next";
import { useRoleDetail } from "modules/security/contexts";
import { DialogForm, Form, FormCheckBoxField, HandlerError, LoadingButton } from "mui-react-common";
import { Check } from '@mui/icons-material';
import useRoleUpdateIconForm from 'modules/security/hooks/useRoleUpdateIconForm';

type UpdateIconRoleModalProps = {
    open: boolean,
    onClose: () => void,
}

const components = {
    bold: <strong />
};

const UpdateIconRoleModal = ({
    open,
    onClose,
}: UpdateIconRoleModalProps) => {
    const { t } = useTranslation('role');
    const { data: role } = useRoleDetail();
    const { isLoading, reset, onSubmit, control, error } = useRoleUpdateIconForm(role, onClose);
    const [currentAvatar, setCurrentAvatar] = useState(role?.avatar);

    const handleOnClick = useCallback((avatar: string) => {
        setCurrentAvatar(avatar)
        reset({ avatar })
    }, [setCurrentAvatar, reset])

    const handleClose = useCallback(() => {
        onClose?.();
        reset();
    }, [onClose, reset])

    return (
        <DialogForm
            open={open}
            maxWidth={'xs'}
            onClose={handleClose}
            title={t('updateRoleIcon')}
            subtitle={<Trans i18nKey={'role:updateIconRoleSubtitle'} values={{ role: role?.name }}
                components={components} />}
            aria-labelledby={'update-icon-to-role-title'}>

            <DialogContent>
                <HandlerError error={error} />
                <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'large'}
                    id={'form-update-icon-to-role'}>
                    <Box mt={1} className="flex items-center justify-center flex-wrap">
                        <>
                            {
                                [...Array(17)].map((_, index) => {
                                    const avatar = `role${index + 1}`;
                                    const src = `/images/roles/${avatar}.png`;

                                    return (
                                        <FormCheckBoxField
                                            name="avatar"
                                            key={avatar}
                                            value={avatar}
                                            checked={avatar === currentAvatar}
                                            icon={<Avatar sx={{ width: 50, height: 50 }} src={src} component="div" />}
                                            checkedIcon={
                                                <Badge
                                                    color="primary"
                                                    anchorOrigin={{
                                                        vertical: 'top',
                                                        horizontal: 'right',
                                                    }}
                                                    badgeContent={<Check
                                                        style={{ fontSize: 10, padding: 0, color: 'white' }} />}

                                                >
                                                    <Avatar sx={{ width: 50, height: 50 }} src={src} component="div" />
                                                </Badge>
                                            }
                                            onClick={() => handleOnClick(avatar)}
                                        />
                                    )
                                })
                            }
                        </>
                    </Box>
                </Form>
            </DialogContent>

            <DialogActions>
                <Button onClick={handleClose}>
                    {t('common:cancel')}
                </Button>
                <LoadingButton variant="contained" type={'submit'}
                    loading={isLoading}
                    form="form-update-icon-to-role">
                    {t('common:save')}
                </LoadingButton>
            </DialogActions>
        </DialogForm>
    );
}

export default memo(UpdateIconRoleModal);