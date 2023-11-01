import { ApiClientService, AuthService } from '../services';
import { CURRENT_USER_KEY } from '../settings';
import { useQuery, useQueryClient } from 'react-query';
import { useCallback } from 'react';
import { AxiosError } from 'axios';
import { CurrentUser } from '../types/auth';

export const useMe = (initUser: any, setUser: (value: any) => void): CurrentUser => {
  const hasToken = !!ApiClientService.getToken();
  const queryClient = useQueryClient();
  const { isLoading, error, data, refetch } = useQuery(CURRENT_USER_KEY, async () => {
    const hasToken = !!ApiClientService.getToken();

    if (!hasToken) {
      setUser(null);
      return Promise.reject({ authenticatedError: true });
    }
    const user = await AuthService.getMe();
    setUser(user);
    return user;
  }, {
    retry: (failureCount: number, error: any) => {
      if (error?.authenticatedError) return false;
      if (error?.code === 403 || error?.code === 401) return false;
      return true;
    },
    initialData: initUser,
    refetchOnWindowFocus: false,
    refetchOnMount: true,
    refetchOnReconnect: true,
    enabled: hasToken,
    onError: (err: AxiosError) => {
      // @ts-ignore
      if (err?.code === 403 || err?.code === 401) {
        ApiClientService.removeToken();
        queryClient.invalidateQueries(CURRENT_USER_KEY);
      }
    }
  });

  const loadUser = useCallback(() => {
    refetch({ throwOnError: true, cancelRefetch: true }).then();
  }, [refetch]);

  return {
    error,
    user: !error ? data : null,
    isLoading,
    loadUser,
    hasToken
  };
};

export default useMe;
