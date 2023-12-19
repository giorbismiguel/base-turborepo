import { AxiosRequestConfig } from "axios";

export interface RequestConfig extends AxiosRequestConfig {
  ignoreSpace?: boolean;
  ignoreToken?: boolean;
  _retry?: boolean;
  locale?: string;
}

export interface UploadRequest {
  method?: "post" | "patch" | "get";
  headers?: { [key: string]: string };
  body?: Document | XMLHttpRequestBodyInit | null | undefined;
}
