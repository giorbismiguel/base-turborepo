import { useCallback } from "react";
import { useQuery } from "react-query";
import { USERS_ONE_KEY } from "modules/users/constants/queries";
import { IUser } from "modules/users/interfaces/IUser";
import { UserService } from "modules/users/services";

export const useFindOneUsers = (id: string | null) => {
  const fetch = useCallback(() => UserService.getUserWhitTransformRoles(id as string), [id]);
  return useQuery<IUser>([id, USERS_ONE_KEY], fetch, { enabled: !!id });
};
