import { UseMutationOptions } from "react-query";

export type MutationOptions =
  | Omit<UseMutationOptions<any, unknown, any, unknown>, "mutationFn">
  | undefined;
