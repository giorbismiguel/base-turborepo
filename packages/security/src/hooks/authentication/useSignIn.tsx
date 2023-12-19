import { useMutation } from "react-query";
import useAuth from "../useAuth";
import { AuthService } from "../../services";

export const useSignIn = () => {
  const { setAuth } = useAuth();

  const { mutateAsync, mutate, isLoading, isError, data, error, isSuccess } =
    useMutation(AuthService.signIn, {
      onSuccess: (data) => {
        setAuth(data);
      },
    });

  return {
    mutateAsync,
    mutate,
    isLoading,
    isSuccess,
    isError,
    data,
    error,
  };
};
