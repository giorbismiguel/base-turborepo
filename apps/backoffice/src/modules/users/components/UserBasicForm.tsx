import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Grid } from '@mui/material';
import { Form, FormTextField } from 'mui-react-common';
import { LoadingButton } from '@mui/lab';
import useUserUpdateForm from '../hooks/useUserUpdateForm';

// type UserBasicFormProps = {}

function UserBasicForm() {
  const { t } = useTranslation('account');
  const { onSubmit, control, isLoading } = useUserUpdateForm();

  return (
    <Form control={control} onSubmit={onSubmit}>
      <Grid container spacing={2}>
        <Grid item md={6} xs={12}>
          <FormTextField
            disabled={isLoading}
            label={t("firstName")}
            name="firstName"
            required
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <FormTextField
            disabled={isLoading}
            label={t("lastName")}
            name="lastName"
            required
          />
        </Grid>
        <Grid item xs={12}>
          <FormTextField
            disabled={isLoading}
            label={t("email")}
            name="email"
            required
            type="email"
          />
        </Grid>
      </Grid>
      <LoadingButton
        loading={isLoading}
        size="large"
        type="submit"
        variant="contained"
      >
        {t("signup")}
      </LoadingButton>
    </Form>
  );
}

export default memo(UserBasicForm);
