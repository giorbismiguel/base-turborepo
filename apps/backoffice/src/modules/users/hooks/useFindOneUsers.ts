import { useCallback } from "react";
import { useQuery } from "react-query";
import { USERS_ONE_KEY } from "modules/users/constants/queries";
import type { IUser } from "modules/users/interfaces/IUser";
import { UserService } from "modules/users/services";

export const useFindOneUsers = (id: string | null) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  const fetch = useCallback(() => UserService.getUserWhitTransformRoles(id!), [id]);
  return useQuery<IUser>([id, USERS_ONE_KEY], fetch, { enabled: Boolean(id) });
};
