import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import useUserUpdateForm from '../hooks/useUserUpdateForm';
import { Grid } from '@mui/material';
import { FormTextField, LoadingButton } from 'mui-react-common';

// type UserBasicFormProps = {}

const UserBasicForm = () => {
  const { t } = useTranslation('account');
  const { onSubmit, control, isLoading } = useUserUpdateForm();

  return (
    <form onSubmit={onSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <FormTextField
            required
            name="firstName"
            label={t("firstName")}
            control={control}
            disabled={isLoading}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormTextField
            required
            name="lastName"
            label={t("lastName")}
            control={control}
            disabled={isLoading}
          />
        </Grid>
        <Grid item xs={12}>
          <FormTextField
            required
            name="email"
            type={'email'}
            label={t("email")}
            control={control}
            disabled={isLoading}
          />
        </Grid>
      </Grid>
      <LoadingButton
        type="submit"
        variant="contained"
        size={"large"}
        loading={isLoading}
      >
        {t("signup")}
      </LoadingButton>
    </form>
  );
};

export default memo(UserBasicForm);
