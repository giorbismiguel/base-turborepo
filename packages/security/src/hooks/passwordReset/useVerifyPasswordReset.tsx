import { useCallback, useEffect, useRef } from "react";
import { useIsClientSide } from "hook-utils";
import { RecoveryPasswordService } from "../../services";
import { useApiRequestReducer } from "../useApiRequest";

type Type = "email" | "phone";

const useVerifyAPi = (type?: Type) => {
  const { startRequest, errorRequest, completeRequest, state } =
    useApiRequestReducer({
      isLoading: true,
    });
  const mutate = useCallback(
    async (key: string) => {
      startRequest();
      try {
        const data = await RecoveryPasswordService.check(key, type);
        completeRequest(data);
      } catch (e) {
        errorRequest(e);
      }
    },
    [type]
  );

  return {
    ...state,
    mutate,
  };
};

type Executed = {
  [key: string]: boolean;
};

const useVerifyPasswordReset = (key: string, type?: Type) => {
  const isClientSide = useIsClientSide();
  const { mutate, isLoading, isError, error, data, isSuccess } =
    useVerifyAPi(type);
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
    isSuccess,
    isLoading,
    isError,
    data,
    error,
  };
};

export default useVerifyPasswordReset;
