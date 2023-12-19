import { useMemo } from "react";
import { useQuery } from "react-query";

type FetchFuncType =
  | ((payload: string | string[] | any) => Promise<any>)
  | undefined;

const buildSingleFetch = (value: string, fetchFunc: FetchFuncType) => {
  const fetch = () => {
    return fetchFunc?.(value);
  };

  const isEnabled = value && fetchFunc ? typeof value === "string" : false;

  return { fetch, isEnabled };
};

const buildMultiFetch = (value: string[], fetchFunc: FetchFuncType) => {
  const payload = {
    filters: {
      type: "IN",
      field: "_id",
      value: value,
      objectId: true,
    },
    size: value.length,
  };

  const fetch = async () => {
    const data = await fetchFunc?.(payload);
    return data?.hasOwnProperty("hasMore") && data?.hasOwnProperty("total")
      ? data.data
      : data;
  };

  const isEnabled =
    value && value.length && fetchFunc
      ? !value.some((val) => typeof val !== "string")
      : false;
  return { fetch, isEnabled };
};

export const useFindValue = (
  fetchFunc: FetchFuncType,
  value: string | string[],
  enabled?: boolean,
  staleTime?: number
) => {
  const { fetch, isEnabled } = useMemo(() => {
    if (!Array.isArray(value)) return buildSingleFetch(value, fetchFunc);
    return buildMultiFetch(value, fetchFunc);
  }, [value, fetchFunc]);

  const { isLoading, data, isError } = useQuery([value], fetch, {
    staleTime: staleTime || 20000,
    enabled: Boolean(enabled) && isEnabled,
  });

  if (enabled && isEnabled) {
    return {
      isLoading,
      data: data || value,
      isError,
    };
  }

  return {
    isLoading: false,
    data: value,
    isError: false,
  };
};
