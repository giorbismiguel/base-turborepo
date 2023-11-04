// @ts-nocheck
import React, { memo } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import type { ChildrenProps} from 'mui-react-common';
import { HandlerError, LoadingButton } from 'mui-react-common';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { ButtonLink } from 'react-security';
import Box from "@mui/material/Box";


interface SentStateProps {
  action: any,
  buttonText: string,
  email: string,
  error: any,
  isLoading: boolean,
  link?: string,
  message: string,
}

interface SentTextProps {
  email: string,
  message: string
}

function Success({ children }: ChildrenProps) {
  return <Alert className="mb-4" severity="success">
    <AlertTitle>{children}</AlertTitle>
  </Alert>
}

const components = {
  alert: <Success />,
  brake: <div className="mb-4" />,
  bold: <strong />
};

export function SentText({ email, message }: SentTextProps) {
  return <Trans components={components} i18nKey={message} values={{ email }} />
}

function SentState({ email, message, buttonText, link, action, isLoading, error }: SentStateProps) {
  const { t } = useTranslation('authentication');

  const Button = link ? ButtonLink : LoadingButton;

  return (
    <Box mt={2}>
      <Box mb={4}>
        <SentText email={email} message={message} />
      </Box>
      <HandlerError error={error} />
      <div className={error ? 'mt-8' : null}>
        <Button
          disabled={isLoading}
          fullWidth
          loading={isLoading}
          onClick={action}
          size="large"
          to={link}
          type='submit'
          variant='contained'
        >
          {t(buttonText)}
        </Button>
      </div>
    </Box>
  );
}

export default memo(SentState);
