import { DFLError } from "../types/error.types";

export const isNetworkError = (error: DFLError) => {
  return !error.response && !error.status;
};

export const getResponseError = (error: DFLError) => {
  if (error?.response)
    if (typeof error?.response?.data === "object") return error?.response?.data;
    else if (typeof error?.response?.data === "string")
      return {
        status: error?.response.status,
        message: error?.response.statusText || error?.response?.data,
      };
  return error;
};
