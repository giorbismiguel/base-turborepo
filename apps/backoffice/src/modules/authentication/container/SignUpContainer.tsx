// @ts-nocheck
import {memo} from 'react';
import {
    FormTextField,
    FormPasswordField,
    Span,
    Form,
    LoadingButton,
    FormSwitchField,
    HandlerError
,ConditionContainer} from 'mui-react-common';
import Grid from '@mui/material/Grid';
import {useTranslation, Trans} from 'react-i18next';
import SocialLogin from 'modules/authentication/components/SocialLogin/SocialLogin';
import OrDivider from 'modules/authentication/components/OrDivider/OrDivider';
import useSignUpForm from 'modules/authentication/hooks/useSignUpForm';
import {SignUpSent} from 'modules/authentication/components/SignUpSent';
import {ReactLink} from 'security';
import Box from "@mui/material/Box";
import {SIGNUP_ERRORS} from '../constants/login.errors';

const components = {
    terms: <ReactLink target='_blank' to="/terms-conditions" underline='hover'/>,
    small: <Span color='primary.main'/>
};

function SignUp() {
    const {t} = useTranslation(['authentication', 'common']);
    const {
        onSubmit,
        control,
        isLoading,
        error,
        termAcceptance,
        isSuccess,
        data
    } = useSignUpForm();



    return (
        <div>
            <ConditionContainer
                active={!isSuccess}
                alternative={<SignUpSent email={data?.email}/>}
            >
                <HandlerError error={error} errors={SIGNUP_ERRORS}/>
                <SocialLogin isLoading={isLoading}/>
                <OrDivider/>

                <Form isLoading={isLoading} onSubmit={onSubmit}>
                    <Grid columnSpacing={2} container rowSpacing={4}>
                        <Grid item md={6} xs={12}>
                            <FormTextField
                                control={control}
                                disabled={isLoading}
                                label={t('common:firstName')}
                                name='firstName'
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <FormTextField
                                control={control}
                                disabled={isLoading}
                                label={t('common:lastName')}
                                name='lastName'
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormTextField
                                control={control}
                                disabled={isLoading}
                                label={t('common:email')}
                                name='email'
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormTextField
                                control={control}
                                disabled={isLoading}
                                label={t('common:idNumber')}
                                name='idNumber'
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormPasswordField
                                control={control}
                                disabled={isLoading}
                                label={t('common:password')}
                                name='password'
                            />
                        </Grid>
                    </Grid>
                    <Box mt={2}>
                        <FormSwitchField
                            control={control}
                            disabled={isLoading}
                            label={
                                <Trans components={components} i18nKey='authentication:acceptTerms'/>
                            }
                            name='acceptTerms'
                        />
                    </Box>
                    <Box mt={4}>
                        <LoadingButton
                            disabled={!termAcceptance}
                            fullWidth
                            loading={isLoading}
                            size="large"
                            type='submit'
                            variant='contained'
                        >
                            {t('signup')}
                        </LoadingButton>
                    </Box>
                </Form>
            </ConditionContainer>
            <Box mt={2} textAlign="center">
                <Span color='text.secondary' mt={3}>
                    {t('haveAccount')}
                    <ReactLink to='/auth/login' underline='hover'>
                        {t('login')}
                    </ReactLink>
                </Span>
            </Box>
        </div>
    );
}

export default memo(SignUp);
