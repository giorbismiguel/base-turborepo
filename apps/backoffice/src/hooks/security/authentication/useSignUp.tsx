import { useMutation } from 'react-query';
import { AuthService } from '../../services';

export const useSignUp = () => {
  const { mutateAsync, mutate, isLoading, isError, data, error, isSuccess } = useMutation(AuthService.signUp, {
    onSuccess: () => {
      window.scroll({
        top: 0,
        left: 0
      });
    },
    onError: () => {
      window.scroll({
        top: 0,
        left: 0
      });
    }
  });

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
