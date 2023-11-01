import React from 'react';
import { useMutation } from 'react-query';
import { AuthService } from '../../services';
import { MutationOptions } from '../../types/react-query';

const useResendConfirmation = (config: MutationOptions) => {
  const {
    mutateAsync, mutate,
    isLoading, isError, isSuccess,
    data, error
  } = useMutation(AuthService.resendConfirmationAccess, config);

  return {
    mutateAsync,
    mutate,
    isLoading,
    isSuccess,
    isError,
    data,
    error
  };
};

export default useResendConfirmation;
