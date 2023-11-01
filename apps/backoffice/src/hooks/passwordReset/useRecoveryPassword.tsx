import { useMutation } from 'react-query';
import useAuth from '../useAuth';
import { RecoveryPasswordService } from '../../services';
import { MutationOptions } from '../../types/react-query';

export const useRecoveryPasswordInit = (config?: MutationOptions) => {
  const {
    mutateAsync, mutate,
    isLoading, isError,
    data, error, reset, isSuccess
  } = useMutation(RecoveryPasswordService.init, config);

  return {
    mutateAsync,
    mutate,
    reset,
    isSuccess,
    isLoading,
    isError,
    data,
    error
  };
};


export const useRecoveryPasswordFinish = (key: string, { onSuccess, ...config }: {
  onSuccess?: (data: any, variables?: any, context?: any) => Promise<unknown> | void
} = {}) => {
  const { setAuth } = useAuth();

  const {
    mutateAsync, mutate,
    isLoading, isError,
    data, error, isSuccess, isPaused
  } = useMutation((value: any) => {
    if (value && !value?.key)
      value.key = key;
    return RecoveryPasswordService.finish(value);
  }, {
    onSuccess: (data) => {
      setAuth(data);
      onSuccess && onSuccess(data);
    }
    , ...config
  });

  return {
    mutateAsync,
    mutate,
    isLoading,
    isError,
    isPaused,
    data,
    error,
    isSuccess
  };
};

