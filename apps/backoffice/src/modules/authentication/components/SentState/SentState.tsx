// @ts-nocheck
import React, { memo } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { ChildrenProps, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { ButtonLink } from '@dfl/react-security';
import Box from "@mui/material/Box";


type SentStateProps = {
  action: any,
  buttonText: string,
  email: string,
  error: any,
  isLoading: boolean,
  link?: string,
  message: string,
};

type SentTextProps = {
  email: string,
  message: string
};

const Success = ({ children }: ChildrenProps) => (
  <Alert severity={'success'} className={'mb-4'}>
    <AlertTitle>{children}</AlertTitle>
  </Alert>
);

const components = {
  alert: <Success />,
  brake: <div className={'mb-4'} />,
  bold: <strong />
};

export const SentText = ({ email, message }: SentTextProps) => (
  <Trans i18nKey={message} values={{ email }} components={components} />
);

const SentState = ({ email, message, buttonText, link, action, isLoading, error }: SentStateProps) => {
  const { t } = useTranslation('authentication');

  const Button = link ? ButtonLink : LoadingButton;

  return (
    <Box mt={2}>
      <Box mb={4}>
        <SentText email={email} message={message} />
      </Box>
      <HandlerError error={error} />
      <div className={error && 'mt-8'}>
        <Button
          fullWidth
          type='submit'
          variant='contained'
          size={'large'}
          loading={isLoading}
          disabled={isLoading}
          to={link}
          onClick={action}
        >
          {t(buttonText)}
        </Button>
      </div>
    </Box>
  );
};

export default memo(SentState);
