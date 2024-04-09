import UserServices from "modules/users/services/user.services";
import { useQuery } from "react-query";
import { useTableRequest } from "admin-layout";

export const useFindUsersByRole = (roleId: string) => {
  const { fetch, queryKey } = useTableRequest(UserServices.search, {
    field: "roles.role",
    value: roleId,
  });

  return useQuery(["users", `users-${roleId}`, queryKey], fetch);
};
