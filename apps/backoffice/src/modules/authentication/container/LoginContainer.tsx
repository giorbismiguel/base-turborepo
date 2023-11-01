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
} from 'components/commons';
import { Box, Stack } from '@mui/material';
import SocialLogin from 'modules/authentication/components/SocialLogin/SocialLogin';
import OrDivider from 'modules/authentication/components/OrDivider/OrDivider';
import { LOGIN_ERRORS } from '../constants';
import { ReactLink } from 'components/security';


const LoginContainer = () => {
  const { t } = useTranslation(['authentication', 'common']);
  const { onSubmit, control, isLoading, error } = useLoginForm();

  return (
    <div>
      <HandlerError error={error} errors={LOGIN_ERRORS} />
      <SocialLogin isLoading={isLoading} />
      <OrDivider/>
      <Form onSubmit={onSubmit} isLoading={isLoading} control={control}>
        <Grid container columnSpacing={2} rowSpacing={4}>
          <Grid item xs={12}>
            <FormTextField
                name='identifier'
                label={t('common:email')}
            />
          </Grid>
          <Grid item xs={12}>
            <FormPasswordField
                name='password'
              label={t('common:password')}
            />
          </Grid>
        </Grid>
        <Stack mt={2} direction={{ xs: 'column', sm: 'row' }} justifyContent={'space-between'}
               alignItems={'center'}>
          <FormSwitchField
            name='remember'
            label={t('remember')}
          />
          <ReactLink to='/auth/reset-password/init' underline="hover">
            {t('forgotPassword')}
          </ReactLink>
        </Stack>
        <Box mt={4}>
          <LoadingButton
            fullWidth
            type='submit'
            variant='contained'
            loading={isLoading}
            size={'large'}
          >
            {t('login')}
          </LoadingButton>
        </Box>
      </Form>
      <Box mt={2} textAlign={"center"}>
        <Span mt={3} color='text.secondary'>
          {t('notHaveAccount')}
          <ReactLink to='/auth/signup' underline="hover">
            {t('createAccount')}
          </ReactLink>
        </Span>
      </Box>
    </div>
  );
};

export default memo(LoginContainer);
