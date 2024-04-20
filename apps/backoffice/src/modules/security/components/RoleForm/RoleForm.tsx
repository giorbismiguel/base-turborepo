import type { FormEventHandler} from 'react';
import { memo } from 'react'
import { Form, FormDarkTextField, HandlerError } from "mui-react-common";
import { Grid } from "@mui/material";
import { useTranslation } from "react-i18next";

interface RoleFormProps {
    error: any,
    control: any,
    isLoading: boolean,
    onSubmit: FormEventHandler | undefined,
}

function RoleForm({
    error,
    control,
    isLoading,
    onSubmit
}: RoleFormProps) {
    const { t } = useTranslation('role');

    return (
        <div>
            <HandlerError error={error} />
            <Form control={control} id="form" isLoading={isLoading} onSubmit={onSubmit}
                size="small">
                <Grid columns={{ xs: 4, sm: 8, md: 12 }} container spacing={{ xs: 1, md: 2 }}>
                    <Grid item xs={12}>
                        <FormDarkTextField
                            fullWidth
                            label={t('name')}
                            name="name"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormDarkTextField
                            fullWidth
                            label={t('description')}
                            minRows={3}
                            multiline
                            name="description"
                        />
                    </Grid>
                </Grid>
            </Form>
        </div>
    );

}

export default memo(RoleForm);