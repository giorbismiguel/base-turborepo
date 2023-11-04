import React, { memo } from 'react';
import { DFLError, NETWORK_ERROR } from 'react-security';
import ResultBase, { ErrorTitle, ResultBaseProps } from './ResultBase';
import NotConnectionResult from './NotConnectionResult';
import { useTranslation } from 'react-i18next';
import { Paragraph, Span } from '../Typography';

type ErrorResult = ResultBaseProps & {
  error?: DFLError
}

const ErrorResult = ({ error, ...props }: ErrorResult) => {
  const { t } = useTranslation('results');
  if (error?.reference === NETWORK_ERROR)
    return <NotConnectionResult {...props} />;

  return (
    <ResultBase {...props} >
      <div>
        <Span secondary>
          {t('errorResult.subtext')}
        </Span>
        <ErrorTitle>
          {t('errorResult.title')}
        </ErrorTitle>
        <Paragraph mb={2} fontWeight={'bold'}>
          {t('suggest')}
        </Paragraph>
        <Paragraph>
          {t('errorResult.suggest1')}
        </Paragraph>
        <Paragraph>
          {t('errorResult.suggest2')}
        </Paragraph>
      </div>
    </ResultBase>
  );

};

export default memo(ErrorResult);

ErrorResult.defaultProps = {
  image: '/images/error.png'
};