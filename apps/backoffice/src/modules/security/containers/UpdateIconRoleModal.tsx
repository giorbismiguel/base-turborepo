import { memo, useCallback, useState } from 'react'
import { Box, Button, DialogActions, DialogContent, } from "@mui/material";
import { Trans, useTranslation } from "react-i18next";
import { useRoleDetail } from "modules/security/contexts";
import { DialogForm, Form, FormCheckBoxField, HandlerError } from "mui-react-common";
// import { Check } from '@mui/icons-material';
import useRoleUpdateIconForm from 'modules/security/hooks/useRoleUpdateIconForm';
import { LoadingButton } from '@mui/lab';

interface UpdateIconRoleModalProps {
    open: boolean,
    onClose: () => void,
}

const components = {
    bold: <strong />
};

function UpdateIconRoleModal({
    open,
    onClose,
}: UpdateIconRoleModalProps) {
    const { t } = useTranslation('role');
    const { data: role } = useRoleDetail();
    const { isLoading, reset, onSubmit, control, error } = useRoleUpdateIconForm(role, onClose);
    const [currentAvatar, setCurrentAvatar] = useState(role?.avatar);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const handleOnClick = useCallback((avatar: string) => {
        setCurrentAvatar(avatar)
        reset({ avatar })
    }, [setCurrentAvatar, reset])

    const handleClose = useCallback(() => {
        onClose();
        reset();
    }, [onClose, reset])

    return (
        <DialogForm
            aria-labelledby="update-icon-to-role-title"
            maxWidth="xs"
            onClose={handleClose}
            open={open}
            subtitle={<Trans components={components} i18nKey="role:updateIconRoleSubtitle"
                values={{ role: role?.name }} />}
            title={t('updateRoleIcon')}>

            <DialogContent>
                <HandlerError error={error} />
                <Form control={control} id="form-update-icon-to-role" isLoading={isLoading} onSubmit={onSubmit}
                    size="large">
                    <Box className="flex items-center justify-center flex-wrap" mt={1}>
                        <>
                            {
                                [...Array(17)].map((_, index) => {
                                    const avatar = `role${index + 1}`;
                                    // const src = `/images/roles/${avatar}.png`;

                                    return (
                                        <FormCheckBoxField
                                            checked={avatar === currentAvatar}
                                            // checkedIcon={
                                            //     <Badge
                                            //         anchorOrigin={{
                                            //             vertical: 'top',
                                            //             horizontal: 'right',
                                            //         }}
                                            //         badgeContent={<Check
                                            //             style={{ fontSize: 10, padding: 0, color: 'white' }} />}
                                            //         color="primary"

                                            //     >
                                            //         <Avatar component="div" src={src} sx={{ width: 50, height: 50 }} />
                                            //     </Badge>
                                            // }
                                            // icon={<Avatar component="div" src={src} sx={{ width: 50, height: 50 }} />}
                                            key={avatar}
                                            name="avatar"
                                            // onClick={() => handleOnClick(avatar)}
                                            value={Boolean(avatar)}
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
                <LoadingButton form="form-update-icon-to-role" loading={isLoading}
                    type="submit"
                    variant="contained">
                    {t('common:save')}
                </LoadingButton>
            </DialogActions>
        </DialogForm>
    );
}

export default memo(UpdateIconRoleModal);