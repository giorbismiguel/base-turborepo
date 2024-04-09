import { FormEventHandler, memo } from 'react'
import { Form, FormDarkTextField, HandlerError } from "mui-react-common";
import { Grid } from "@mui/material";
import { useTranslation } from "react-i18next";

type RoleFormProps = {
    error: any,
    control: any,
    isLoading: boolean,
    onSubmit: FormEventHandler | undefined,
}

const RoleForm = ({
    error,
    control,
    isLoading,
    onSubmit
}: RoleFormProps) => {
    const { t } = useTranslation('role');

    return (
        <div>
            <HandlerError error={error} />
            <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'}
                id={'form'}>
                <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={12}>
                        <FormDarkTextField
                            fullWidth
                            autoFocus
                            name="name"
                            label={t('name')}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormDarkTextField
                            fullWidth
                            multiline
                            minRows={3}
                            name="description"
                            label={t('description')}
                        />
                    </Grid>
                </Grid>
            </Form>
        </div>
    );

}

export default memo(RoleForm);