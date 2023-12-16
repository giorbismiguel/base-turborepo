import { memo } from 'react';
import Grid from '@mui/material/Grid';
import { useLoginForm } from 'modules/authentication/hooks';
import { useTranslation } from 'react-i18next';
import {
  FormTextField,
  FormPasswordField,
  LoadingButton,
  Span,
  Form,
  FormSwitchField,
  HandlerError
} from 'mui-react-common';
import { Box, Stack } from '@mui/material';
import SocialLogin from 'modules/authentication/components/SocialLogin/SocialLogin';
import OrDivider from 'modules/authentication/components/OrDivider/OrDivider';
import { ReactLink } from 'security';
import { LOGIN_ERRORS } from '../constants';


function LoginContainer() {
  const { t } = useTranslation(['authentication', 'common']);
  const { onSubmit, control, isLoading, error } = useLoginForm();

  return (
    <div>
      <HandlerError error={error} errors={LOGIN_ERRORS} />
      <SocialLogin isLoading={isLoading} />
      <OrDivider/>
      <Form control={control} isLoading={isLoading} onSubmit={onSubmit}>
        <Grid columnSpacing={2} container rowSpacing={4}>
          <Grid item xs={12}>
            <FormTextField
                label={t('common:email')}
                name='identifier'
            />
          </Grid>
          <Grid item xs={12}>
            <FormPasswordField
              label={t('common:password')}
              name='password'
            />
          </Grid>
        </Grid>
        <Stack alignItems="center" direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between"
               mt={2}>
          <FormSwitchField
            label={t('remember')}
            name='remember'
          />
          <ReactLink to='/auth/reset-password/init' underline="hover">
            {t('forgotPassword')}
          </ReactLink>
        </Stack>
        <Box mt={4}>
          <LoadingButton
            fullWidth
            loading={isLoading}
            size="large"
            type='submit'
            variant='contained'
          >
            {t('login')}
          </LoadingButton>
        </Box>
      </Form>
      <Box mt={2} textAlign="center">
        <Span color='text.secondary' mt={3}>
          {t('notHaveAccount')}
          <ReactLink to='/auth/signup' underline="hover">
            {t('createAccount')}
          </ReactLink>
        </Span>
      </Box>
    </div>
  );
}

export default memo(LoginContainer);
