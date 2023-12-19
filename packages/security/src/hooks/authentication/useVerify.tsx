import { useCallback, useEffect, useRef } from "react";
import { useIsClientSide } from "hook-utils";
import { useApiRequestReducer } from "../useApiRequest";
import { AuthService } from "../../services";
import useAuth from "../useAuth";

const useVerifyAPi = () => {
  const { startRequest, errorRequest, completeRequest, state } =
    useApiRequestReducer({
      isLoading: true,
    });
  const { setAuth } = useAuth();
  const mutate = useCallback(async (key: string) => {
    startRequest();
    try {
      const data = await AuthService.verify(key);
      completeRequest(data);
      setAuth(data);
    } catch (e) {
      errorRequest(e);
    }
  }, []);

  return {
    ...state,
    mutate,
  };
};

type Executed = {
  [key: string]: boolean;
};

const useVerify = (key: string) => {
  const isClientSide = useIsClientSide();
  const { mutate, isLoading, isError, error, data, isSuccess } = useVerifyAPi();
  const executed = useRef<Executed>({});

  useEffect(() => {
    if (isClientSide && !executed.current[key]) {
      executed.current[key] = true;
      mutate(key).then();
    } else {
      console.log("NOT VERIFY INTENT");
    }
  }, [key, isClientSide, mutate]);

  return {
    mutate,
    isLoading,
    isError,
    isSuccess,
    error,
    data,
  };
};

export default useVerify;
